
let shopping_cart = {
    cart: {},
    total: 0,

    // Constructor
    addToBasket: function (productId, title, price) {
        if (typeof this.cart[productId] === "undefined") {
            this.total++;
            this.cart[productId] = {
                title: title,
                price: price,
                quantity: 1,
            };
            console.log(this.cart);
        }
        else
        {
            alert("Product exist in basket");
        }
    },
    addQuantity: function (productId, quantity) {

        if (typeof this.cart[productId] === "undefined") {
            alert("The product does not exist in the shopping cart.Please add products. :)");
        } else {
            this.cart[productId].quantity += quantity;
            console.log(this.cart);
        }
    },
    removeQuantity: function (productId, quantity) {
        if (typeof this.cart[productId] === "undefined") {
            alert("The product does not exist in the shopping cart.Please add products. :)");
        } else if (this.cart[productId].quantity < quantity) {
            alert("The amount you want to delete is much too large");
        } else {
            this.cart[productId].quantity -= quantity;
        }
    },
    delete: function (productId) {
        if (typeof this.cart[productId] === "undefined") {
            alert("The product does not exist in the shopping cart.Please add products. :)");
        } else {
            total--;
            this.cart[productId] = undefined;
            console.log(this.cart);
        }
    },

    getProducts: function () {
        console.log("get products");
        //afisare toate produsele din cart
        console.log(this.cart.length);
            console.log(this.cart);
    },

    getOrder:function(dataComenzii,status)
    {
        // total, date, status
        var d = new Date(2018, 11, 24, 10, 33, 30);
        console.log("Nr total de produse: "+this.total);
        console.log(d+" "+status);

    }
};
let invoicing=
    {
        invoice:{},
        setInvoicingDetails:function(name, email, phone, address, city, county, company, cui)
        {
            alert(name);
            event.preventDefault();
            console.log("in set invoicing");
            this.invoice=
                {
                    name:name,
                    email:email,
                    phone:phone,
                    address:address,
                    city:city,
                    country:county,
                    company:company,
                    cui:cui

                }
                console.log(this.invoice)

        }
    };
let shipping=
    {
        shipping:{},
        payment:{},
        setShippingDetails: function (name, email, phone, address, city, county)
        {
            alert(name);
            event.preventDefault();
            console.log("in set shipping");
            this.shipping=
                {
                    name:name,
                    email:email,
                    phone:phone,
                    address:address,
                    city:city,
                    country:county
                }
            console.log(this.shipping);
        },
        setPayment: function(type, cardNo, cardName, month, year, cvv)
        {
            event.preventDefault();
            this.payment=
            {
                type:type,
                cardNo:cardNo,
                cardName:cardName,
                month:month,
                year:year,
                cvv:cvv,
            }
            this.process();
            console.log(this.payment);
        },
        process: function ()
        {
        alert("Shipping has done!");
        }
    };