//
// setPayment(type, {cardNo, cardName, month, year, cvv})
// type: string, "cc" = credit card, "ramburs" = ramburs
// params: object, optional.
// process()

let payment=
    {
        pays:{},
        setPayment: function(type, cardNo, cardName, month, year, cvv) {
            event.preventDefault();
            if (type === 'cc') {
                this.pays =
                    {
                        type: type,
                        cardNo: cardNo,
                        cardName: cardName,
                        month: month,
                        year:year,
                        cvv: cvv,
                    }
            } else if (type == 'ramburs') {
                this.pays =
                    {
                        type: type,

                    }

            }
            this.process();
            console.log(this.pays);
        },
        process: function ()
        {
            alert("Shipping has done!");
        }

    };
