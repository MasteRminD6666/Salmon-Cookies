// 'use strict';

// // global Variable
 let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];





  
// let Seattle={
//     name: 'Seattle',
//     min: 23,
//     max: 65,
//     avg: 6.3,
//     randomCustomers:[],
//     cookiespPurchased:[],
//     Totals: 0,
// // Getting random number
//     getRandomCustomers: function (min, max) {
//         let rand = Math.floor(Math.random() * (max - min + 1) ) + min;
        
//         return rand
//       }
//     ,
//     // Calculate the Cookies
//     avgCookies: function () {
//         for (let i = 0; i < hours.length; i++) {
//           let cookiespPurchased = Math.ceil(this.getRandomCustomers(this.min,this.max) * this.avg);
//           //console.log('here are the cookies', cookiespPurchased)
//           this.cookiespPurchased.push(cookiespPurchased);
//           this.Totals += cookiespPurchased;
//          // console.log('loop', i)
//          //console.log("here is the total",this.Totals)
          
//         }
//     },
//     // rendering the content
//     render: function(){
//         let store = document.getElementById('store');
//         let ulElemnt = document.createElement('ul');
//         ulElemnt.textContent = this.name
//         store.append(ulElemnt)
        
//         for (let i = 0; i < hours.length; i++) {
//             let liElemnt = document.createElement('li');
//             ulElemnt.append(liElemnt);
//             liElemnt.textContent=hours[i] + `: ${this.cookiespPurchased[i]}  Cookies` ;
        
           
            
//         }
//         let liElemnt = document.createElement('li');
//         ulElemnt.append(liElemnt);
//         liElemnt.textContent=`Total : ${this.Totals}`
//     }

// }

// Seattle.avgCookies();
// Seattle.render();

// // For Tokyo store 
// let Tokyo={
//     name: 'Tokyo',
//     min: 3,
//     max: 24,
//     avg: 1.2,
//     randomCustomers:[],
//     cookiespPurchased:[],
//     Totals: 0,
// // Getting random number
//     getRandomCustomers: function (min, max) {
//         let rand = Math.floor(Math.random() * (max - min + 1) ) + min;
        
//         return rand
//       }
//     ,
//     // Calculate the Cookies
//     avgCookies: function () {
//         for (let i = 0; i < hours.length; i++) {
//           let cookiespPurchased = Math.ceil(this.getRandomCustomers(this.min,this.max) * this.avg);
//           console.log(cookiespPurchased)
//           this.cookiespPurchased.push(cookiespPurchased);
//           this.Totals += cookiespPurchased;
          
//         }
//     },
//     // rendering the content
//     render: function(){
//         this.avgCookies()
//         let store = document.getElementById('store');
//         let ulElemnt = document.createElement('ul');
//         ulElemnt.textContent = this.name
//         store.append(ulElemnt)
        
//         for (let i = 0; i < hours.length; i++) {
//             let liElemnt = document.createElement('li');
//             ulElemnt.append(liElemnt);
//             liElemnt.textContent=hours[i] + `: ${this.cookiespPurchased[i]}  Cookies` ;
        
           
            
//         }
//         let liElemnt = document.createElement('li');
//         ulElemnt.append(liElemnt);
//         liElemnt.textContent=`Total : ${this.Totals} Cookies`
//     }

// }

// Tokyo.avgCookies();
// Tokyo.render();



// //Dubai
// let Dubai={
//     name: 'Dubai',
//     min: 11,
//     max: 38,
//     avg: 3.7,
//     randomCustomers:[],
//     cookiespPurchased:[],
//     Totals: 0,
// // Getting random number
//     getRandomCustomers: function (min, max) {
//         let rand = Math.floor(Math.random() * (max - min + 1) ) + min;
        
//         return rand
//       }
//     ,
//     // Calculate the Cookies
//     avgCookies: function () {
//         for (let i = 0; i < hours.length; i++) {
//           let cookiespPurchased = Math.ceil(this.getRandomCustomers(this.min,this.max) * this.avg);
//           console.log(cookiespPurchased)
//           this.cookiespPurchased.push(cookiespPurchased);
//           this.Totals += cookiespPurchased;
          
//         }
//     },
//     // rendering the content
//     render: function(){
//         this.avgCookies()
//         let store = document.getElementById('store');
//         let ulElemnt = document.createElement('ul');
//         ulElemnt.textContent = this.name
//         store.append(ulElemnt)
        
//         for (let i = 0; i < hours.length; i++) {
//             let liElemnt = document.createElement('li');
//             ulElemnt.append(liElemnt);
//             liElemnt.textContent=hours[i] + `: ${this.cookiespPurchased[i]}  Cookies` ;
        
           
            
//         }
//         let liElemnt = document.createElement('li');
//         ulElemnt.append(liElemnt);
//         liElemnt.textContent=`Total : ${this.Totals} Cookies `
//     }

// }

// Dubai.avgCookies();
// Dubai.render();



// // For Paris Store
// let Paris={
//     name: 'Paris',
//     min: 20,
//     max: 38,
//     avg: 2.3,
//     randomCustomers:[],
//     cookiespPurchased:[],
//     Totals: 0,
// // Getting random number
//     getRandomCustomers: function (min, max) {
//         let rand = Math.floor(Math.random() * (max - min + 1) ) + min;
        
//         return rand
//       }
//     ,
//     // Calculate the Cookies
//     avgCookies: function () {
//         for (let i = 0; i < hours.length; i++) {
//           let cookiespPurchased = Math.ceil(this.getRandomCustomers(this.min,this.max) * this.avg);
//           console.log(cookiespPurchased)
//           this.cookiespPurchased.push(cookiespPurchased);
//           this.Totals += cookiespPurchased;
          
