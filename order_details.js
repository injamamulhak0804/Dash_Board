let userName = document.getElementById("user_name")
let productName = document.getElementById("productname")
let productQuantity = document.getElementById("productquantity")
let productPrice = document.getElementById("productprice")
let btnSubmit = document.getElementById("submit")
let btnPrint = document.getElementById("print")
let tableBody = document.getElementById("tableBody")    

btnSubmit.addEventListener("click", (e)=>{
    e.preventDefault()
    
    let userName_Value = userName.value
    let productName_Value = productName.value
    let productQuantity_Value = productQuantity.value
    let productPrice_Value = productPrice.value


    let tableRow = tableBody.insertRow()
    let username_td = tableRow.insertCell()
    let productname_td = tableRow.insertCell()
    let productquantity_td = tableRow.insertCell()
    let productprice_td = tableRow.insertCell()
    let productBtn_td = tableRow.insertCell()
    
    username_td.innerHTML = userName_Value
    productname_td.innerHTML = productName_Value
    productquantity_td.innerHTML = productQuantity_Value
    productprice_td.innerHTML = productPrice_Value
    productBtn_td.innerHTML = '<button id="submit" onclick={handleDelete(this)} class="btn mx-4 my-8 btn-primary" type="button">Remove</button>'
    

    username_td.className = "border  p-2 border-1 border-dark"
    productname_td.className = "border  p-2 border-1 border-dark"
    productquantity_td.className = "border  p-2 border-1 border-dark"
    productprice_td.className = "border  p-2 border-1 border-dark"
    productBtn_td.className = "border  p-2 border-1 border-dark"
})

const handleDelete = (params) =>{
    let tr_remove = params.parentNode.parentNode 
    tr_remove.parentNode.removeChild(tr_remove);
}


btnPrint.addEventListener("click", ()=>{
    let product_table = document.getElementById("table").cloneNode(true)
    let entire_table = product_table.outerHTML
    let newtab = window.open('','_blank');
    newtab.document.write('<head><style>');
    newtab.document.write('body { font-family: Arial, sans-serif; }');
    newtab.document.write('table { border-collapse: collapse; width: 100%; margin-bottom: 20px; }');
    newtab.document.write('th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }');
    newtab.document.write('th { background-color: #f2f2f2; }');
    newtab.document.write('#totalAmount { font-weight: bold; }');
    newtab.document.write('#invoiceTitle { text-align: center; font-size: 24px; margin-bottom: 20px; }');
    newtab.document.write('</style>');
    newtab.document.write('</head><body>');
    newtab.document.write('<h2 id="invoiceTitle">generate Bill</h2>');
    newtab.document.write(entire_table);
    newtab.window.print();
    newtab.window.close()
})
