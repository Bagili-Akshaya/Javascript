let a = document.createElement("h1")
console.log(a);
a.textContent = "hello-world"

document.body.appendChild(a)
a.style.backgroundColor = "pink"

//create a div-tag
let div = document.createElement("div")
console.log(div);
//append div-tag to body-tag
document.body.appendChild(div)
div.style.border = "5px solid"

//create a ol-tag
let ol = document.createElement("ol")
console.log(ol);
//append ol-tag to div-tag
div.appendChild(ol)

//create li-tag
let li1 = document.createElement("li")
console.log(li1);
li1.textContent = "react"
//append li-tag to ol-tag
ol.appendChild(li1)

//create li-tag
let li2 = document.createElement("li")
console.log(li2);
li2.textContent = "node.js"
//append li-tag to ol-tag
ol.appendChild(li2)
ol.setAttribute("type" , "i")

//creating 4*4 table using createElement method
//Create table
let table = document.createElement("table")
console.log(table);
//append table tag to body tag
document.body.appendChild(table)

//create tr-tag
let tr1 = document.createElement("tr")
console.log(tr1);
//append tr tag to table tag
table.appendChild(tr1)

//create td-tag
let td1 = document.createElement("td")
console.log(td1);
td1.textContent = "hello"
//append td tag to tr tag
tr1.appendChild(td1)

//create td-tag
let td2 = document.createElement("td")
console.log(td2);
td2.textContent = "hello"
//append td tag to tr tag
tr1.appendChild(td2)

//create td-tag
let td3 = document.createElement("td")
console.log(td3);
td3.textContent = "hello"
//append td tag to tr tag
tr1.appendChild(td3)

//creating border for table tag
table.setAttribute("border" , "2px solid")

let table1 = document.createElement("table1")
console.log(table1);
document.body.appendChild(table1)
//create tr-tag
let tr2 = document.createElement("tr")
console.log(tr2);
//append tr tag to table tag
table.appendChild(tr2)