//         }
//     },
//     // rendering the content
//     render: function(){
//         this.avgCookies()
//         let store = document.getElementById('store');
//         let ulElemnt = document.createElement('ul');
//         ulElemnt.textContent = this.name
//         store.append(ulElemnt)
        
//         for (let i = 0; i < hours.length; i++) {
//             let liElemnt = document.createElement('li');
//             ulElemnt.append(liElemnt);
//             liElemnt.textContent=hours[i] + `: ${this.cookiespPurchased[i]}  Cookies` ;
        
           
            
//         }
//         let liElemnt = document.createElement('li');
//         ulElemnt.append(liElemnt);
//         liElemnt.textContent=`Total : ${this.Totals} Cookies`
//     }

// }

// Paris.avgCookies();
// Paris.render();

// // For Lima store 
// let Lima={
//     name: 'Lima',
//     min: 2,
//     max: 16,
//     avg: 4.6,
//     randomCustomers:[],
//     cookiespPurchased:[],
//     Totals: 0,
// // Getting random number
//     getRandomCustomers: function (min, max) {
//         let rand = Math.floor(Math.random() * (max - min + 1) ) + min;
        
//         return rand
//       }
//     ,
//     // Calculate the Cookies
//     avgCookies: function () {
//         for (let i = 0; i < hours.length; i++) {
//           let cookiespPurchased = Math.ceil(this.getRandomCustomers(this.min,this.max) * this.avg);
//           console.log(cookiespPurchased)
//           this.cookiespPurchased.push(cookiespPurchased);
//           this.Totals += cookiespPurchased;
          
//         }
//     },
//     // rendering the content
//     render: function(){
//         this.avgCookies()
//         let store = document.getElementById('store');
//         let ulElemnt = document.createElement('ul');
//         ulElemnt.textContent = this.name
//         store.append(ulElemnt)
        
//         for (let i = 0; i < hours.length; i++) {
//             let liElemnt = document.createElement('li');
//             ulElemnt.append(liElemnt);
//             liElemnt.textContent=hours[i] + `: ${this.cookiespPurchased[i]}  Cookies` ;
        
           
            
//         }
//         let liElemnt = document.createElement('li');
//         ulElemnt.append(liElemnt);
//         liElemnt.textContent=`Total : ${this.Totals} Cookies`
//     }

// }

// Lima.avgCookies();
// Lima.render();


function Stores(name,min,max,avg) {
    this.name = name;
    this.min = min;
    this.max= max;
    this.avg=avg;
    this.total=0;
    this.randomCustomers=[];
    this.cookiespPurchased=[];

    stores.push(this);
    
}

Stores.prototype.getRandomCustomers= function (min,max) {
    let rand = Math.floor(Math.random() * (max - min + 1) ) + min;
        
        return rand
}

Stores.prototype.avgCookies = function () {
            for (let i = 0; i < hours.length; i++) {
              let cookiespPurchased = Math.ceil(this.getRandomCustomers(this.min,this.max) * this.avg);
              
              this.cookiespPurchased.push(cookiespPurchased);
             // console.log('this is the cookies values', cookiespPurchased)
              this.total += cookiespPurchased;
            //  console.log('this is the total ', this.total)
              
            }
            
}

Stores.prototype.render= function(){
    this.avgCookies();
 
    let table = document.getElementById('stores');
    
    let tableRow = document.createElement('tr');
    
    let tableHeading = document.createElement('th')
    tableRow.append(tableHeading);

    tableHeading.textContent = this.name;

    for (let i = 0; i < this.cookiespPurchased.length; i++) {
        let tableData= document.createElement('td');
         tableData.textContent= this.cookiespPurchased[i]
         
        tableRow.append(tableData)
        
    }
    tableData= document.createElement('td');
    tableData.textContent = this.total;
    tableRow.append(tableData);
    table.append(tableRow)
  //  console.log('this is the total ',this.total)
}


Stores.prototype.tableHeader = function () {
    let table = document.getElementById('stores');
    let tableRow = document.createElement('tr');
    let tableHead = document.createElement('th');
    tableHead.textContent = 'Location';
    tableRow.append(tableHead);
    for (let i = 0; i < hours.length; i++) {
        let tableData  = document.createElement('td');
        tableData.textContent = hours[i];
        tableRow.append(tableData);
    }
    table.append(tableRow);
    tableData = document.createElement('td');
    tableData.textContent = 'Daily Location Total:';
    tableRow.append(tableData);
    }


 let stores=[];

let seattle = new Stores('seattle',23,56,6.3);
let tokyo = new Stores('tokyo',3,24,1.2);
let dubai = new Stores('dubai',11,38,3.7);
let paris = new Stores('paris',20,38,2.3);
let lima = new Stores('lima',2,16,4.6);


seattle.tableHeader()

for (let i = 0; i < stores.length; i++) {
    stores[i].render();
}

// for creating Table data
function createTd(text) {
    const td = document.createElement('td');
    td.append(document.createTextNode(text));

    return td;
}

Stores.getTotalOfAllStores = function() {
    
    const row = document.createElement('tr');

    row.append(createTd('Total'));

    let allTotal = 0;
    for (let i = 0; i < hours.length; i ++) {
        let total = 0;
        for (let j = 0; j < stores.length; j++) {
            const store = stores[j];
          //  console.log(stores[j])
            total += store.cookiespPurchased[i];
        }
        allTotal += total;
        row.append(createTd(total));
    }0
    row.append(createTd(allTotal));

    const table = document.getElementById('stores');
    table.append(row);
}

Stores.getTotalOfAllStores();