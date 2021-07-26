"use strict";

// global Variable
let hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

function Stores(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.total = 0;
  this.randomCustomers = [];
  this.cookiespPurchased = [];

  stores.push(this);
}

Stores.prototype.getRandomCustomers = function (min, max) {
  let rand = Math.floor(Math.random() * (max - min + 1)) + min;

  return rand;
};

Stores.prototype.avgCookies = function () {
  for (let i = 0; i < hours.length; i++) {
    let cookiespPurchased = Math.ceil(
      this.getRandomCustomers(this.min, this.max) * this.avg
    );

    this.cookiespPurchased.push(cookiespPurchased);
    // console.log('this is the cookies values', cookiespPurchased)
    this.total += cookiespPurchased;
    //  console.log('this is the total ', this.total)
  }
};
let table = document.getElementById("stores");

// for the table Header
Stores.prototype.tableHeader = function () {
  let table = document.getElementById("stores");
  let tableRow = document.createElement("tr");
  let tableHead = document.createElement("th");

  tableHead.textContent = "Location";
  tableRow.append(tableHead);
  for (let i = 0; i < hours.length; i++) {
    let tableData = document.createElement("td");
    tableData.textContent = hours[i];
    tableRow.append(tableData);
  }
  let tableData = document.createElement("td");
  table.append(tableRow);
  tableData = document.createElement("td");
  tableData.textContent = "Daily Location Total:";
  tableRow.append(tableData);
};

let tableRow = document.createElement("tr");
let tableData = document.createElement("td");
Stores.prototype.render = function () {
  this.avgCookies();

  let table = document.getElementById("stores");

  let tableRow = document.createElement("tr");

  let tableHeading = document.createElement("th");
  tableRow.append(tableHeading);

  tableHeading.textContent = this.name;

  for (let i = 0; i < this.cookiespPurchased.length; i++) {
    let tableData = document.createElement("td");
    tableData.textContent = this.cookiespPurchased[i];

    tableRow.append(tableData);
  }
  let tableData = document.createElement("td");
  tableData = document.createElement("td");
  tableData.textContent = this.total;
  tableRow.append(tableData);
  table.append(tableRow);
  //  console.log('this is the total ',this.total)
};

let stores = [];

let seattle = new Stores("seattle", 23, 56, 6.3);
let tokyo = new Stores("tokyo", 3, 24, 1.2);
let dubai = new Stores("dubai", 11, 38, 3.7);
let paris = new Stores("paris", 20, 38, 2.3);
let lima = new Stores("lima", 2, 16, 4.6);

// getting tags from the form

let form = document.getElementById("form");

// seattle.tableHeader()

//  for (let i = 0; i < stores.length; i++) {
//             stores[i].render();}

// for creating Table data
function createTd(text) {
  const td = document.createElement("td");
  td.append(document.createTextNode(text));

  return td;
}
const row = document.createElement("tr");
Stores.getTotalOfAllStores = function () {
  const row = document.createElement("tr");

  row.append(createTd("Total"));

  let allTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    let total = 0;
    for (let j = 0; j < stores.length; j++) {
      const store = stores[j];
      //  console.log(stores[j])
      total += store.cookiespPurchased[i];
    }
    allTotal += total;
    row.append(createTd(total));
  }
  row.append(createTd(allTotal));

  const table = document.getElementById("stores");
  table.append(row);
};

//Callback function i read about it
form.addEventListener("submit", function submit(event) {
  event.preventDefault();
  let name = event.target.storeName.value;
  let min = event.target.min.value;
  let max = event.target.max.value;
  let avg = event.target.avg.value;
  seattle.tableHeader();
  let user = new Stores(name, min, max, avg);

  tableRow.textContent = "";
  table.textContent = "";
  tableData.textContent = "";
  seattle.tableHeader();
  for (let i = 0; i < stores.length; i++) {
    stores[i].render();
  }
  Stores.getTotalOfAllStores();

  //    Stores.getTotalOfAllStores();
});
// TODO check the rending function 