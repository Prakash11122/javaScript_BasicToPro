let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())

// console.log(typeof myDate)

//let myCreatedDate = new Date(2024, 6, 2)
//let myCreatedDate = new Date(2024, 6, 2, 5,3)
let myCreatedDate = new Date("24-01-14")
//console.log(myCreatedDate)



let timestamp=Date.now()
console.log(timestamp)

// console.log(myTimeStamp);
 console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})