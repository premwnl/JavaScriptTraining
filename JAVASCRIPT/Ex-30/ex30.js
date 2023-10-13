/*            *
                                            Name of the challenge      : Data Aggregation                   *
                                            Challenge No               : 30                                                          *
                                            Developed for              : VHITECH Training Program         *
                                                Maintenance History                                                    *
                                            Developer                  : Premkumar T                                                      *
                                            Creation date              : 12/10/2023     Ticket No:               *
**/



//Screen Declaration
setInterval(() => {
    document.getElementById('currentDate').innerText = new Date().toLocaleDateString()
    document.getElementById('currentTime').innerText = new Date().toLocaleTimeString('en-in')
}, 1000)

//DOM declaration
const container = document.getElementById('tableBodyContainer')

//Constant declaration

//Error declaration

//Main function
let fetchData = (async () => {
    try {
        let supplierResponse = await fetch('supplierJson.js')
        let salesResponse = await fetch('supplierSales.js')
        setData(await supplierResponse.json(), await salesResponse.json())
    } catch (error) {
        console.log(error);
    }
})()
function setData(supplier, sales) {
    let filter = supplier.map((value) => sales.filter((item) => value.SupplierID == item.SupplierID))
    let mainArray = [
        supplier.map((value) => value.SupplierID),
        supplier.map((value) => value.CompanyName),
        supplier.map((value) => value.ContactName),
        supplier.map((value) => `${value.Address}, ${value.City}, ${value.Country}`),
        filter.map((item) => item.reduce((store, value) => (store ? store + ", " : store) + value.ProductName, '')),
        filter.map((item) => item.reduce((store, value) => store + value.UnitsInStock, 0)),
        filter.map((item) => item.reduce((store, value) => store + value.UnitsOnOrder, 0)),
        filter.map((item) => item.reduce((store, value) => store + value.UnitPrice, 0))];

    for (const loop in supplier) {//looping to asssign table values
        const rowElement = document.createElement('tr')
        for (const index of mainArray) {
            const dataElement = document.createElement('td')
            dataElement.textContent = index[loop]
            rowElement.append(dataElement)
        }
        container.append(rowElement)
    }
}


// let supplierJson = await supplierResponse.json()
// let supplierSales = await salesResponse.json()
// setData(supplierJson, supplierSales)