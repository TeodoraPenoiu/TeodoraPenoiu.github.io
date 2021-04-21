// setInvoicingDetails(name, email, phone, address, city, county, company, cui)
// setShippingDetails(name, email, phone, address, city, county)

      function msg(){  
     alert("Hello Javatpoint");  
    }  



let invoicingDetails=
{
    invoice:{},
    shipping:{},
    setInvoicingDetails: function(name, email, phone, address, city, county, company, cui)
    {
      alert("merge");
        event.preventDefault();
       this.invoice=
           {
               name: name,
               email: email,
               phone:phone,
               address:phone,
               city:city,
               county:county,
               company:company,
               cui:cui
           }
           console.log(this.invoice);
    },
    setShippingDetails: function(name, email, phone, address, city, county)
    {
        event.preventDefault();
        this.shipping=
            {
                name: name,
                email: email,
                phone:phone,
                address:phone,
                city:city,
                county:county,
            }
            console.log(this.shipping);
    }

};
