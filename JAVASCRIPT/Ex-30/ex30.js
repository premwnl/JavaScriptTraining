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
const click = document.getElementById('click')
const container = document.getElementById('dropDown_container')

//Constant declaration
let supplierSales = [
    {
        "ProductID": 1,
        "ProductName": "Chai",
        "UnitsInStock": 39,
        "UnitsOnOrder": 10,
        "UnitPrice": 8,
        "SupplierID": 1,
        "Discontinued": false,
        "Supplier": {
            "__deferred": {
                "uri": "/destinations/northwind/V2/Northwind/Northwind.svc/Products(1)/Supplier"
            }
        }
    },
    {
        "ProductID": 2,
        "ProductName": "Chang",
        "UnitsInStock": 0,
        "UnitsOnOrder": 7,
        "UnitPrice": 6,
        "SupplierID": 1,
        "Discontinued": true,
        "Supplier": {
            "__deferred": {
                "uri": "/destinations/northwind/V2/Northwind/Northwind.svc/Products(2)/Supplier"
            }
        }
    },
    {
        "ProductID": 3,
        "ProductName": "Aniseed Syrup",
        "UnitsInStock": 100,
        "UnitsOnOrder": 6,
        "UnitPrice": 3,
        "SupplierID": 3,
        "Discontinued": false,
        "Supplier": {
            "__deferred": {
                "uri": "/destinations/northwind/V2/Northwind/Northwind.svc/Products(3)/Supplier"
            }
        }
    },
    {
        "ProductID": 4,
        "ProductName": "Schwarzwälder Kirschtorte",
        "UnitsInStock": 2,
        "UnitsOnOrder": 3,
        "UnitPrice": 19,
        "SupplierID": 3,
        "Discontinued": false,
        "Supplier": {
            "__deferred": {
                "uri": "/destinations/northwind/V2/Northwind/Northwind.svc/Products(4)/Supplier"
            }
        }
    },
    {
        "ProductID": 5,
        "ProductName": "Chef Anton's Cajun Seasoning",
        "UnitsInStock": 0,
        "UnitsOnOrder": 9,
        "UnitPrice": 108,
        "SupplierID": 3,
        "Discontinued": false,
        "Supplier": {
            "__deferred": {
                "uri": "/destinations/northwind/V2/Northwind/Northwind.svc/Products(5)/Supplier"
            }
        }
    },
    {
        "ProductID": 6,
        "ProductName": "Chef Anton's Gumbo Mix",
        "UnitsInStock": 21,
        "UnitsOnOrder": 0,
        "UnitPrice": 18,
        "SupplierID": 4,
        "Discontinued": false,
        "Supplier": {
            "__deferred": {
                "uri": "/destinations/northwind/V2/Northwind/Northwind.svc/Products(6)/Supplier"
            }
        }
    },
    {
        "ProductID": 7,
        "ProductName": "Grandma's Boysenberry Spread",
        "UnitsInStock": 25,
        "UnitsOnOrder": 25,
        "UnitPrice": 18,
        "SupplierID": 5,
        "Discontinued": false,
        "Supplier": {
            "__deferred": {
                "uri": "/destinations/northwind/V2/Northwind/Northwind.svc/Products(7)/Supplier"
            }
        }
    },
    {
        "ProductID": 8,
        "ProductName": "Uncle Bob's Organic Dried Pears",
        "UnitsInStock": 29,
        "UnitsOnOrder": 7,
        "UnitPrice": 0,
        "SupplierID": 6,
        "Discontinued": false,
        "Supplier": {
            "__deferred": {
                "uri": "/destinations/northwind/V2/Northwind/Northwind.svc/Products(8)/Supplier"
            }
        }
    },
    {
        "ProductID": 9,
        "ProductName": "Northwoods Cranberry Sauce",
        "UnitsInStock": 4,
        "UnitsOnOrder": 32,
        "UnitPrice": 35,
        "SupplierID": 6,
        "Discontinued": false,
        "Supplier": {
            "__deferred": {
                "uri": "/destinations/northwind/V2/Northwind/Northwind.svc/Products(9)/Supplier"
            }
        }
    },
    {
        "ProductID": 10,
        "ProductName": "Mishi Kobe Niku",
        "UnitsInStock": 40,
        "UnitsOnOrder": 0,
        "UnitPrice": 130,
        "SupplierID": 5,
        "Discontinued": false,
        "Supplier": {
            "__deferred": {
                "uri": "/destinations/northwind/V2/Northwind/Northwind.svc/Products(10)/Supplier"
            }
        }
    },
    {
        "ProductID": 11,
        "ProductName": "Ikura",
        "UnitsInStock": 4,
        "UnitsOnOrder": 10,
        "UnitPrice": 13,
        "SupplierID": 4,
        "Discontinued": false,
        "Supplier": {
            "__deferred": {
                "uri": "/destinations/northwind/V2/Northwind/Northwind.svc/Products(11)/Supplier"
            }
        }
    },
    {
        "ProductID": 13,
        "ProductName": "Carnarvon Tigers",
        "UnitsInStock": 36,
        "UnitsOnOrder": 40,
        "UnitPrice": 56,
        "SupplierID": 3,
        "Discontinued": false,
        "Supplier": {
            "__deferred": {
                "uri": "/destinations/northwind/V2/Northwind/Northwind.svc/Products(13)/Supplier"
            }
        }
    },
    {
        "ProductID": 14,
        "ProductName": "Teatime Chocolate Biscuits",
        "UnitsInStock": 10,
        "UnitsOnOrder": 40,
        "UnitPrice": 7,
        "SupplierID": 2,
        "Discontinued": false,
        "Supplier": {
            "__deferred": {
                "uri": "/destinations/northwind/V2/Northwind/Northwind.svc/Products(14)/Supplier"
            }
        }
    },
    {
        "ProductID": 15,
        "ProductName": "Alice Mutton",
        "UnitsInStock": 90,
        "UnitsOnOrder": 20,
        "UnitPrice": 75,
        "SupplierID": 2,
        "Discontinued": true,
        "Supplier": {
            "__deferred": {
                "uri": "/destinations/northwind/V2/Northwind/Northwind.svc/Products(15)/Supplier"
            }
        }
    }
];
let supplierJson = [
    {
        "SupplierID": 1,
        "CompanyName": "New Orleans Cajun Delights",
        "ContactName": "Shelley Burke",
        "ContactTitle": "Order Administrator",
        "Address": "P.O. Box 78934",
        "City": "New Orleans",
        "Region": "LA",
        "PostalCode": "70117",
        "Country": "USA"
    },
    {
        "SupplierID": 2,
        "CompanyName": "Exotic Liquids",
        "ContactName": "Charlotte Cooper",
        "ContactTitle": "Purchasing Manager",
        "Address": "49 Gilbert St.",
        "City": "London",
        "Region": "UK",
        "PostalCode": "EC1 4SD",
        "Country": "UK"
    },
    {
        "SupplierID": 3,
        "CompanyName": "Grandma Kelly's Homestead",
        "ContactName": "Regina Murphy",
        "ContactTitle": "Sales Representative",
        "Address": "707 Oxford Rd.",
        "City": "Ann Arbor",
        "Region": "MI",
        "PostalCode": "48104",
        "Country": "USA"
    },
    {
        "SupplierID": 4,
        "CompanyName": "Forêts d'érables",
        "ContactName": "Chantal Goulet",
        "ContactTitle": "Accounting Manager",
        "Address": "148 rue Chasseur",
        "City": "Ste-Hyacinthe",
        "Region": "Québec",
        "PostalCode": "J2S 7S8",
        "Country": "Canada"
    },
    {
        "SupplierID": 5,
        "CompanyName": "Plutzer Lebensmittelgroßmärkte AG",
        "ContactName": "Martin Bein",
        "ContactTitle": "International Marketing Mgr.",
        "Address": "Bogenallee 51",
        "City": "Frankfurt",
        "Region": "DE",
        "PostalCode": "60439",
        "Country": "Germany"
    },
    {
        "SupplierID": 6,
        "CompanyName": "Lyngbysild",
        "ContactName": "Niels Petersen",
        "ContactTitle": "Sales Manager",
        "Address": "Lyngbysild Fiskebakken 10",
        "City": "Lyngby",
        "Region": "NL",
        "PostalCode": "2800",
        "Country": "Denmark"
    },
    {
        "SupplierID": 7,
        "CompanyName": "Formaggi Fortini s.r.l.",
        "ContactName": "Elio Rossi",
        "ContactTitle": "Sales Representative",
        "Address": "Viale Dante, 75",
        "City": "Ravenna",
        "Region": "IL",
        "PostalCode": "48100",
        "Country": "Italy"
    }
];

//Error declaration

//Main functions
