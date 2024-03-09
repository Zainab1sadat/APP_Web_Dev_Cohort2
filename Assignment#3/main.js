        function calculateTax(subtotal){
            console.log("Running calculateTax function");
            let tax_amount = 0.0875;
            let tax = subtotal * tax_amount;
            console.log(tax);
            return tax;

        }
        function calculateTotal(subtotal, tax){
            console.log("Running calculateTotal function");
            let total = subtotal + tax ;
            console.log(total);
            return total;
        }
        function order(cost) {
            let subtotal = document.querySelector("#subtotal").textContent;
            subtotal = parseInt(subtotal);
            subtotal = subtotal + cost;
            console.log(subtotal);
      
            let taxTotal = calculateTax(subtotal);
      
            let finalTotal = calculateTotal(subtotal, taxTotal);
      
            taxTotal = taxTotal.toFixed(2);
            finalTotal = finalTotal.toFixed(2);
            document.querySelector("#subtotal").textContent = subtotal;
            document.querySelector("#tax").textContent = taxTotal;
            document.querySelector("#total").textContent = finalTotal;

        }
        // Register a click event for each of the prodcuts
        document.querySelector("#img_1").onclick = function() {
        order(10);
        };
        document.querySelector("#img_2").onclick = function() {
        order(20);
        };
        document.querySelector("#img_3").onclick = function() {
        order(30);
        };
