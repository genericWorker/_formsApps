"use strict";

        const calculateFV = () => {
            const resultDiv = document.getElementById("result");

            // TOGGLE LOGIC
            // If it's already showing, hide it and stop.
            if (resultDiv.style.display === "block") {
                resultDiv.style.display = "none";
                return; 
            }

            // GET VALUES
            const investment = parseFloat(document.getElementById("investment").value);
            const rate = parseFloat(document.getElementById("rate").value);
            const years = parseInt(document.getElementById("years").value);

            // CALCULATION
            let futureValue = investment;
            for (let i = 1; i <= years; i++) {
                futureValue += (futureValue * rate / 100);
            }

            // DISPLAY
            let output = `<h4>Investment amount = $${investment.toFixed(2)}<br>`;
            output += `Interest rate = ${rate}%<br>`;
            output += `Years = ${years}<br>`;
            output += `Future Value is $${futureValue.toFixed(2)}</h4>`;
            resultDiv.innerHTML = output;
            resultDiv.style.display = "block";
        };

        // ATTACH EVENT
        document.getElementById("calculate_btn").addEventListener("click", calculateFV);