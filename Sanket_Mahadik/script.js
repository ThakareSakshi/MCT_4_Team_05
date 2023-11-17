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


function calculateTotal() {
    const table = document
        .getElementById("billTable")
        .getElementsByTagName("tbody")[0];
    const rows = table.getElementsByTagName("tr");

    let totalItems = 0;
    let totalAmount = 0;

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        const qtyInput = cells[1].getElementsByTagName("input")[0];
        const priceInput = cells[2].getElementsByTagName("input")[0];

        const qty = parseFloat(qtyInput.value);
        const price = parseFloat(priceInput.value);

        totalItems += qty;
        totalAmount += qty * price;

        qtyInput.removeEventListener("input", calculateTotal);
        priceInput.removeEventListener("input", calculateTotal);

        qtyInput.addEventListener("input", calculateTotal);
        priceInput.addEventListener("input", calculateTotal);
    }

    document.getElementById("totalItems").innerText = totalItems;
    document.getElementById("totalAmount").innerText = totalAmount.toFixed(2);
}

function reviewInvoice(event) {
    if (event) {
        event.preventDefault();
    }

    openModal();
}

document
    .getElementById("reviewInvoiceButton")
    .addEventListener("click", reviewInvoice);

function openModal() {
    console.log("came in open modal");
    const modal = document.getElementById("myModal");
    console.log(modal);
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function viewBill() {
    const billContent = generateBillContent();
    toggleVisibility("billContent");
    hideOtherContent("billContent");
    document.getElementById("billContent").innerHTML = billContent;
    document.getElementById("billContent").style.display = "block";
    document.getElementById("qrcode").style.display = "none";
}

function generateBillContent() {
    const billDetails = `
    Invoice Details:<span></span>
    <br/>
    Date: ${formattedDate}
    <br/>
    Due Date: <p style = "color:red;display:inline"> ${document.getElementById("datePicker").value}</p>
    <br/>
   
    Bill Contact Details:
    <br/>
    Bill To:
    <br/>
      Name: ${document.getElementById("billToName").value}<br/>
      Email: ${document.getElementById("billToEmail").value}<br/>
      Address: ${document.getElementById("billToAddress").value}<br/>

    Bill From:<br/>
      Name: ${document.getElementById("billFromName").value}<br/>
      Email: ${document.getElementById("billFromEmail").value}<br/>
      Address: ${document.getElementById("billFromAddress").value}<br/>

    Bill Details:<br/>
    Total Items: ${document.getElementById("totalItems").innerText}<br/>
    Total Amount: $${document.getElementById("totalAmount").innerText}<br/>

    Notes:<br/>
    ${document.getElementById("notes").value}<br/>
    `;

    return billDetails;
}

function downloadBill() {
    const downloadContent = generateDownloadContent();
    toggleVisibility("downloadContent");
    hideOtherContent("downloadContent");
    document.getElementById("downloadContent").innerHTML =
        "Loding..";
    console.log("download Content: ", downloadContent);
    document.getElementById("downloadContent").style.display = "block";
    generatePDFWithHtml2pdf();
}

function generateDownloadContent() {
    const downloadDetails = `
  Invoice Details:
  Date: ${formattedDate}
  Due Date: ${document.getElementById("datePicker").value}
  Invoice Number: ${invnum}

  Bill Contact Details:
  Bill To:
    Name: ${document.getElementById("billToName").value}
    Email: ${document.getElementById("billToEmail").value}
    Address: ${document.getElementById("billToAddress").value}

  Bill From:
    Name: ${document.getElementById("billFromName").value}
    Email: ${document.getElementById("billFromEmail").value}
    Address: ${document.getElementById("billFromAddress").value}

  Bill Details:
  Total Items: ${document.getElementById("totalItems").innerText}
  Total Amount: $${document.getElementById("totalAmount").innerText}

  Notes:
  ${document.getElementById("notes").value}
    `;

    return downloadDetails;
}

function generatePDFWithHtml2pdf() {
    const content = document.getElementById("card1");
    html2pdf(content).from(content);
}

function generateQRCode() {
    const qrCodeContent = generateQRCodeContent();
    toggleVisibility("qrCodeContent");
    hideOtherContent("qrCodeContent");
    document.getElementById("qrCodeContent").innerHTML = qrCodeContent;
    document.getElementById("qrCodeContent").style.display = "block";
    generateQRCodeWithQrcode();
}


function generateQRCodeWithQrcode() {
    // const content = document.getElementById('qrCodeContent').innerText;
    const content = `
    Due Date: ${document.getElementById("datePicker").value}
    Invoice Number: ${invnum}
    
    Bill To:
      Name: ${document.getElementById("billToName").value}
  
    Bill From:
      Name: ${document.getElementById("billFromName").value}
  
    
    Total Items: ${document.getElementById("totalItems").innerText}
    Total Amount: $${document.getElementById("totalAmount").innerText}
    `;
    console.log(content);

}

function toggleVisibility(contentId) {
    const contentDivs = ["billContent", "downloadContent"];

    for (const divId of contentDivs) {
        const div = document.getElementById(divId);
        if (divId === contentId) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    }
}

function hideOtherContent(currentContentId) {
    const contentDivs = ["billContent", "downloadContent"];

    for (const divId of contentDivs) {
        if (divId !== currentContentId) {
            document.getElementById(divId).style.display = "none";
        }
    }
}

// let CalculateBtn = document.querySelector("#calcBtn")

// function CalculationStuff() {

// }
// CalculateBtn.addEventListener("click", () => {
//     CalculationStuff()
// })