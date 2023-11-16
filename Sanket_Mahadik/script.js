const currentDate = new Date();
const formattedDate = currentDate.toISOString().split("T")[0];


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("curnDate").innerHTML =
        document.getElementById("curnDate").innerHTML + " : " + formattedDate;

    document.getElementById("invoiceNum").innerHTML =
        document.getElementById("invoiceNum").innerHTML + invnum;

    const datePicker = document.getElementById("datePicker");
    datePicker.addEventListener("click", function() {
        this.focus();
    });
});

function addItem() {
    const table = document
        .getElementById("billTable")
        .getElementsByTagName("tbody")[0];
    const newRow = table.insertRow(table.rows.length);
    const cells = [];

    for (let i = 0; i < 4; i++) {
        cells.push(newRow.insertCell(i));
    }

    cells[0].innerHTML =
        '<input type="text" id="itemName" placeholder="Item Name"><br/><input type="text" id="itemDesc" placeholder="Item Description">';
    cells[1].innerHTML = '<input type="number" min="1" value="1">';
    cells[2].innerHTML =
        '<input type="number" min="1.00" step="0.01" value="0.00">';
    cells[3].innerHTML = '<button onclick="deleteItem(this)">Delete</button>';
    calculateTotal();
}

function deleteItem(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    calculateTotal();
}
const invnum = Math.floor(10 + Math.random() * 100);