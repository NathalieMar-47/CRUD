
let selectedRow = null;

// Form submission handler
function onFormSubmit(event) {
    event.preventDefault();
    const formData = readFormData();
    if (selectedRow === null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }
    resetForm();
}

// Retrieve form data
function readFormData() {
    return {
        productCode: document.getElementById("productCode").value,
        product: document.getElementById("product").value,
        qty: document.getElementById("qty").value,
        perPrice: document.getElementById("perPrice").value
    };
}

// Insert new record
function insertNewRecord(data) {
    const table = document.getElementById("storelist").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();
    newRow.insertCell(0).innerHTML = data.productCode;
    newRow.insertCell(1).innerHTML = data.product;
    newRow.insertCell(2).innerHTML = data.qty;
    newRow.insertCell(3).innerHTML = data.perPrice;
    newRow.insertCell(4).innerHTML = `
        <button onclick="onEdit(this)">Edit</button>
        <button onclick="onDelete(this)">Delete</button>
    `;
}

// Edit record
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("productCode").value = selectedRow.cells[0].innerHTML;
    document.getElementById("product").value = selectedRow.cells[1].innerHTML;
    document.getElementById("qty").value = selectedRow.cells[2].innerHTML;
    document.getElementById("perPrice").value = selectedRow.cells[3].innerHTML;
}

// Update record
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.productCode;
    selectedRow.cells[1].innerHTML = formData.product;
    selectedRow.cells[2].innerHTML = formData.qty;
    selectedRow.cells[3].innerHTML = formData.perPrice;
    selectedRow = null;
}

// Delete record
function onDelete(td) {
    if (confirm("Are you sure you want to delete this record?")) {
        const row = td.parentElement.parentElement;
        document.getElementById("storelist").deleteRow(row.rowIndex);
    }
    resetForm();
}

// Reset form
function resetForm() {
    document.getElementById("productCode").value = "";
    document.getElementById("product").value = "";
    document.getElementById("qty").value = "";
    document.getElementById("perPrice").value = "";
    selectedRow = null;
}
