"use strict";

var shoppingCart = (function() {
    let cart = [];

    // Constructor
    function Item(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    // Save cart
    function saveCart() {
        sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
    }

    // Load cart
    function loadCart() {
        cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
    }

    if (sessionStorage.getItem("shoppingCart") != null) {
        loadCart();
    }

    var obj = {};

    // Add to cart
    obj.addToBasket = function(id, name, price) {
        let found = false;
        for(let item in cart) {
            if(cart[item].id === id) {
                cart[item].quantity++;
                found = true;
            }
        }

        if(!found) {
            let item = new Item(id, name, price, 1);
            cart.push(item);
        }
        saveCart();

        displayCart();
    }

    // Set quantity from item
    obj.setQuantity = function(productId, quantity) {
        for(var i in cart) {
            if (cart[i].id === productId) {
                cart[i].quantity = quantity;
                break;
            }
        }
        saveCart();
    };

    // Increment quantity of an item from cart
    obj.addQuantity = function(productId, quantity) {
        console.log(productId);
        for(var item in cart) {
            if(cart[item].id === productId) {
                cart[item].quantity +=  quantity;
                break;
            }
        }
        saveCart();
    }


    // Remove item from cart
    obj.removeQuantity = function(productId, quantity) {
        for(var item in cart) {
            if(cart[item].id === productId) {
                cart[item].quantity -= quantity;
                if(cart[item].quantity <= 0) {
                    cart.splice(item, 1);
                }
                break;
            }
        }
        saveCart();
    }

    // Remove all items from cart
    obj.delete = function(productId) {
        for(var item in cart) {
            if(cart[item].id === productId) {
                cart.splice(item, 1);
                break;
            }
        }
        saveCart();
    }

    // Clear cart
    obj.clearCart = function() {
        cart = [];
        saveCart();
    }

    // Count cart
    obj.totalQuantity = function() {
        let totalQuantity = 0;
        for(let item in cart) {
            totalQuantity += cart[item].quantity;
        }
        return totalQuantity;
    }

    // Total cart
    obj.totalCart = function() {
        var totalCart = 0;
        for(var item in cart) {
            totalCart += cart[item].price * cart[item].quantity;
        }
        return Number(totalCart.toFixed(2));
    }

    // List cart
    obj.listCart = function() {
        var cartCopy = [];
        for(let i in cart) {
            let item = cart[i];
            let itemCopy = {};
            for(let p in item) {
                itemCopy[p] = item[p];

            }
            itemCopy.total = Number(item.price * item.quantity).toFixed(2);
            cartCopy.push(itemCopy)
        }
        return cartCopy;
    }

    // cart : Array
    // Item : Object/Class
    // addToBasket : Function
    // removeQuantity : Function
    // delete : Function
    // clearCart : Function
    // countCart : Function
    // totalCart : Function
    // listCart : Function
    // saveCart : Function
    // loadCart : Function
    return obj;
})();

// Triggers / Events

// Clear items
$('.clear-cart').click(function() {
    shoppingCart.clearCart();
    displayCart();
});


function displayCart() {
    var cartArray = shoppingCart.listCart();
    var output = "";
    for(var i in cartArray) {
        output += "<tr>"
            + "<td>" + cartArray[i].name + "</td>"
            + "<td>(" + cartArray[i].price + ")</td>"
            + "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-productid=" + cartArray[i].id + ">-</button>"
            + "<input type='number' class='item-quantity form-control' data-productid='" + cartArray[i].id + "' value='" + cartArray[i].quantity + "'>"
            + "<button class='plus-item btn btn-primary input-group-addon' data-productid=" + cartArray[i].id + ">+</button></div></td>"
            + "<td><button class='delete-item btn btn-danger' data-productid=" + cartArray[i].id + ">X</button></td>"
            + " = "
            + "<td>" + cartArray[i].total + "</td>"
            +  "</tr>";
    }
    $('.show-cart').html(output);
    $('.total-cart').html(shoppingCart.totalCart());
    $('.total-quantity').html(shoppingCart.totalQuantity());
    console.log(shoppingCart);
}

// Delete item button

$('.show-cart').on("click", ".delete-item", function(event) {
    var productId = $(this).data('productid')
    shoppingCart.delete(productId);
    displayCart();
})


// -1
$('.show-cart').on("click", ".minus-item", function(event) {
    var productId = $(this).data('productid');
    shoppingCart.removeQuantity(productId, 1);
    displayCart();
})
// +1
$('.show-cart').on("click", ".plus-item", function(event) {
    var productId = $(this).data('productid');
    shoppingCart.addQuantity(productId, 1)
    displayCart();
})

// Item quantity input
$('.show-cart').on("change", ".item-quantity", function(event) {
    var productId = $(this).data('productid');
    var quantity = Number($(this).val());
    shoppingCart.setQuantity(productId, quantity);
    displayCart();
});

displayCart();
