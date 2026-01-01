"use strict";

// Helper for selecting elements
const $ = selector => document.querySelector(selector);

// Error message templates
const getErrorMsg = lbl => `${lbl} must be a valid number greater than zero.`;
const getErrorMsgTax = lbl => `${lbl} must be a valid number greater than 0 and less than 100.`;

/**
 * Logic Functions
 */
const calculateTax = (subtotal, taxRate) => (subtotal * taxRate) / 100;

const focusAndSelect = selector => {
    const elem = $(selector);
    if (elem) {
        elem.focus();
        elem.select();
    }
};

/**
 * Event Handlers
 */
const processEntries = () => {
    const sale = parseFloat($("#sale").value);
    const tax = parseFloat($("#tax").value);
    const errorDisplay = $("#error_message");
    
    // Reset display
    errorDisplay.textContent = "";

    // Validation Logic
    if (isNaN(sale) || sale <= 0) {
        errorDisplay.textContent = getErrorMsg("Sale amount");
        focusAndSelect("#sale");
    } else if (isNaN(tax) || tax <= 0 || tax >= 100) {
        errorDisplay.textContent = getErrorMsgTax("Tax rate");
        focusAndSelect("#tax");
    } else {
        // Calculation and Output
        const total = sale + calculateTax(sale, tax);
        $("#total").value = total.toFixed(2);
    }

    // Capitalize first letter of error if it exists
    if (errorDisplay.textContent) {
        const text = errorDisplay.textContent;
        errorDisplay.textContent = text.charAt(0).toUpperCase() + text.slice(1);
    }
};

const clearEntries = () => {
    $("#sale").value = "";
    $("#tax").value = "";
    $("#total").value = "";
    $("#error_message").textContent = "";
    $("#sale").focus();
};

/**
 * Initialization
 */
document.addEventListener("DOMContentLoaded", () => {
    $("#calculate_btn").addEventListener("click", processEntries);
    $("#clear_btn").addEventListener("click", clearEntries);
    
    // Allow pressing "Enter" to calculate
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.addEventListener("keypress", (e) => {
            if (e.key === "Enter") processEntries();
        });
    });

    $("#sale").focus();
});