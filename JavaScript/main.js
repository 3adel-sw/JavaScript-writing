// //Web APIS
// window.alert("Holla Form JS File");
// console.log("Hello Form JS Fill");
// document.write("<h1>Hello <span> page </span></h1>");
// console.log("log");
// console.error("Error");
// console.table(["Adel", "Dola", "Dody"]);
// console.log("Hello Form %cJS %cFile", "color: red; font-size : 30px","color: blue; font-size : 30px",);
/**
 * ES6
 */
// console
// nar myName = "Adel";
// console.log("Hello" + myName);
// var user = "Adel";
// console.log(user);
// console.log(user);
// console.log(user);
// console.log(user);
// console.log("hello");
// hello.innerHTML = "Option"
// let a = 1;
// console.log(a);
// console.log('Adel Web "Dola"');
// console.log("Adel Web 'Dola'");
// console.log("Adel Web \"Dola\"");
// console.log("ElAdel\
//  Web \
//  Dola ")
//  console.log("Adel\nWeb\nDola")
// let a = "We Love ";
// let b = " JavaScript";
// document.write(a + b);
/* 
Template Literals (Template Strings)
*/
// let a = "We Love";
// let b = "JavaScript";
// let c = "And";
// let d = "Programming";
// console.log(a + " " + b + "\n" + c + " " + " " + d);
// console.log(`${a} ${b} ${c} ${d}`)
// let title = "El Dola";
// let desc = "El Dola We Love "
// let markUp = `
// <div class="card" >
// <div class="child">
//   <h2>${title}<\h2>
//   <p>${desc}<\p>
//   <\div>
//   <\div>
// `;
// document.write(markUp);
/*{ <div class="card">
  <h3>Hello El Dola</h3>
  <p>El Dola Web Adel</p>
  <span>25/10</span>
</div> }*/
// let  a = "10";
// let  b = 20;
// let  c = true;
// console.log(+ a + b + c);
// Assignment Operators
// let a = 10;
// a = a + 20;
// a = a + 70;
// a += 100; //a = a + 100
// // a -= 50; //a = a + 100
// // a /= 50;
// console.log(a);
//////////////////////////////////////////////////////////////////
//challenge
// let a = 10;
// let b = "20";
// let c = 80;

// console.log(++a + +bb++ + +c++ - +a++);
// console.log(++a + -b + +c++ - -a++ + +a);
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true)
// //challenge 2
// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;
// console.log( -- d * e - -e ); //2000
// console.log(+ d + e + f + +g ); //173
// console.log(1000000);
// console.log(100_000_0);
// console.log(1e12);
// console.log((100).toString());
// console.log(100.10.toString());
// console.log(100.554555.toFixed(2));
// console.log(Number("100 Adel"));
// console.log(+"100 Adel")
// console.log(parseInt("100 Adel"))
// console.log(parseInt("Adel 100 Adel"));
// console.log(parseInt("100.500 Adel"));
// console.log(parseFloat("100.500 Adel"))
// console.log(Number.isInteger("100"));
// console.log(Number.isInteger(100.500));
// console.log(Number.isInteger(100));
// console.log(Number.isNaN("Adel" / 20));
// Math
// console.log(Math.round(99.2));
// console.log(Math.round(99.5));
// console.log(Math.ceil(99.5));
// console.log(Math.floor(99.9));
// console.log(Math.min(10, 20, 100, -100, 90));
// console.log(Math.max(10, 20, 100, -100, 90));
// console.log(Math.pow(2, 4));
// console.log(Math.random());
// console.log(Math.trunc(99.5));
// let a = 1_00;
// let b = 2_00;
// let c = 1e2;
// let d = 2.4;
// // Find Smallest Number In All Variables And Return Integer.
// console.log(Math.trunc( a + b + c + d));
// // Ues Samllest a + d One Time To Get The Needed Output .
// console.log(Math.ceil(a**2 + d )); //1000
// //Get Integer "2" From d Variable With 4 Methods.
// //  console.log(integerNumber (d));
// console.log(Math.trunc(d));
// console.log(Math.floor(d));
// console.log(Math.round(d));
//  console.log(Math.ceil(d));
// // // Ues Variable b + d To Get This Values.
// // console.log(parent(b) / Math.ceil(d) + Math.ceil(2)); //66.67 String
// console.log(Math.round(parseInt(b) / Math.ceil(d))); //67 => Number
// let theName = "  Adel  ";
// console.log(theName);
// console.log(theName[1]);
// console.log(theName[4]);
// console.log(theName.charAt(1));
// console.log(theName.charAt(4));
// console.log(theName.length);
// console.log(theName.trim());
// console.log(theName.toUpperCase());
// console.log(theName.toLowerCase());
// console.log(theName.trim().charAt(0).toLocaleUpperCase())
// let a = "ELAdel El Dola";
// console.log(a.indexOf("El"));
// console.log(a.indexOf("El", 8));
// console.log(a.lastIndexOf("l"));//5
// console.log(a.lastIndexOf("l"));//5
// console.log(a.slice(2,6));
// console.log(a.slice(-5,-3));
// console.log(a.repeat(5));
// console.log(a.split("", 4));
// let a = "ElAdel El Dola";
// console.log(a.length);
// console.log(a.substring(2, 6));
// console.log(a.substring(6, 2));
// console.log(a.substring(-10));
// console.log(a.substring(-10, 6)); // 0 - 6
// console.log(a.substring(a.length - 5, a.substring - 3));
// console.log(a.substr(0, 6));
// console.log(a.substr(14));
// console.log(a.substr(-5));
// console.log(a.substr(-5, 2));
// console.log(a.includes("El"));
// console.log(a.includes("El" , 5 ));
// console.log(a.startsWith("E"));
// console.log(a.startsWith("Dola",4));
// console.log(a.startsWith("z", 2 ));
// console.log(a.endsWith("l", 6));
// console.log(a.endsWith("a"));
// let a = "Elzero Web School";
// // Includes This Methods In Your Solution [slice, charAt]
// console.log(); //zero
// // 8 H
// console.log(); //HHHHHHHH
// // Return Array
// console.log(); //[Elzero]
// // Use Only "substr" Method + Template Literals In Your Solution
// console.log(); // Elzero Web School
// console.log(10 == "10"); // compare value only
// console.log(-100 == "-100"); // compare value only
// console.log(10 != "10"); // compare value only
// console.log(10 === "10"); // compare value + type
// console.log(10 !== "10"); // compare value + type
// console.log(10 === 10); // compare value + type
// console.log(10 > 20) ;
// console.log(10 > 10) ;
// console.log(10 >= 10) ;
// console.log(10 < 20) ;
// console.log(10 < 10) ;
// console.log(10 <= 10) ;
// console.log("Adel " === "Adel");
// console.log("Adel " === "Ahmed");
// console.log( typeof"Adel " === typeof "Ahmed");
//////////////////////////////////////////////////////////////////
// ! Not
// && And
// || Or
// console.log(true);
// console.log(!true);
// console.log((10 == "10"));
// console.log(!(10 == "10"));
// console.log(10 == "10" && 10 > 8 && 10 > 50);
// console.log(10 == "10" || 10 > 8 || 10 > 50);
// let price = 100;
// // let discount = true;
// let discount = false;
// let discountAmount = 30;
// // let country = "Egypt";
// // let country = "KSA";
// if (discount === true) {
//   price -= discountAmount; // price = price - discountAmount
// }
// else if (country === "Egypt" ) {
//   price -= 40;
// }
// else if ( country === "Rosia") {
//   price -=50;
// } else {
//   price -=10;
// }
// console.log(price);
// let price = 100;
// // let discount = true;
// let discount = false;
// let discountAmount = 30;
// let country = "Egypt";
// // let country = "KSA";
// let student = true;
// // let ;
// if (discount === true) {
//   price -= discountAmount;
// }else if (country === "Egypt" ) {
//   if (student === true) {
//     price -= discountAmount + 30;
// } else {
//     price -= discountAmount + 10;
//////////////////////////////////////////////////////////////////
// }
// } else {
//   price -=10;
// }
// console.log(price);
// let theName = "Mona";
// let theGender = "Female";
// let theAge = 30;
// if (theGender === "Male") {
//   console.log("Mr");
// } else {
//   console.log("Mrs");
// }
// condition ? If True : False
// theGender === "Male" ? console.log("Mr") : console.log("Mrs");
// let result = theGender === "Male" ? ("Mr") : ("Mrs");
// document.write(result);
// console.log(theGender === "Male" ? "Mr" : "Mrs");
// console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName} `);
// theAge < 20
// ? console.log(20)
// : theAge > 20 && theAge < 60
// ? console.log("20 To 60" )
// : theAge > 60
// ? console.log ("Larger Than 60")
// : console.log ("Unknown");
// console.log(Boolean(100));
// console.log(Boolean(-100));
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));
// let price = 0;
// console.log (`The Price Is ${price || 200}`);
// console.log (`The Price Is ${price ?? 200}`);
/*
//////////////////////////////////////////////////////////////////
  If Condition Challenge
*/
// let a = 10;
// if (a < 10) {
//   console.log(10);
// } else if (a >= 10 && a <= 40) {
//   console.log("10 To 40");
// } else if (a > 40) {
//   console.log("> 40");
// } else {
//   console.log("Unknown");
// }
//////////////////////////////////////////////////////////////////
// // Write Previous Condition With Ternary If Syntax
// let st = "Elzero Web School";
// // W Position May Change
// if ("????" === "w") {
//   console.log("Good");
// }
// if ("????" !== "string") {
//   console.log("Good");
// }
// if ("????" === "number") {
//   console.log("Good");
// }
// if ("????" === "ElzeroElzero") {
//   console.log("Good");
// }
// let day = 100;
// switch (day) {
//   case 0:
//     console.log("Saturday");
//     break;
//     case 1 :
//     console.log("Sunday");
//     break
//     case 2 :
//       console.log("Monday");
//       break;
//       default:
//         console.log("Unknown Day");
// }
//////////////////////////////////////////////////////////////////
// let myFriends = ["Adel", "Dola", "Adol" , ["Hassan", "Hamada"]];
// console.log(`Hello ${myFriends[0]}`);
// console.log(`Hello ${myFriends[2]}`);
// console.log(`${myFriends[1][2]}`);
// console.log(`Hello ${myFriends[3]}`);
// console.log(`Hello ${myFriends[3] [1]}`);
// console.log(`${myFriends[2][1][0]}`);
// console.log(myFriends);
// myFriends[1] = "Abrar";
// console.log(myFriends);
// myFriends[3] = ["hema","sonaa"]
// console.log(myFriends);
// console.log(Array.isArray(myFriends));
// Index Start From 0 [ 0 , 1 , 2, 3]
// let myFriends = ["Adel", "Mahmoud", "Dola", "Hassan", "Hema"];
// myFriends[myFriends.length - 1] = "Ibrahem";
// console.log(myFriends);
// console.log(myFriends.length); //5
// myFriends.length = 3;
// console.log(myFriends);
//
////////////////////////////////////////////////////////////////////
//       Array Methods
//

// let myFriends = ["Adel", "Mahmoud", "Dola", "Hassan"];

// console.log(myFriends);

// myFriends.unshift("Doody", "Ibrahem");

// console.log(myFriends);

// myFriends.push("Abrar", "Bero");

// console.log(myFriends);

// let first = myFriends.shift();

// console.log(myFriends);

// console.log(`first Name Is ${first}`);

// let last = myFriends.pop();

// console.log(myFriends);

// console.log(`Last Name Is ${last}`);
//////////////////////////////////////////////////////////////////

//  Array Methods

// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Ahmed"];

// console.log(myFriends);
// console.log(myFriends.indexOf("Ahmed"));
// console.log(myFriends.indexOf("Ahmed", 2));

// console.log(myFriends.lastIndexOf("Ahmed"));
// console.log(myFriends.lastIndexOf("Ahmed", -2));

// console.log(myFriends.includes("Ahmed"));
// console.log(myFriends.includes("Ahmed", 2));

// if (myFriends.lastIndexOf("Ahmed") === -1) {
//   console.log("Not Found");
// }

// if (myFriends.lastIndexOf("Dola") === -1) {
//   console.log("Not Found");
// }

// console.log(myFriends.indexOf("ElDola"));
// console.log(myFriends.lastIndexOf("ElDola"));

// let myFriends = [10, "Sayed", "Mohamed", "90", 1000, 100, 20, "10", -20, -10];

// console.log(myFriends);
// console.log(myFriends.sort().reverse());
// Not encode End

// let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", " Ameer"];
// console.log(myFriends);
// console.log(myFriends.slice());
// console.log(myFriends.slice(1));
// console.log(myFriends.slice(1, 3));
// console.log(myFriends.slice(-3));
// console.log(myFriends.slice(1, -2));
// console.log(myFriends.slice(-4, -2));
// console.log(myFriends);

// myFriends.splice(1, 2, "Adel", "Samer");

// console.log(myFriends);

// ConCat Array. ;;

// let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
// let myNewFriends = ["Samar", "Sameh"];
// let schoolFriends = ["Haytham", "Shady"];

// let allFriends = myFriends.concat(
//   myNewFriends,
//   schoolFriends,
//   "Gameel",
//   [1, 2]
// );

// console.log(allFriends);
// // Join(Seperator)
// console.log(allFriends.join());
// console.log(allFriends.join(""));
// console.log(allFriends.join("@"));
// console.log(allFriends.join("|"));
// console.log(allFriends.join("|").toUpperCase());
// console.log(allFriends.join("|").toLowerCase());

//////////////////////////////////////////////////////////////////

// Challenge

/*
  Array Challenge
*/

// let zero = 0;

// let counter = 3;

// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// // Write Code Here

// console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

// console.log(my.slice("????")); // ["Elham", "Mazero"]

// console.log(); // "Elzero"

// console.log(); // "rO"s

//////////////////////////////////////////////////////////////////
// مدخل العالم 4
/*  LOOP
    FOR 
    -FOR ([1] [2] [3])
  {
    // Block Of Code 
  }
 */

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
/**
 * loop
 * -loop on sequences
 */

// let myFriends = [
//   1,
//   2,
//   "Adel",
//   4,
//   5,
//   6,
//   "Ahmed",
//   "Elham",
//   "Osama",
//   "Gamal",
//   "Ameer",
// ];

// let onlyNames = [];

// for (let i = 0; i < myFriends.length; i++) {
//   if (typeof myFriends[i] === "string") {
//     onlyNames.push(myFriends[i]);
//   }
// }

// console.log(onlyNames);

// if (typeof myFriends[0] === "string") {
//   onlyNames.push(myFriends[0]);
// }
// if (typeof myFriends[1] === "string") {
//   onlyNames.push(myFriends[1]);
// }
// if (typeof myFriends[2] === "string") {
//   onlyNames.push(myFriends[2]);
// }
// if (typeof myFriends[3] === "string") {
//   onlyNames.push(myFriends[3]);
// }

// console.log(myFriends[0]);
// console.log(myFriends[1]);
// console.log(myFriends[2]);
// console.log(myFriends[3]);
// console.log(myFriends[4]);

// for (let i = 0; i < myFriends.length; i++) {
//   console.log(myFriends[i]);
// }
////////////////////////////////////////////////////////////////////////////////////
/**
 * LOOP
 * - Nested Loop
 */

// let products = ["Keyboard", "Mouse", "Pen", "pad", "Monitor"];

// let colors = ["-Red", "-Green", "-Blue"];

// let models = ["-2020", "-2021"];

// for (let i = 0; i < products.length; i++) {
//   console.log("#".repeat(15));
//   console.log(`# ${products[i]}`);
//   console.log("*".repeat(15));
//   console.log(" Colors :");
//   for (let j = 0; j < colors.length; j++) {
//     console.log(`- ${colors[j]}`);
//   }
//   console.log(" Models :");
//   for (let k = 0; k < models.length; k++) {
//     console.log(`- ${models[k]}`);
//   }
// }

////////////////////////////////////////////////////////////////////////////////

/*
  Loop Control
  - Break
  - Continue
  - Label
*/

// let hamada = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

// let adel = ["Red", "Green", "Black"];

// mainLoop: for (let i = 0; i < hamada.length; i++) {
//   console.log(hamada[i]);
//   nestedLoop: for (let j = 0; j < adel.length; j++) {
//     console.log(`- ${adel[j]}`);
//     if (adel[j] === "j") {
//       // if (colors[j] === "Green") {
//       // break nestedLoop;
//       break mainLoop;
//     }
//   }
// }

////////////////////////////////////////////////////////////
// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

// let colors = ["Red", "Green", "Black"];

// for (let i = 0; i < colors.length; i++) {
//   if (colors[i] === "Pen") {
//     break;
//   }
//   console.log(products[i]);
// }
///////////////////////////////////////////////////

/**
 * Loop For Advanced Example
 */

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iphone"];
// let i = 0;

// for (;;) {
//   console.log(products[i]);
//   i++;

//   // i += 2;        // تفوت واحد من بعد واحد
//
// if (i === products.length) break;
// }

//////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////

/**
 *  Products Products
 */

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iphone"];

// let colors = ["Red", "Green", "Blue"];

// let showCount = 7;

// document.write(`<h1>show ${showCount}products</h1>`);

// for (let i = 0; i < showCount; i++) {
//   document.write(`<div>`);
//   document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
//   for (let j = 0; j < colors.length; j++) {
//     document.write(`<p>${colors[j]}</p>`);
//   }

//   document.write(`<p>${colors.join(" | ")}</p>`);
//   document.write(`</div>`);
// }
///////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/**
 * Loop
 * - While
 */

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iphone"];

// let index = 0;

// while (index < products.length) {
//   console.log(products[index]);
//   index += 1;
// }

///////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/**
 * Loop
 * - Do While
 */

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iphone"];

// let i = 0;

// // while (false) {
// //   console.log(i);
// //   i++;
// // }

// do {
//   console.log(i);
//   i++;
// } while (false);

// console.log(i);
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////
/**
 * Loop Challenge
 */

// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myEmployees = [
//   "Amgad",
//   "Samah",
//   "Ameer",
//   "Omar",
//   "Othman",
//   "Amany",
//   "Samia",
// ];
// let myAdmins = 0;

// for (let i = 0; i < myAdmins.length; i++) {
//   if (myAdmins[i] === "Stop") {
//     break;
//   }
//   // admins.push(myAdmins[i]);
// }
// document.write(`<div>We Have ${myAdmins.length} Admins</div>`);

// document.write(`<div>We Have X Admins</div>`);
// document.write(`<div>We Have 3 Admins</div>`);
// document.write(`<hr>`);
// document.write(`<div>The Admins For Team Is  </div>`);
// document.write(` <h3> Team Members </h3>`);
// document.write(`<hr>`);
// document.write(`<hr>`);
// document.write(`<div>The Admins For Team Is  </div>`);
// document.write(` <h3> Team Members </h3>`);
// document.write(`<hr>`);
// document.write(`<hr>`);
// document.write(`<div>The Admins For Team Is  </div>`);
// document.write(` <h3> Team Members </h3>`);
// document.write(`<hr>`);
//////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

////////////////////////////////////////////

/*
  Function
  - What Is Function ?
  - User-Defined vs Built In
  - Syntax + Basic Usage
  - Example From Real Life
  - Parameter + Argument
  - Practical Example
*/

// function sayHello(userName) {
//   console.log(`Hello ${userName}`);
// }

// sayHello("Ahmed");
// sayHello("Osama");
// sayHello("Sayed");
// sayHello("Samera");
// sayHello("Adel");
// sayHello("Mohammed");
// sayHello("Shady");

// console, console.log(typeof console.log);

///////////////_______________________________________///////////////////////////////
///////////////////////// Function And Loop //////////////////////////////

// function sayHello(userName, age) {
//   if (age < 20) {
//     console.log(`App is Not Suitable For You`); // الاب غير مناسب ليك
//   } else {
//     console.log(`Hello ${userName}Your Age Is ${age}`); // مرحبا بك اسمك و سنك
//   }
// }
// sayHello("Osama", 48);
// sayHello("Ahmed", 25);
// sayHello("Sayed", 18);

// function generateYears(start, end, exclude) {
//   for (let i = start; i <= end; i++) {
//     if (i === exclude) {
//       continue;
//     }
//     console.log(i);
//   }
// }

// generateYears(1888, 2024, 2020);
////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////

/*
  Function
  - Return
  - Automatic Semicolon Insertion [No Line Terminator Allowed]
  - Interrupting
*/

// function calc(num1, num2) {
//   return num1 + num2;
// }

// let result = calc(10, 20);

// console.log(result + 100);

// /////////
// function generate(start, end) {
//   for (let i = start; i <= end; i++) {
//     // console.log(i);
//     if (i === 15) {
//       return `Interruptting`;
//     }
//     console.log(i);
//   }
// }
// generate(10, 20);
// console.log(result + 100);
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////
/*
  Function
  - Default Function Parameters
  - Function Parameters Default [Undefined]
  - Old Strategies [Condition + Logical Or]
  - ES6 Method
*/

// function sayHello(username, age) {
//  - ES6 Method
// function sayHello(username = "Unknown", age = "Unknown") {
//   // if (age === undefined) {
//   //   age = "Unknown";
//   // }
//   // age = age || "Unknown";

//   return `Hello ${username} Your Age Is ${age}`;
// }

// console.log(sayHello("Adel"));
// // console.log(sayHello("Adel", 25));
////////////////////////////////////////////////////////////////////////////////////////////
/*
  Function
  - Rest Parameters
  - Only One Allowed
  - Must Be Last Element
*/

// function calc(...numbers) {
//   //console.log(Array.isArray(numbers));

//   let result = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     result += numbers[i]; // result = result + numbers[i];
//   }
//   return `Final Result Is ${result}`;
// }

// console.log(calc(10, 20, 20, 30, 50));
//////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
///////////////////////////////////////

/*
  Function Advanced Practice
  - Parameters
  - Default
  - Rest
  - Loop
  - Condition
// */
//////////
// function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...skills) {
//   document.write(`<div>`);
//   document.write(`<h2>Welcome ${us}</h2>`);
//   document.write(`<p>Age: ${ag}</p>`);
//   document.write(`<p> Hour Rate: $${rt}</p>`);
//   if (show === "Yes") {
//     if (skills.length > 0) {
//       document.write(`<p>Skills: ${skills.join(" | ")}</p>`); // Nesing
//     } else {
//       document.write(`<p>Skills: No Skills</p>`);
//     }
//     // document.write(`<p>${skills.join(" | ")}</p>`);
//     // console.log("Show Skills");
//   } else {
//     document.write(`<p>Skills IS Hidden</p>`);
//     // console.log("Do Not Show Skills");
//   }
//   document.write(`</div>`);
// }

// // showInfo("Adel", 25, 10000, "No", "Html", "Css", "Js");

// showInfo("Adel", 25, 10000, "Yes", "Html", "Css", "JavaScript");
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////
/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

// showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
//////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
/*
  Function
  - Anonymous Function
  - Calling Named Function vs Anonymous Function
  - Argument To Other Function
  - Task Without Name
  - SetTimeout
  */

// let calculator = function (num1, num2) {
//   return num1 + num2;
// };

// console.log(calculator(10, 20));

// function sayHello() {
//   console.log("Hello Adel");
// }
// document.getElementById("show").onclick = sayHello;

// // - Anonymous Function
// setTimeout(function () {
//   console.log("Good");
// }, 5000);
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////
/**
 * Function 
  -Function Inside Function
  -Return Function
  */

// Example 1

// function sayMessage(FName, IName) {
//   let message = `   Hello`;
//   //Nested Function
//   function concatMsg() {
//     message = ` ${message} ${FName} ${IName}`;
//   }

//   concatMsg();

//   return message;
// }

// console.log(sayMessage("Adel", "Mahmoud"));

// Example 2

// function sayMessage(FName, IName) {
//   let message = `   Hello`;
//   //Nested Function
//   function concatMsg() {
//     return ` ${message} ${FName} ${IName}`;
//   }

//   return concatMsg();
// }

// console.log(sayMessage("Adel", "Mahmoud"));

// // Example 3
// function sayMessage(FName, IName) {
//   let message = `Hello`;

//   //Nested Function
//   function concatMsg() {
//     function getFullName() {
//       return `${FName} ${IName}`;
//     }
//     return `${message} ${getFullName()}`;
//   }
//   return concatMsg();
// }
// console.log(sayMessage("Adel", "Mahmoud"));
///////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////

/*
  Function
  - Arrow Function
  -- Regular vs Arrow [Param + No Param]
  -- Multiple Lines
  سطر واحد بس 
*/

// print = function () {
//   return 10;
// };

// let print = _  => 10; // في حالا الوان لاين فقط Arrow Function
// let print = () => 10; // في حالا الوان لاين فقط Arrow Function

// let print = function (num) {
//   return num;
// };

//let print = (num) => num; //  اختصار ق حالاات Arrow Function ينفع تشيل ال ()

// let print = function (num1, num2) {
//   return num1 + num2;
// };

// let print = (Adel, Hassan) => Adel + Hassan; //   في حاله الاتنين لا يصلح لشيل ال ()

// console.log(print(100, 10));
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
/**
 * Scope
 * - Global And Local Scope
 */

// var a = 1;
// let b = 2;

// function showText() {
//   var a = 10;
//   let b = 20;
//   console.log(`Function - From Local ${a}`);
//   console.log(`Function - From Local ${b}`);
// }

// console.log(`From Global ${a}`);
// console.log(`From Global ${b}`);

// showText();
//////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////
/**
 * Scope
 * - Block Scope [If , Switch, For]
 */
/////////////////
// var x = 10;

// if (10 === 10) {
//   let x = 50;
//   console.log(`From If Block ${x}`);
// }

// console.log(`From Global ${x}`);
//////////////////////////////
// var a = 1;
// let b = 2;

// function showText() {
//   var a = 10;
//   let b = 20;
//   console.log(`Function - From Local ${a}`);
//   console.log(`Function - From Local ${b}`);
// }

// console.log(`From Global ${a}`);
// console.log(`From Global ${b}`);

// showText();

/////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Scope
 * Lexical Scope
 *
 * Search
 * - Execution Context  /////////////////////////?????????????????????????????????
 * -Lexical Environment /////////////////????????????????????
 */

// function parent() {
//   let a = 10;

//   function child() {
//     console.log(a);

//     function grand() {
//       let b = 100;
//       console.log(`From Grand ${a}`);
//       console.log(`From Grand ${b}`);
//     }
//     grand();
//   }

//   child();
// }

// parent();
///////////////////////////////////////////////////////////////////////////////////
// /*
//   Function Arrow Challenges
// */

// // [1] One Statement In Function
// // [2] Convert To Arrow Function
// // [3] Print The Output [Arguments May Change]

// let names = function () {
//   // Parameter ?
//   return "???";
// };

// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// // String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

// /* ================================= */

// // [1] Replace ??? In Return Statement To Get The Output
// // [2] Create The Same Function With Regular Syntax
// // [3] Use Array Inside The Arguments To Get The Output

// let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => "???";

// console.log(calc(10, "???", "???")); // 80

///////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/*
  Higher Order Functions
  ---> is a function that accepts functions as parameters and/or returns a function.

  - Map
  --- method creates a new array
  --- populated with the results of calling a provided function on every element
  --- in the calling array.

  Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array

  Notes
  - Map Return A New Array

  Examples
  - Anonymous Function
  - Named Function

*/

// let myNums = [1, 2, 3, 4, 5, 6];

// let newArray = [];

// for (let i = 0; i < myNums.length; i++) {
//   newArray.push(myNums[i] + myNums[i]);
// }

// console.log(newArray);

// ///////////////////////////////Same Idea With Map ///////////////////////////////

// // let addSelf = myNums.map(function (element, index, arr) {
// //   console.log(`Current Element => ${element}`);
// //   console.log(`Current Index => ${index}`);
// //   console.log(`Array => ${arr}`);
// //   console.log(`This => ${this}`);
// //   return element + element;
// // }, 10);
// // let addSelf = myNums.map((element) => element + element);

// // console.log(addSelf);

// function addition(ele) {
//   return ele + ele;
// }

// let add = myNums.map(addition);

// console.log(add);
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/**
 * map
 * Inverted Numbers
 * Ignore Boolean Values
 */
// let swppingCases = "elDoLa";
// let invertedNumbers = [1, -10, -20, 15, 100, -30];
// let ignoreBooleans = "Eld123ol4a";
// //////1
// // let sw = swppingCases
// //   .split("")
// //   .map(function (ele) {
// //     // Condition ? True :: False
// //     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
// //   })
// //   .join("");
// // console.log(sw);
// ////////////////// Arrow Function // 1
// let sw = swppingCases
//   .split("")
//   .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
//   .join("");

// console.log(sw);
// /////////////////////2
// // let inv = invertedNumbers.map(function (ele) {
// //   return -ele;
// // });

// // console.log(inv);

// /////////////////////////Arrow Function // 2
// let inv = invertedNumbers.map((a) => -a);

// console.log(inv);
// //////////////////////////////3
// // let igo = ignoreBooleans
// //   .split("")
// //   .map(function (ele) {
// //     return isNaN(parseInt(ele)) ? ele : "";
// //   })
// //   .join("");

// // console.log(igo);
// ///////////////////////Arrow Function // 3
// let igo = ignoreBooleans
//   .split("")
//   .map((a) => (isNaN(parseInt(a)) ? a : ""))
//   .join("");

// console.log(igo);
// //////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
/*
  - Filter
  --- method creates a new array
  --- with all elements that pass the test implemented by the provided function.

  Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array
*/

// Get Friends With Name Start With A
// let friends = ["Adel", "Dola", "Ahmed", "Hassan", "Mahmoud", "Osama", "Adem"];

// // Get Even Numbers Only
// let numbers = [11, 20, 2, 5, 17, 10];

// let evenNumbers = numbers.filter(function (el) {
//   return el % 2 === 0 ? true : false;
// });

// console.log(evenNumbers);

// let filterdFriends = friends.filter(function (el) {
//   return el.startsWith("A") ? true : false;
// });

// console.log(filterdFriends);
// Test Map vs Filter

// let addMap = numbers.map(function (el) {
//   return el + el;
// });

// console.log(addMap);

// let addFilter = numbers.filter(function (el) {
//   return el + el;
// });

// console.log(addFilter);
/////////////////////////////////////////////////////////
/////////////////////////////////
/////////////////////////////////////////////////////////
/*
  Filter
  - Filter Longest Word By Number
*/

// Filter Words More Than 4 Characters

// let sentence = "I Love Foood Code Too Playing Much";

// let smallWords = sentence
//   .split("")
//   .filter(function (ele) {
//     return ele.length <= 4;
//   })
//   .join("");

// console.log(smallWords);

// // // Ignore Numbers

// let ignoreNumbers = "Elz123er4o";

// let ign = ignoreNumbers
//   .split("")
//   .filter(function (ele) {
//     return isNaN(parseInt(ele));
//   })
//   .join("");

// console.log(ign);

// // // Filter Strings + Multiply
// let mix = "A13BS2ZX";

// let mixedContent = mix
//   .split("")
//   .filter(function (ele) {
//     return !isNaN(parseInt(ele));
//   })
//   .map(function (ele) {
//     return ele * ele;
//   })
//   .join("");

// console.log(mixedContent);
/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
  - Reduce
  --- method executes a reducer function on each element of the array,
  --- resulting in a single output value.

  Syntax
  reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
  - Accumulator => the accumulated value previously returned in the last invocation
  - Current Val => The current element being processed in the array
  - Index => The index of the current element being processed in the array.
  ---------- Starts from index 0 if an initialValue is provided.
  ---------- Otherwise, it starts from index 1.
  - Array => The Current Array
*/

// let nums = [10, 20, 15, 30];

// let add = nums.reduce(function (acc, current, index, arr) {
//   console.log(`Acc => ${acc}`);
//   console.log(`Current Element => ${current}`);
//   console.log(`Current Element Index  => ${index}`);
//   console.log(`Current Element Array => ${arr}`);
//   console.log(acc + current);
//   console.log(`###########`);
//   return acc + current;
// }, 5);
// console.log(add);

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
/*
  Reduce
  - Longest Word
  - Remove Characters + Use Reduce
*/

// let theBiggest = [
//   "Bla",
//   "Propaganda",
//   "Other",
//   "AAA",
//   "Battery",
//   "Test",
//   "Propaganda_Two",
// ];

// let check = theBiggest.reduce(function (acc, current) {
//   console.log(`Acc => ${acc}`);
//   console.log(`Current Element => ${current}`);
//   console.log(acc + current);
//   console.log(`###########`);
//   return acc.length > current.length ? acc : current;
// });

// console.log(check);

// let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

// let finalString = removeChars
//   .filter(function (ele) {
//     return ele !== "@";
//     // return !ele.startsWith("@");
//   })
//   // .join("");
//   .reduce(function (acc, current) {
//     return `${acc}${current}`;
//   });
// console.log(finalString);

//////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

/*
  - forEach
  --- method executes a provided function once for each array element.

  Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array - The Current Array

  Note
  - Doesnt Return Anything [Undefined]
  - Break Will Not Break The Loop
*/

// let allils = document.querySelectorAll("ul ,li");
// let allDivs = document.querySelectorAll(".content > div");

// allils.forEach(function (ele) {
//   ele.onclick = function () {
//     //Remove Active Class From All Elements
//     allils.forEach(function (ele) {
//       ele.classList.remove("active");
//     });

//     // Add Active Class To This Element
//     this.classList.add("active");
//     // Hide All Divs
//     allDivs.forEach(function (ele) {
//       ele.style.display = "none";
//     });
//   };
// });

// console.log(allils);

/////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

// let myString = "1,2,3.EE,l,z,,e,r,o,_,W,e,b,_,S,c,h,o,o,1,2,0,z";

// let solution = "??????";

// console.log(solution); //Elzero Web School

/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
/*
  Object
  - Intro and What Is Object
  - Testing Window Object
  - Accessing Object
*/
// let user = {
//   // Properties
//   theName: "Adel",
//   theAge: 25,
//   // Methods
//   sayHello: function () {
//     return `Hello`;
//   },
// };

// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.sayHello());

//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

/*
  Object
  - Dig Deeper
  - Dot Notation vs Bracket Notation
  - Dynamic Property Name
*/

// let myVar = "country";

// let user = {
//   theName: "Adel",
//   country: "Egypt",
// };

// console.log(user.theName);
// console.log(user.country); // User.country
// console.log(user.myVar); // User.country
// console.log(user[myVar]); // User.country

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
/*
  Object
  - Nested Object And Trainings
*/

// let user = {
//   name: "Adel",
//   age: 25,
//   skills: ["HTML", "CSS", "JS"],
//   available: false, //
//   addresses: {
//     ksa: "Riyadh",
//     Egypt: {
//       one: "Cairo",
//       two: "Alex",
//     },
//   },
//   checkAv: function () {
//     if (user.available === true) {
//       return `Free For Work`;
//     } else {
//       return `Not Free For Work`;
//     }
//   },
// };

// console.log(user.name);
// console.log(user.age);
// console.log(user.skills);
// console.log(user.skills.join(" | "));
// console.log(user.skills[2]); //Access With Index
// console.log(user.addresses.ksa);
// console.log(user.addresses.Egypt.one);
// console.log(user["addresses"].Egypt.one);
// console.log(user["addresses"]["Egypt"]);
// console.log(user["addresses"]["Egypt"]["one"]);
// console.log(user.checkAv());

///////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/**
 *  Object
  - Create With New Keyword new Object();
 */

// let user = new Object({
//   age: 26,
// });

// console.log(user);

// user.age = 25;
// user["contry"] = "Egypt";

// user.syHella = function () {
//   return `Hello`;
// };

// console.log(user);
// console.log(user.age);
// console.log(user.contry);
// console.log(user.syHella());
/////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////

/*
  Function this Keyword
  - this Introduction
  - this Inside Object Method
  --- When a function is called as a method of an object,
  --- its this is set to the object the method is called on.
  - Global Object
  - Test Variables With Window And This
  - Global Context
  - Function Context

  Search
  - Strict Mode         *************************************************************************
*/

// console.log(this);

// console.log(this === window);

// myVar = 100;

// console.log(window.myVar);

// console.log(this.myVar);

// function sayHello() {
//   console.log(this);
//   return this;
// }
// sayHello();

// console.log(sayHello() === window);

// document.getElementById("cl").onclick = function () {
//   console.log(this);
// };

// let user = {
//   age: 25,
//   ageInDays: function () {
//     console.log(this);
//     return this.age * 365;
//   },
// };

// console.log(user.age);
// console.log(user.ageInDays());

////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////Resck Danger////////////////////////////////////////
/*
  Object
  - Create Object With Create Method
*/

// let user = {
//   age: 25,
//   doubleAge: function () {
//     return this.age * 2;
//   },
// };

// console.log(user);
// console.log(user.age);
// console.log(user.doubleAge());

// let obj = Object.create({});

// obj.a = 100;

// console.log(obj);

// let copyObj = Object.create(user);

// copyObj.age = 26;

// console.log(copyObj);
// console.log(copyObj.age);
// console.log(copyObj.doubleAge());

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

/*
  Object
  - Create Object With Assign Method
*/

// let obj1 = {
//   prop1: 1,
//   meth1: function () {
//     return this.prop1;
//   },
// };

// let obj2 = {
//   prop2: 2,
//   meth2: function () {
//     return this.prop2;
//   },
// };

// let targrtObject = {
//   prop1: 100,
//   prop3: 3,
// };

// let finalOject = Object.assign(targrtObject, obj1, obj2);

// finalOject.prop1 = 200;
// finalOject.prop4 = 4;

// console.log(finalOject);

// let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });

// console.log(newObject);

/////////////////////////////////////////////////////////////////
///////////////////////////////////////////////
/*
  DOM [Get / Set Elements Content And Attributes]
  - innerHTML
  - textContent
  - Change Attributes Directly
  - Change Attributes With Methods
  --- getAttribute
  --- setAttribute

  Search
  - innerText
*/

// let myElement = document.querySelector(".js");

// console.log(myElement.innerHTML);
// console.log(myElement.textContent);

// myElement.innerHTML = "Text Form <span>Main.js</span> File";
// myElement.textContent = "Text Form <span>Main.js</span> File";

// document.images[0].src = "https://google.com";
// document.images[0].alt = "Alternat";
// document.images[0].title = "picture";
// document.images[0].id = "pic";
// document.images[0].className = "img";

// let myLink = document.querySelector(".link");

// console.log(myLink.getAttribute("href"));
// console.log(myLink.getAttribute("class"));

// // myLink.getAttribute("class");
// // myLink.getAttribute("href");

// myLink.setAttribute("href", "https://instagram.com");
// myLink.setAttribute("title", "Twitter");

//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

/*
  DOM [Check Attributes]
  - Element.attributes
  - Element.hasAttribute
  - Element.hasAttributes
  - Element.removeAttribute
*/

// console.log(document.getElementsByTagName("p")[0].attributes);

// let myP = document.getElementsByTagName("p")[0];

// if (myP.hasAttribute("data-src")) {
//   if (myP.getAttribute("data-src") === "") {
//     myP.removeAttribute("class");
//   } else {
//     myP.setAttribute("data-src", "New Value");
//   }
// } else {
//   console.log("Not Found");
// }

// if (myP.hasAttributes()) {
//   console.log(`Has Attribute`);
// }

// if (document.getElementsByTagName("div")[0].hasAttributes()) {
//   console.log(`Has Attribute`);
// } else {
//   console.log(`Div Has No Attribute`);
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
// /*
//   DOM [Create Elements]
//   - createElement
//   - createComment
//   - createTextNode
//   - createAttribute
//   - appendChild
// */

// let myElement = document.createElement("div");
// let myAttr = document.createAttribute("data-custom");
// let myText = document.createTextNode("Product One");
// let myComment = document.createComment("This Is Div");

// myElement.className = "product";
// myElement.setAttributeNode(myAttr);
// myElement.setAttribute("data-test", "Testing");

// //Append Comment To Element
// myElement.appendChild(myComment);

// //Append Text To Element
// myElement.appendChild(myText);

// //Append Element To Body
// document.body.appendChild(myElement);
// // console.log(myElement);

//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

/*
  DOM [Create Elements]
  - Practice Product With Heading And Paragraph
*/

// let myMainElement = document.createElement("div");
// let myHeading = document.createElement("h2");
// let myParagraph = document.createElement("p");

// let myHeadingText = document.createTextNode("Product Title");
// let myParagraphText = document.createTextNode("Product Description");

// //Append Heading Text
// myHeading.appendChild(myHeadingText);

// //Append Heading To Main Element
// myMainElement.appendChild(myHeading);

// //Add Paragraph Text
// myParagraph.appendChild(myParagraphText);

// //Append Paragraph To Main Element
// myMainElement.appendChild(myParagraph);

// //Add Paragraph To Main Element
// myMainElement.appendChild(myParagraph);

// myMainElement.className = "product";

// document.body.appendChild(myMainElement);

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

/*
  DOM [Deal With Childrens]
  - children
  - childNodes
  - firstChild
  - lastChild
  - firstElementChild
  - lastElementChild
*/

// let myElement = document.querySelector("div");

// console.log(myElement);
// console.log(myElement.children);
// console.log(myElement.children[0]);
// console.log(myElement.childNodes);
// console.log(myElement.childNodes[0]);

// console.log(myElement.firstChild);
// console.log(myElement.lastChild);

// console.log(myElement.firstElementChild);
// console.log(myElement.lastElementChild);

////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////
/// هاممممممممممممممممممممممممممممممممممممممممممممممممممممممممممممممممممممممممممممممممم
/*
  DOM [Events]
  - Use Events On HTML
  - Use Events On JS
  --- onclick
  --- oncontextmenu
  --- onmouseenter
  --- onmouseleave

  --- onload
  --- onscroll
  --- onresize

  --- onfocus
  --- onblur
  --- onsubmit
*/

// let myBtn = document.getElementById("btn");

// myBtn.onmouseleave = function () {
//   console.log("Dolla");
// };

// window.onresize = function () {
//   console.log("Scrolled");
// };

// /////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/*
  DOM [Events]
  - Validate Form Practice
  - Prevent Default
*/

// let userInput = document.querySelector("[name='username']");
// let ageInput = document.querySelector("[name='age']");

// document.forms[0].onsubmit = function (e) {
//   let userValid = false;
//   let ageValid = false;

//   // console.log(userInput.value);
//   // console.log(userInput.value.length);

//   if (userInput.value !== "" && userInput.value.length <= 10) {
//     userValid = true;
//     console.log("Valid");
//   }

//   if (ageInput.value !== "") {
//     ageValid = true;
//   }
//   //else {
//   //   userValid = false;
//   //   console.log("Not Valid");
//   // }
//   if (userValid === false || ageValid === false) {
//     e.preventDefault();
//   }
// };

// document.links[0].onclick = function (events) {
//   console.log(events);
//   events.preventDefault();
// };

/////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
/*
  DOM [Events Simulation]
  - click
  - focus
  - blur
*/

// let one = document.querySelector(".one");
// let two = document.querySelector(".two");

// window.onload = function () {
//   two.focus();
// };
// one.onblur = function () {
//   document.links[0].click();
// };

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

/*
  DOM [Class List]
  - classList
  --- length
  --- contains
  --- item(index)
  --- add
  --- remove
  --- toggle
*/
// let element = document.getElementById("my-div");

// console.log(element.classList);
// console.log(typeof element.classList);
// console.log(element.classList.contains("Adel"));
// console.log(element.classList.contains("show"));
// console.log(element.classList.item("3")); // index

// element.onclick = function () {
//   element.classList.add("add-one", "add-two"); // اضافة الايلميت
// };

// element.onclick = function () {
//   element.classList.remove("one", "two");
// }; // حذف الايلميت

// element.onclick = function () {
//   element.classList.toggle("Adel");
// }; // للاضافة و الحذف من الايلميت

//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

/*
  DOM [CSS]
  - style
  - cssText
  - removeProperty(propertyName) [Inline, Stylesheet]
  - setProperty(propertyName, value, priority)
*/
// let element = document.getElementById("my-div");

// element.style.color = "red";
// element.style.fontWeight = "bold";

// element.style.cssText = "font-weight : bold ; color : green ; opacity : 0.7";

// element.style.removeProperty("color");
// element.style.setProperty("font-size", "40px", "important");

// console.log(
//   document.styleSheets[0].rules[0].style.removeProperty("line-height")
// );

// console.log(
//   document.styleSheets[0].rules[0].style.setProperty(
//     "background",
//     "red",
//     "important"
//   )
// );

//css
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
/*
  DOM [Deal With Elements]
  - before [Element || String]
  - after [Element || String]
  - append [Element || String]
  - prepend [Element || String]
  - remove
*/

// let element = document.getElementById("my-div");
// let createdP = document.createElement("p");

// element.before("Hello From JS");
// element.after("Hello From JS");

// element.before(createdP);
// element.after(createdP);

// element.prepend("Hello From JS");
// element.append("Hello From JS");

// element.prepend(createdP);
// element.append(createdP);

// Remove Element Display None اخفاء العنصر تماما
// element.remove();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
/*
  DOM [Traversing]
  - nextSibling
  - previousSibling
  - nextElementSibling
  - previousElementSibling
  - parentElement
*/

// let span = document.querySelector(".two");

// // console.log(span.nextSibling);
// // console.log(span.nextElementSibling.);
// // console.log(span.nextElementSibling.remove());

// // console.log(span.previousSibling);
// // console.log(span.previousElementSibling);
// // console.log(span.previousElementSibling.remove());

// console.log(span.parentElement);

// // span.onclick = function () {
// //   span.parentElement.style.backgroundColor = "red";
// // };

// span.onclick = function () {
//   span.parentElement.remove();
// };

// ////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
/*
  DOM [Cloning]
  - cloneNode(Deep)    نسخ الكود 
*/

// let myP = document.querySelector("p");
// let myP = document.querySelector("p").cloneNode(true);
// let myDiv = document.querySelector("div");

// // console.log(myP);
// myP.id = `${myP.id}-copy`;

// // myDiv.appendChild(myP);
// myDiv.appendChild(myP);

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
/*
  DOM [Add Event Listener]
  - addEventListener
  - Use Without On
  - Attach Multiple Events
  - Error Test

  Search
  - Capture & Bubbling JavaScript
  - removeEventListener
*/

// let myP = document.querySelector("p");

// myP.onclick = one;
// myP.onclick = two;

// function one() {
//   console.log("Message From oneClick 1");
// }

// function two() {
//   console.log("Message From oneClick 2");
// }

// window.onload = "Adel";

// myP.addEventListener("click", function () {
//   console.log("Message From addEvent");
// });

// myP.addEventListener("click", one);
// myP.addEventListener("click", two);

// // myP.addEventListener("click", "string"); // Error Test

// myP.onclick = function () {
//   let newP = myP.cloneNode(true);
//   newP.className = "clone";
//   document.body.appendChild(newP);
// };

// // let cloned = document.querySelector("cloned"); // Error

// // console.onclick = function () {
// //   console.log("Iam cloned");
// // };

// // document.addEventListener("click", function (e) {
// //   if (e.target) {
// //     console.log(e.target); // تحدد اللي ف الصفخة
// //   }
// // });

// document.addEventListener("click", function (e) {
//   if (e.target.className === "clone") {
//     console.log("Iam Cloned");
//   }
// });

////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////
/*
  BOM [Browser Object Model]
  - Introduction
  --- Window Object Is The Browser Window
  --- Window Contain The Document Object
  --- All Global Variables And Objects And Functions Are Members Of Window Object
  ------ Test Document And Console
  - What Can We Do With Window Object ?
  --- Open Window
  --- Close Window
  --- Move Window
  --- Resize Window
  --- Print Document
  --- Run Code After Period Of Time Once Or More
  --- Fully Control The URL
  --- Save Data Inside Browser To Use Later
*/

// window.document.title = "Hello JS";

////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

/*
  BOM [Browser Object Model]
  - alert(Message) => Need No Response Only Ok Available
  - confirm(Message) => Need Response And Return A Boolean
  - prompt(Message, Default Message) => Collect Data
*/

// window.alert("Hello Hassan");
// this.alert("Hello Adel");
// alert("Hello Adel");

// alert("Test");
// console.log("Test");

// let confirmMsg = confirm("Are You Sure ?");

// console.log(confirmMsg);

// if (confirmMsg === true) {
//   console.log("Item Is Deleted");
// } else {
//   console.log("Item Is Not Deleted");
// }

// let promptMsg = prompt("Good Day To You", "Write Day With 3 Characters");

// console.log(promptMsg);

////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/*
  BOM [Browser Object Model]
  - setTimeout(Function, Timeout, Additional Params)
  - clearTimeout(Identifier)
*/

// setTimeout(function () {
//   console.log(`Adel`);
// }, 3000);

// setTimeout(sayMsg, 3000);

// function sayMsg() {
//   console.log(`Hello Adel`);
// }

// setTimeout(sayMsg, 3000, "Hassan", 25);

// function sayMsg(user, age) {
//   console.log(`Iam Message From ${user} His Age Is: ${age}`);
// }

///  هااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااام

// let counter = setTimeout(sayMsg, 3000);

// function sayMsg() {
//   console.log(`Iam Message`);
// }

// let btn = document.querySelector("button");

// btn.onclick = function () {
//   clearTimeout(7);
//   clearTimeout(counter);
// };

////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

/*
  BOM [Browser Object Model]
  - setInterval(Function, Millseconds, Additional Params)
  - clearInterval(Identifier)
*/

// setInterval(function () {
//   console.log(`Msg`);
// }, 1000);

// setInterval(sayMsg, 1000);

// function sayMsg() {
//   console.log(`Iam Message`);
// }

// setInterval(sayMsg, 1000, "Osama", 38);

// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} His Age Is: ${age}`);
// }

// let div = document.querySelector("div");

// function countdown() {
//   div.innerHTML -= 1;
//   if (div.innerHTML === "0") {
//     clearInterval(counter);
//   }
// }

// let counter = setInterval(countdown, 1000);

////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
///////
/*
  BOM [Browser Object Model]
  - location Object
  --- href Get / Set [URL || Hash || File || Mail]
  --- host
  --- hash
  --- protocol
  --- reload()
  --- replace()
  --- assign()
*/

// console.log(location);
// console.log(location.href);

// // location.href = "https://google.com";
// // location.href = "/#sec02";
// // location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript#reference";

// // console.log(location.host);
// // console.log(location.hostname);

// // console.log(location.protocol);

// // console.log(location.hash);

// location.reload();

//////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

/*
  BOM [Browser Object Model]
  - open(URL [Opt], Window Name Or Target Attr [Opt], Win Features [Opt], History Replace [Opt])
  - close()
  - Window Features
  --- left [Num]
  --- top [Num]
  --- width [Num]
  --- height [Num]
  --- menubar [yes || no]

  Search
  - Window.Open Window Features
*/

// setTimeout(function () {
//   window.open("", "_self", "", false);
// }, 2000);

// setTimeout(function () {
//   window.open(
//     "https://google.com",
//     "_blank",
//     "width=400,height=400,top=100,left=100"
//   );
// }, 2000);

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

/*
  BOM [Browser Object Model]
  - History API
  --- Properties
  ------ length
  --- Methods
  ------ back()
  ------ forward()
  ------ go(Delta) => Position In History

  Search [For Advanced Knowledge]
  - pushState() + replaceState()
*/

// console.log(history);
// ////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

/*
  BOM [Browser Object Model]
  - stop()
  - print()
  - focus()
  - scrollTo(x, y || Options)
  - scroll(x, y || Options)
  - scrollBy(x, y || Options)
*/

// let myNewWindow = window.open("https://google.com", "", "width=500,height=500");

// window.scrollTo({
//   left: 1500,
//   top: 1200,
//   behavior: "smooth",
// });

/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

/*
  BOM [Browser Object Model]
  - Practice => Scroll To Top
  - scrollX [Alias => PageXOffset]
  - scrollY [Alias => PageYOffset]
*/

// console.log(window.scrollX === window.pageXOffset);

// let button = document.querySelector("button");

// window.onscroll = function () {
//   if (window.scrollY >= 600) {
//     console.log(`Scrolling Y Value Is: ${window.scrollY}`);
//     button.style.display = "block";
//   } else {
//     button.style.display = "none";
//   }
// };

// button.onclick = function () {
//   window.scrollTo({
//     left: 0,
//     top: 0,
//     behavior: "smooth",
//   });
// };

/////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

/*
  BOM [Browser Object Model]
  Local Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - No Expiration Time
  - HTTP And HTTPS
  - Private Tab
*/

// set
// window.localStorage.setItem("color", "red");
// window.localStorage.fontWeight = "bold";
// window.localStorage["fontSize"] = "30px";
// //Get
// console.log(window.localStorage.getItem("color", "red"));
// console.log(window.localStorage.color);
// console.log(window.localStorage["color"]);

//Remove One
// window.localStorage.removeItem("color");

//Remove All
// window.localStorage.clear();

//Get Key
// console.log(window.localStorage.key(0));

//Set Color In Page
// document.body.style.backgroundColor = window.localStorage.getItem(
//   "color",
//   "red"
// );

// console.log(window.localStorage);
// console.log(typeof window.localStorage);
///////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

/*
  BOM [Browser Object Model]
  Local Storage Practice
*/

// let lis = document.querySelectorAll("ul li");
// let exp = document.querySelector(".experiment");

// // window.localStorage.clear();

// if (window.localStorage.getItem("color")) {
//   // If There Is Color In Local Storage
//   //[1] Add Color To Div
//   exp.style.backgroundColor = window.localStorage.getItem("color");
//   //[2] Remove Active Class From All Lis
//   //Remove Active Class From All Lis
//   lis.forEach((li) => {
//     li.classList.remove("active");
//   });
//   //[3] Add Active Class To Current Color
//   document
//     .querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
//     .classList.add("active");
// }

// lis.forEach((li) => {
//   li.addEventListener("click", (e) => {
//     // console.log(e.currentTarget.dataset.color);
//     //Add Active Class To Current Element
//     e.currentTarget.classList.add("active");
//     //Add Current Color To Local Storage
//     window.localStorage.setItem("color", e.currentTarget.dataset.color);
//     // Change Div Background Color
//     exp.style.backgroundColor = e.currentTarget.dataset.color;
//   });
// });

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

/*
  BOM [Browser Object Model]
  Session Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - New Tab = New Session
  - Duplicate Tab = Copy Session
  - New Tab With Same Url = New Session
*/

// window.localStorage.setItem("color", "red");
// window.sessionStorage.setItem("color", "blue");

// document.querySelector(".name").onblur = function () {
//   // console.log(this.value);
//   window.localStorage.setItem("inout-name", this.value);
// };

////////////////?????????????????????????/?//////////////////////////////////////////////////\\
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//challeng 114

/////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//

/*
  Destructuring
  " is a JavaScript expression that allows us to extract data from arrays,
    objects, and maps and set them into new, distinct variables. "
  - Destructuring Array
*/

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;

// let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];

// [a = "A", b, c, d, e = "Osma"] = myFriends;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// // console.log(myFriends[4]);

// let [x, y, , z] = myFriends;

// console.log(x);
// console.log(y);
// console.log(z);

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Destructuring
//   - Destructuring Array Advanced Examples
// */

// // let myFriends = [
// //   "Ahmed",
// //   "Sayed",
// //   "Ali",
// //   "Maysa",
// //   ["Shady", "Amr", ["Mohamed", "Gamal"]],
// // ];

// // // console.log(myFriends[4][2][1]);

// // let [, , , , [a, , [, b]]] = myFriends;

// // console.log(a); //Shady
// // console.log(b); //Gamal

// ////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Destructuring
//   - Destructuring Array => Swapping Variables
// */

// // let book = "video";
// // let video = "book";

// // // // Save Book Value In Stash
// // // let stash = book; // video

// // // // change book value
// // // book = video; // Book

// // // // change video value
// // // video = stash; // video

// // [book, video] = [video, book];

// // console.log(book);
// // console.log(video);

// //////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////
// /*
//   Destructuring
//   - Destructuring Object
// */

// const user = {
//   theName: "Adel",
//   theAge: 25,
//   theTitle: "Web Developer",
//   theCountry: "Egypt",
// };

// // console.log(user.theName);
// // console.log(user.theAge);
// // console.log(user.theTitle);
// // console.log(user.theCountry);

// // let theName = user.theName;
// // let theAge = user.theAge;
// // let theTitle = user.theTitle;
// // let theCountry = user.theCountry;

// // console.log(theName);
// // console.log(theAge);
// // console.log(theTitle);
// // console.log(theCountry);

// // ({ theName, theAge, theTitle, theCountry } = user);
// const { theName, theAge, theCountry } = user;

// console.log(theName);
// console.log(theAge);
// console.log(theCountry);
//////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
/*
  Destructuring
  - Destructuring Object
  --- Naming The Variables
  --- Add New Property
  --- Nested Object
  --- Destructuring The Nested Object Only
*/

// const user = {
//   theName: "Adel",
//   theAge: 25,
//   theTitle: "Web Developer",
//   theCountry: "Egypt",
//   theColor: "Black",
//   skills: {
//     html: 70,
//     css: 80,
//   },
// };

// const {
//   theName: n,
//   theAge: a,
//   theCountry,
//   theColor: co = "Red",
//   skills: { html: h, css: c },
// } = user;

// console.log(n);
// console.log(a);
// console.log(theCountry);
// console.log(co);
// console.log(`My HTML Skill Progress Is ${h}`);
// console.log(`My CSS Skill Progress Is ${c}`);

// const { html: skillOne, css: skillTwo } = user.skills;

// console.log(skillOne);
// console.log(skillTwo);
// console.log(`My HTML Skill Progress Is ${skillOne}`);
// console.log(`My CSS Skill Progress Is ${skillTwo}`);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
//
/*
  Destructuring
  - Destructuring Function Parameters
*/

// const user = {
//   theName: "Adel",
//   theAge: 25,
//   skills: {
//     html: 70,
//     css: 80,
//   },
// };

// showDetails(user);

// // function showDetails(obj) {
// //   console.log(`Your Name Is ${obj.theName}`);
// //   console.log(`Your Age Is ${obj.theAge}`);
// //   console.log(`Your CSS Skill Progress Is ${obj.skills.css}`);
// // }

// function showDetails({ theName: tn, theAge: ta, skills: { css: c } } = user) {
//   console.log(`Your Name Is ${tn}`);
//   console.log(`Your Age Is ${ta}`);
//   console.log(`Your CSS Skill Progress Is ${c}`);
// }
//
////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
//
/*
  Destructuring
  - Destructuring Mixed Content
*/

// const user = {
//   theName: "Adel",
//   theAge: 25,
//   skills: ["HTML", "CSS", "JavaScript"],
//   addresses: {
//     egypt: "Cairo",
//     Giza: "Hawamdiya",
//   },
// };

// // const {
// //   theName: n,
// //   theAge: a,
// //   skills: [, , js],
// //   addresses: { egypt: e },
// // } = user;

// const {
//   theName: n,
//   theAge: a,
//   skills: [one, two, three],
//   addresses: { egypt: e },
// } = user;

// console.log(`your Name Is ${n}`);
// console.log(`your Age Is ${a}`);
// // console.log(`Your Javascript Skill Progress Is ${three}`);
// console.log(`Your Skills Progress Is: ${three} | ${two} | ${one}`);
// console.log(`your Live In ${e}`);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
//
/*
  Destructuring
  - Challenge
*/

// let chosen = 3;

// let myFriends = [
//   { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//   { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
//   { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
// ];

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
/*
  - Set Data Type
  Syntax: new Set(Iterable)
  -- Object To Store Unique Values
  -- Cannot Access Elements By Index

  Properties:
  - size

  Methods:
  - add
  - delete
  - clear
  - has
*/

// let myData = [1, 1, 1, 2, 3, "A"];
// // let MyUniqueData = new Set([1, 1, 1, 2, 3]);
// // let MyUniqueData = new Set(myData);
// // let MyUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);
// let MyUniqueData = new Set();

// MyUniqueData.add(1).add(1).add(1);
// MyUniqueData.add(2).add(3).add("A");

// // console.log('Is Set Has => A${MyUniqueData.has("A") ? "true" : "false"}');
// // console.log('Is Set Has => A${MyUniqueData.has("A") }');
// // console.log(`Is Set Has => A ${MyUniqueData.has("A")}`); // True
// // console.log(`Is Set Has => A ${MyUniqueData.has("a")}`); // False
// console.log(`Is Set Has => A ${MyUniqueData.has("a".toUpperCase("a"))}`);

// console.log(myData);
// console.log(MyUniqueData);

// console.log(MyUniqueData.size);

// console.log(myData[0]);
// console.log(MyUniqueData[0]);

// // MyUniqueData.delete(2);
// console.log(MyUniqueData.delete(2)); //True
// // console.log(MyUniqueData.delete(20));   // False

// console.log(MyUniqueData);
// console.log(MyUniqueData.size);

// MyUniqueData.clear(); // Remove All

// console.log(MyUniqueData);
// console.log(MyUniqueData.size);

// // console.log(MyUniqueData.has("A"));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  /////////////////////////////////////////////////////////////////////////////////////////////////
//
/*
  -
  "
    The WeakSet is weak,
    meaning references to objects in a WeakSet are held weakly.
    If no other references to an object stored in the WeakSet exist,
    those objects can be garbage collected.
  "
  --
  Set     => Can Store Any Data Values
  WeakSet => Collection Of Objects Only
  --
  Set     => Have Size Property
  WeakSet => Does Not Have Size Property
  --
  Set     => Have Keys, Values, Entries
  WeakSet => Does Not Have clear, Keys, Values And Entries
  --
  Set     => Can Use forEach
  WeakSet => Cannot Use forEach

  Usage: Store objects and removes them once they become inaccessible
*/

// // Type Of Data

// let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);

// console.log(mySet);

// // Size
// console.log(`Size OF Element Inside Set Is ${mySet.size}`);

// //Values + Keys Alias
// let iterator = mySet.keys();

// // console.log(iterator.next());
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next()); // للحصل ع ترو بعد العناصر

// //ForEach

// mySet.forEach((el) => console.log(el));

// console.log("#".repeat(20));

// // Type Of Data

// let myWs = new WeakSet([{ A: 1, B: 2 }]);

// console.log(myWs);

// No Size

// No Values = WeakSet

// WeakSet Use Cases  /////// Serche Google

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
/*
  - Map Data Type
  Syntax: new Map(Iterable With Key/Value)
  -- Map vs Object
  --
  ------ Map => Does Not Contain Key By Default
  ------ Object => Has Default Keys
  --
  ------ Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
  ------ Object => String Or Symbol
  --
  ------ Map => Ordered By Insertion
  ------ Object => Not 100% Till Now
  --
  ------ Map => Get Items By Size
  ------ Object => Need To Do Manually
  --
  ------ Map => Can Be Directly Iterated
  ------ Object => Not Directly And Need To Use Object.keys() And So On
  --
  ------ Map => Better Performance When Add Or Remove Data
  ------ Object => Low Performance When Comparing To Map
*/

// // object trenr prgramming JS
// let myObject = {};
// let myEmptyObject = Object.create(null);
// let myMap = new Map();

// console.log(myObject);
// console.log(myMap);
// console.log(myEmptyObject);

// let myNewObject = {
//   10: "Number",
//   "10": "String",
// };

// console.log(myNewObject[10]);

// let myNewMap = new Map();
// myNewMap.set(10, "Number");
// myNewMap.set("10", "String");
// myNewMap.set(true, "Boolean");
// myNewMap.set({a:1, b:2}, "String");
// myNewMap.set(function doSomething() {}, "Function");

// console.log(myNewMap.get(10));
// console.log(myNewMap.get("10"));

// console.log("#######################################################");

// console.log(myNewObject);
// console.log(myNewMap);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

/*
  - Map Data Type
  Methods
  --- set
  --- get
  --- delete
  --- clear
  --- has

  Properties
  --- size
*/

// let myMap = new Map([
//   [10, "Number"],
//   ["Name", "String"],
//   [false, "Boolean"],
// ]);

// // myMap.set(10, "Number");
// // myMap.set("Name", "String");

// console.log(myMap);

// console.log(myMap.get(10));
// console.log(myMap.get("Name"));
// console.log(myMap.get(false));

// console.log("###########################");

// console.log(myMap.has(false)); // الاسم لازم يكون بالظبطططط

// console.log("###########################");

// console.log(myMap.size);

// console.log(myMap.delete("Name"));

// console.log(myMap.size);

// myMap.clear();

// console.log(myMap.size);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//
/*
  - Map vs WeakMap
  "
    WeakMap Allows Garbage Collector To Do Its Task But Not Map.
  "
  --
  Map     => Key Can Be Anything
  WeakMap => Key Can Be Object Only
  --
*/

// let mapUser = { theName: "Eldola" };

// let myMap = new Map();

// myMap.set(mapUser, "Object Value");

// mapUser = null; // Override The Reference

// console.log(myMap);

// console.log("#".repeat(20));

// let wMapUser = { theName: "Eldola" };

// let myWeakMap = new WeakMap();

// myWeakMap.set(wMapUser, "Object Value");

// wMapUser = null; // Override The Reference

// console.log(myWeakMap);

//////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

/*
  Array Methods
  - Array.from(Iterable, MapFunc, This)
  --- Variable
  --- String Numbers
  --- Set
  --- Using The Map Function
  --- Arrow Function
  --- Shorten The Method + Use arguments
*/

// console.log(Array.from("Adel"));

// console.log(
//   Array.from("12345", function (n) {
//     return +n + +n;
//   })
// );

// console.log(Array.from("12345", (n) => +n + +n));

// let myAttr = [1, 1, 1, 2, 3, 4];

// // let mySet = new Set(myAttr);

// // console.log(Array.from(mySet));

// // console.log([...new Set(myArray)]);// future

// function af() {
//   return Array.from(arguments);
// }

// console.log(af("Osama", "Ahmed", "Sayed", 1, 2, 3));

///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/*
  Array Methods
  - Array.copyWithin(Target, Start => Optional, End => Optional)
  "Copy Part Of An Array To Another Location in The Same Array"
  -- Any Negative Value Will Count From The End
  -- Target
  ---- Index To Copy Part To
  ---- If At Or Greater Than Array Length Nothing Will Be Copied
  -- Start
  ---- Index To Start Copying From
  ---- If Ommited = Start From Index 0
  -- End
  ---- Index To End Copying From
  ---- Not Including End
  ---- If Ommited = Reach The End
*/

// let myArray = [10, 20, 30, 40, 50, "A", "B"];

// // myArray.copyWithin(3); //  [10, 20, 30, 10, 20, 30, 40]

// // myArray.copyWithin(4, 6); //  [10, 20, 30, 40, 50,"B", "A", "B"];

// // myArray.copyWithin(4, -1); //  [10, 20, 30, 40, 50,"B", "A", "B"];

// // myArray.copyWithin(1,-2); //  [10,  "A" ,"B", 40, 50, "A", "B"]

// myArray.copyWithin(1, -2, -1); //  [10, "A", 30, 40, 50, "A", "B"];

// console.log(myArray);

/////////////////////////////////////////////////////////////////////
////////////////////    ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
/*

  Array Methods
  - Array.some(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
  Using
  - Check if Element Exists In Array
  - Check If Number In Range
*/

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let myName = 10;

// // let ckeck = nums.some(function (e) {
// //   console.log("Test");
// //   return e > 5;
// // });

// let ckeck = nums.some(function (e) {
//   // console.log(this);
//   return e > this;
// }, myName);

// // let ckeck = nums.some((e) => e > 5); // Aroo Function

// console.log(ckeck);

// function checkValues(arr, val) {
//   return arr.some(function (e) {
//     return e === val;
//   });
// }

// console.log(checkValues(nums, 20));
// console.log(checkValues(nums, 5));

// let range = {
//   // min: 5,
//   min: 10,
//   // max: 7,
//   max: 20,
// };

// let checkNumberInRange = nums.some(function (e) {
//   // console.log(this.min);
//   // console.log(this.max);
//   return e >= this.min && e <= this.max;
// }, range);

// console.log("##".repeat(20));
// console.log(checkNumberInRange);
// console.log("##".repeat(20));
// //////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////
//

/*
  Array Methods
  - Array.every(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
*/

// const locations = {
//   20: "Place 1",
//   30: "Place 2",
//   // 10: "Place 3",// false
//   50: "Place 3", //true
//   40: "Place 4",
// };

// let mainLocation = 15;

// let locationsArray = Object.keys(locations);

// console.log(locationsArray);

// let locationArrayNumbers = locationsArray.map((n) => +n);

// console.log(locationArrayNumbers);

// let check = locationArrayNumbers.every(function (e) {
//   return e > this;
// }, mainLocation);

// console.log(check);

/////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

/*
  Spread Operator => ...Iterable
  "Allow Iterable To Expand In Place"
*/

// console.log("Adel");
// console.log(..."Adel");
// console.log([..."Adel"]);

// //Concatenate Arrays

// let myArray1 = [10, 20, 30];
// let myArray2 = [40, 50, 60];

// let allArrays = [...myArray1, ...myArray2];

// console.log(allArrays);

// // copy Array

// let copyArray = [...myArray1];

// console.log(copyArray);

// // Push Inside Array

// let allFriends = ["Adel ", "Samer", "Ahmed"];
// let thissYearFriends = ["Osma", "Nour"];

// allFriends.push(...thissYearFriends);
// console.log(allFriends);

// // // Use With Math Object

// let myNums = [10, 20, -100, 100, 1000, 500];

// console.log(Math.max(...myNums));

// // Spread With Objects => Merge Objects

// let objOne = {
//   a: 1,
//   b: 2,
// };

// let objTwo = {
//   c: 3,
//   d: 4,
// };

// console.log({ ...objOne, ...objTwo, dola: 25 });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//

/*
  Map And Set + What You Learn => Challenge
  Requirements
  - You Cant Use Numbers Or True Or False
  - Don't Use Array Indexes
  - You Cant Use Loop
  - You Cant Use Any Higher Order Function
  - Only One Line Solution Inside Console
  - If You Use Length => Then Only Time Only
  Hints
  - You Can Use * Operator Only In Calculation
  - Set
  - Spread Operator
  - Math Object Methods
*/

// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];

// let n3 = [...n1, ...n2];

// console.log(n3);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //
// /*
//   Regular Expression
//   - Email
//   - IP
//   - Phone
//   - URL
// */

// let str1 = '10 20 100 1000 5000';
// let str2 = 'Os1 Os12 Os123 Os123Os Os12312Os123';

// let invalidEmail = 'Osama@@@gmail....com';
// let validEmail = 'o@nn.sa';

// let ip = '192.168.2.1'; // IPv4

// let url = 'elzero.org';
// let url = 'elzero.org/';
// let url = 'http://elzero.org/';
// let url = 'http://www.elzero.org/';
// let url = 'https://.elzero.org/';
// let url = 'https://www.elzero.org/';
// let url = 'https://www.elzero.org/?facebookid=asdasdasd';

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
/*
  Regular Expression

  Syntax
  /pattern/modifier(s);
  new RegExp("pattern", "modifier(s)")

  Modifiers => Flags
  i => case-insensitive
  g => global
  m => Multilines

  Search Methods
  - match(Pattern)

  Match
  -- Matches A String Against a Regular Expression Pattern
  -- Returns An Array With The Matches
  -- Returns null If No Match Is Found.
*/
//\
// let myString = "Hello Elzero Web School I Love elzero";

// // let myRegex = /elzero/i;
// let myRegex = /elzero/gi;
// // let myRegex = /Elzero/;

// console.log(myString.match(myRegex));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //

// /*
//   Regular Expression

//   Ranges

//   - Part 1
//   (X|Y) => X Or Y
//   [0-9] => 0 To 9
//   [^0-9] => Any Character Not 0 To 9
//   Practice

//   - Part 2
//   [a-z]
//   [^a-z]
//   [A-Z]
//   [^A-Z]
//   [abc]
//   [^abc]

// */

// let tld = "Com Net Org Info Code Io";
// let tldRe = /(org|info|io)/i;
// // let tldRe = /(info|org|io)/i;
// // let tldRe = /(info|org|io)/ig;

// console.log(tld.match(tldRe));

// console.log("#".repeat(20));

// let nums = "12345678910";
// // let numsRe = /[0-9]/g;
// let numsRe = /[0-2]/g;

// console.log(nums.match(numsRe));

// console.log("#".repeat(20));

// let notNums = "12345678910";
// // let notNumsRe = /[0-9]/g;
// let notNumsRe = /[^0-2]/g;

// console.log(notNums.match(notNumsRe));

// console.log("#".repeat(20));

// let specialtNums = "1!2@3%45#6!8$9#10";

// let specialtNumsRe = /[^0-9]/g;

// console.log(specialtNums.match(specialtNumsRe));

// console.log("#".repeat(20));

// let practice = "Os1 Os10s Os2 Os8 Os8Os";

// let practiceRe = /Os[5-9]Os/g;

// console.log(practice.match(practiceRe));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//

/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

*/

// //
// let myString = "AaBbcdefG123!234%^&*";
// let atozSmall = /[a-z]/g;
// let NotAtozSmall = /[^a-z]/g;
// let atozCapital = /[A-Z]/g;
// let NotAtozCapital = /[^A-Z]/g;
// let aAndcAnde = /[ace]/g;
// let NotaAndcAnde = /[^ace]/g;
// let lettersCapsAndSmall = /[a-zA-Z]/g;
// let NotlettersCapsAndSmall = /[^a-zA-Z]/g;
// let specials = /[^a-zA-Z0-9]/g;
// console.log(myString.match(atozSmall));
// console.log(myString.match(NotAtozSmall));
// console.log(myString.match(atozCapital));
// console.log(myString.match(NotAtozCapital));
// console.log(myString.match(aAndcAnde));
// console.log(myString.match(NotaAndcAnde));
// console.log(myString.match(lettersCapsAndSmall));
// console.log(myString.match(NotlettersCapsAndSmall));
// console.log(myString.match(specials));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//

/*
  Regular Expression
  Character Classes
  . => matches any character, except newline or other line terminators.
  \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
  \W => matches Non word characters
  \d => matches digits from 0 to 9.
  \D => matches non-digit characters.
  \s => matches whitespace character.
  \S => matches non whitespace character.
*/
//

// let email = "O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com";
// let dot = /./g;
// let word = /\w/g; // [a-z, A-Z, 0-9 And Underscore]
// let wordC = /\W/g; // @#$%^$&*(){}[];:,./<>?|`~
// let valid = /\w@/g;
// let validw = /\w@\w/g;
// let validwm = /\w@\w.com/g;
// let validComNet = /\w@\w.(com|net)/g;

// console.log(email.match(dot));
// console.log("#".repeat(20));
// console.log(email.match(word));
// console.log(email.match(wordC));
// console.log("#".repeat(20));
// console.log(email.match(valid));
// console.log(email.match(validw));
// console.log(email.match(validwm));
// console.log(email.match(validComNet));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
/*
  Regular Expression
  Character Classes
  \b => matches at the beginning or end of a word.
  \B => matches NOT at the beginning/end of a word.

  Test Method
  pattern.test(input)
*/
//
// let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
// let re = /(\bspam|spam\b)/gi;

// console.log(names.match(re));

// console.log(re.test(names));
// console.log(/(\bspam|spam\b)/gi.test("Adel"));
// console.log(/(\bspam|spam\b)/gi.test("1Spam"));
// console.log(/(\bspam|spam\b)/gi.test("Spam1"));

//
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
/*
  Regular Expression

  Quantifiers
  n+    => One Or More
  n*    => zero or more
  n?    => zero or one
*/

// let mails =
//   "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru adel@gamil.com adel@gamil.net "; // All Emails
// // let mailsRe = /\w@\w\w.sa/gi;
// // let mailsRe = /\w+@/gi;
// // let mailsRe = /\w+@\w+.(com|net)/gi;
// let mailsRe = /\w+@\w+.\w+/gi;

// console.log(mails.match(mailsRe));
// console.log("#".repeat(112));

// let nums = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
// // let numsRe = /0/gi;
// // let numsRe = /0\d0/gi;
// // let numsRe = /0\d+0/gi;
// let numsRe = /0\d*0/gi;

// console.log(nums.match(numsRe));
// console.log("#".repeat(112));
// let urls = "https://google.com http://www.website.net web.com"; // http + https
// // let urlsRe = /https?/gi;
// // let urlsRe = /https?\/\//gi; //null
// let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/gi;
// console.log(urls.match(urlsRe));
// console.log("#".repeat(112));

//
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
/*
  Regular Expression

  Quantifiers
  n{x}   => Number of
  n{x,y} => Range
  n{x,}  => At Least x
*/

// let serials = "S100S S3000S S50000S S950000S";

// console.log(serials.match(/s\d{3}s/gi)); // S[Three Number]S
// console.log(serials.match(/s\d{4,5}s/gi)); // S[Four Or Five Number]S
// console.log(serials.match(/s\d{4,}s/gi)); // S[At Least Four]S

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//

/*
  Regular Expression

  Quantifiers
  $  => End With Something
  ^  => Start With Something
  ?= => Followed By Something
  ?! => Not Followed By Something
*/

// let myString = "We Love Programming";
// let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

// console.log(/ing$/gi.test(myString)); //true
// console.log(/^we/gi.test(myString)); //true
// console.log(/lz$/g.test(names)); //false
// console.log(/lz$/gi.test(names)); //true
// console.log(/^2/gi.test(names)); //false
// console.log(/^\d/gi.test(names)); //true
// console.log(/^\w/gi.test(names)); //true
// console.log(/^\s/gi.test(names)); //false
// console.log("#".repeat(112));

// console.log(names.match(/\d\w{5}(?=Z)/gi));
// console.log(names.match(/\d\w{8}(?!Z)/gi));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//

/*
  Regular Expression

  - replace // استبدال 
  - replaceAll //استبدال الكل
*/

// let txt = "We Love Programming And @ Because @ Is Amazing";
// console.log(txt.replace("@", "Eldola")); //استبدال
// console.log(txt.replaceAll("@", "Eldola")); //استبدال الكل

// let re = /@/gi;
// console.log(txt.replaceAll(re, "Eldola")); //استبدال الكل
// console.log(txt.replaceAll(/@/gi, "Eldola")); //استبدال الكل

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//

// /*
//   Regular Expression
//   - Input Form Validation Practice
// */ رقم الفون

// document.getElementById("register").onsubmit = function () {
//   let phoneInput = document.getElementById("phone").value;
//   let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910
//   let ValidationResult = phoneRe.test(phoneInput);

//   if (ValidationResult === false) {
//     return false;
//   }

//   console.log(ValidationResult);
//   return true;
// };

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 145
// //   Regular Expression onlion js

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Challengee  (146)
/*
  Regular Expression
  - Challenge
*/

// let url1 = 'elzero.org';
// let url2 = 'http://elzero.org';
// let url3 = 'https://elzero.org';
// let url4 = 'https://www.elzero.org';
// let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

// let re = //;

// console.log(url1.match(re));
// console.log(url2.match(re));
// console.log(url3.match(re));
// console.log(url4.match(re));
// console.log(url5.match(re));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Opp
// JavaScript OOP (147)
// OPP Stand For => object Oriented Programming

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//opp (148) في كورس ع القناة

// Constructor Finction

// function User(id, username, salary) {
//   this.i = id;
//   this.u = username;
//   this.s = salary + 1000;
// }

// let userOne = new User(100, "Elzero", 5000);
// let userTwo = new User(101, "Adel", 6000);
// let userThree = new User(102, "Sayed", 7000);

// console.log(userOne.i);
// console.log(userOne.u);
// console.log(userOne.s);

// console.log(userTwo.i);
// console.log(userTwo.u);
// console.log(userTwo.s);

// console.log(userThree.i);
// console.log(userThree.u);
// console.log(userThree.s);

// const userOne = {
//   id: 100,
//   username: "Elzweo",
//   salary: 5000,
// };

// const userTwo = {
//   id: 101,
//   username: "Adel",
//   salary: 6000,
// };

// const userThree = {
//   id: 102,
//   username: "Sayed",
//   salary: 7000,
// };

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
/*
  Constructor Function
  - New Syntax
*/

// class User {
//   constructor(id, username, salary) {
//     this.i = id;
//     this.u = username;
//     this.s = salary + 1000;
//   }
// }

// let userOne = new User(100, "Elzero", 5000);

// console.log(userOne.i);
// console.log(userOne.u);
// console.log(userOne.s);

// console.log(userOne instanceof User);
// console.log(userOne.constructor === User);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//

/*
  Constructor Function
  - Deal With Properties And Methods
*/

// class User {
//   constructor(id, username, salary) {
//     // Properties
//     this.i = id;
//     this.u = username || "Unknown";
//     this.s = salary < 6000 ? salary + 500 : salary;
//     this.msg = function () {
//       return `Hello ${this.u} Your Salary Is ${this.s} `;
//     };
//   }
//   // MEthods
//   writeMsg() {
//     return `Hello ${this.u} Your Salary Is ${this.s} `;
//   }
// }
// let userOne = new User(100, "Elzero", 5000);
// let userTwo = new User(101, "", 6000);

// console.log(userOne.u);
// console.log(userOne.s);
// console.log(userOne.msg());
// console.log(userOne.writeMsg());

// console.log(userTwo.u);
// console.log(userTwo.s);
// console.log(userTwo.msg); // Native Code
// console.log(userTwo.writeMsg); // Native Code

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #151
/*
  Constructor Function
  - Update Properties
  - Built In Constructors
*/

// class User {
//   constructor(id, username, salary) {
//     this.i = id;
//     this.u = username;
//     this.s = salary;
//   }
//   updateName(newName) {
//     this.u = newName;
//   }
// }

// let userOne = new User(100, "Elzero", 5000);

// console.log(userOne.u);
// userOne.updateName("Adel");
// console.log(userOne.u);

// let strOne = "Elzero";
// let strTwo = new String();

// console.log(typeof strOne);
// console.log(typeof strTwo);

// console.log(strOne instanceof String);
// console.log(strTwo instanceof String);

// console.log(strOne.constructor === String);
// console.log(strTwo.constructor === String);

// let numOne = "100";
// let numTwo = new Number();

// console.log(typeof numOne);
// console.log(typeof numTwo);

// console.log(numOne instanceof String);
// console.log(numTwo instanceof String);

// console.log(numOne.constructor === String);
// console.log(numTwo.constructor === String);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #152
/*
  Class
  - Static Properties And Methods
*/

// class User {
//   // Static Properties
//   static count = 0;
//   constructor(id, username, salart) {
//     this.i = id;
//     this.u = username;
//     this.s = salart;
//     User.count++;
//   }
//   //Static Properties
//   static sayHello() {
//     return `Hello From Class `;
//   }
//   static countMembers() {
//     return `${this.count} Members Created`;
//   }
// }

// let userOne = new User(100, "Elzero", 5000);
// let userTwo = new User(101, "Eldola", 6000);
// let userThree = new User(102, "Eladel", 7000);

// console.log(userOne.u);
// console.log(userTwo.u);
// console.log(userOne.count);
// console.log(User.count);
// console.log(User.sayHello());
// console.log(User.countMembers());

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // #153
/*
  Class
  - Inheritance
*/
// Parent Class
// class User {
//   constructor(id, username) {
//     this.i = id;
//     this.u = username;
//   }
//   sayHello() {
//     return `Hello ${this.u}`;
//   }
// }
// // Derived Class
// class Admin extends User {
//   constructor(id, username, permissions) {
//     super(id, username);
//     this.p = permissions;
//   }
// }

// class Superman extends Admin {
//   constructor(id, username, permissions, ability) {
//     super(id, username);
//     this.ability = ability;
//   }
// }

// let userOne = new User(100, "Elzero");
// let adminOne = new Admin(110, "Adoool", 1);

// console.log(userOne.u);
// console.log(userOne.sayHello());
// console.log("#".repeat(100));
// console.log(adminOne.i);
// console.log(adminOne.u);
// console.log(adminOne.p);
// console.log(adminOne.sayHello());

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // #154

/*
  Encapsulation
  - Class Fields Are Public By Default
  - Guards The Data Against Illegal Access.
  - Helps To Achieve The Target Without Revealing Its Complex Details.
  - Will Reduce Human Errors.
  - Make The App More Flexible And Manageable.
  - Simplifies The App.
*/
// class User {
//   // Private Property
//   #e;
//   constructor(id, username, eSalary) {
//     this.i = id;
//     this.u = username;
//     this.#e = eSalary;
//   }
//   getSalary() {
//     return parseInt(this.#e);
//   }
// }

// let userOne = new User(100, "Elzero", "5000 Gneh");

// console.log(userOne.u);
// console.log(userOne.getSalary() * 0.3);

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // #155

/*
  Prototype
  - Introduction
  - Prototypes are the mechanism by which JavaScript objects
    inherit features from one another.
*/

// class User {
//   constructor(id, username) {
//     this.i = id;
//     this.u = username;
//   }
//   sayHello() {
//     return `Hello ${this.u}`;
//   }
// }

// let userOne = new User(100, "Elzero");
// console.log(userOne.u);

// console.log(User.prototype);

// let strOne = "Eladel";

// console.log(String.prototype);
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // #156
/*
  Prototype
  - Add To Prototype Chain
  - Extend Built In Constructors Features
*/
// class User {
//   constructor(id, username) {
//     this.i = id;
//     this.u = username;
//   }
//   sayHello() {
//     return `Hello ${this.u}`;
//   }
// }

// let userOne = new User(100, "Elzero");
// console.log(userOne.u);
// console.log(User.prototype);
// console.log(userOne);

// User.prototype.sayWelcome = function () {
//   return `Welcome ${this.u}`;
// };

// Object.prototype.love = " Elzero Web School";

// String.addDotBeforeAndAfter = function (val) {
//   return `.${this}. `;
// };
// let myString = "Elzero ";
//
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // #157
//
/*
  Object Meta Data And Descriptor
  - writable
  - enumerable
  - configurable [Cannot Delete Or Reconfigure]
*/

// const myObject = {
//   a: 1,
//   b: 2,
// };

// Object.defineProperty(myObject, "c", {
//   writable: true,
//   enumerable: true,
//   configurable: false,
//   value: 3,
// });

// Object.defineProperty(myObject, "c", {
//   writable: true,
//   enumerable: true,
//   configurable: true, // Cannot redefine property
//   value: 3,
// });

// myObject.c = 100;

// console.log(delete myObject.c);
// for (let prop in myObject) {
//   console.log(prop, myObject[prop]);
// }

// console.log(myObject);
//
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // #158

/*
  Object Meta Data And Descriptor
  - Define Multiple Properties
  - Check Descriptors
*/

// const myObject = {
//   a: 1,
//   b: 2,
// };

// Object.defineProperties(myObject, {
//   c: {
//     configurable: true,
//     value: 3,
//   },
// });

// Object.defineProperties(myObject, {
//   d: {
//     configurable: true,
//     value: 4,
//   },
// });

// Object.defineProperties(myObject, {
//   e: {
//     configurable: true,
//     value: 5,
//   },
// });

// console.log(myObject);

// console.log(Object.getOwnPropertyDescriptor(myObject, "d"));
// console.log(Object.getOwnPropertyDescriptors(myObject));
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // #159

/*
  Date And Time
  - Date Constructor

  Static Methods
  - Date.now()

  - To Track Time You Need Starting Point
  - Epoch Time Or Unix Time In Computer Science Is The Number of Seconds Since January 1, 1970.
  - Why 1970 [829 Days To 136 Years]

  Search For
  - Year 2038 Problem in Computer Science. Haaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaam!!!!!!!!!!!!!!!!!!!!1
*/

// let dateNow = new Date();

// console.log(dateNow);

// console.log(Date.now()); // 1000 Mill = 1 Second

// let seconds = Date.now() / 1000; // Number Of Seconds

// console.log(`Seconds ${seconds}`);

// let minutes = seconds / 60; // Number Of Minutes
// console.log(`Minutes ${minutes}`);

// let hours = minutes / 60; // Number Of Hours
// console.log(`Hours ${hours}`);

// let days = hours / 24; // Number Of Days
// console.log(`Days ${days}`);

// let years = days / 365; // Number Of Years
// console.log(`Years ${years}`);

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // #160

/*
  Date And Time
  - getTime() => Number Of Milliseconds
  - getDate() => Day Of The Month
  - getFullYear()
  - getMonth() => Zero Based
  - getDay() => Day Of The Week
  - getHours()
  - getMinutes()
  - getSeconds()
*/

// let dateNow = new Date();
// let birthday = new Date("may 1, 98");
// let dateDiff = dateNow - birthday;

// console.log(dateDiff);
// console.log(dateDiff / 1000 / 60 / 60 / 24 / 365); //تايخ ميللادي

// console.log(dateNow);
// console.log(dateNow.getTime());
// console.log(dateNow.getDay());
// console.log(dateNow.getFullYear());
// console.log(dateNow.getMonth());
// console.log(dateNow.getDay());
// console.log(dateNow.getHours());
// console.log(dateNow.getMinutes());
// console.log(dateNow.getSeconds());

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // #161
/*
  Date And Time
  - setTime(Milliseconds)
  - setDate() => Day Of The Month [Negative And Positive]
  - setFullYear(year, month => Optional [0-11], day => Optional [1-31])
  - setMonth(Month [0-11], Day => Optional [1-31]) [Negative And Positive]
  - setHours(Hours [0-23], Minutes => Optional [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setMinutes(Minutes [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setSeconds(Seconds => [0-59], MS => Optional [0-999])
*/
// let dateNow = new Date();
// console.log(dateNow);

// console.log("#".repeat(66));

// // dateNow.setTime(0);
// // console.log(dateNow);

// // console.log("#".repeat(66));

// // dateNow.setTime(10000);
// // console.log(dateNow);

// // console.log("#".repeat(66));

// // dateNow.setDate(35);
// // console.log(dateNow);

// // dateNow.setFullYear(2023, 12);
// // console.log(dateNow);

// // dateNow.setMonth(11);
// // console.log(dateNow);

// dateNow.setMonth(11);
// console.log(dateNow);

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // #162

/*
  Date And Time

  new Date(timestamp)
  new Date(Date String)
  new Date(Numeric Values)

  Format
  - "may, 1 , 98"
  - "1/5/1998"
  - "1998-5-0" => ISO International Standard
  - "1998 5"
  - "1998"
  - "98"
  - 1998, 5, 1, 2, 10, 0
  - 1998, 5, 1
  - "1998-5-25T06:1:00Z"

  Date.parse("String") // Read Date From A String
*/

// console.log(Date.parse("may 1 98"));

// let date1 = new Date(0);
// console.log(date1);

// let date2 = new Date(893970000000);
// console.log(date2);

// let date3 = new Date("5-1-1998");
// console.log(date3);

// let date4 = new Date("1998-5");
// console.log(date4);

// let date5 = new Date("1998");
// console.log(date5);

// let date6 = new Date("98");
// console.log(date6);

// let date7 = new Date(1998, 5, 1, 2, 10, 0);
// console.log(date7);

// let date8 = new Date(1998, 5, 1);
// console.log(date8);

// let date9 = new Date("1998-05-01T06:10:00Z");
// console.log(date9);

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // #163
/*
  Date And Time
  - Track Operations Time

  Search
  - performance.now()
  - performance.mark()
*/

// Start Time
// let start = new Date();

// //Operation
// for (let i = 0; i < 10000; i++) {
//   // document.write(`<div>${i}</div>`);
//   let div = document.createElement("div");
//   div.appendChild(document.createTextNode(i));
//   document.body.appendChild(div);
// }
// // Time End
// let end = new Date();

// // Operation Duration
// let duration = end - start;

// console.log(duration);

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // #164
/*
  Generators
  - Generator Function Run Its Code When Required.
  - Generator Function Return Special Object [Generator Object]
  - Generators Are Iterable
*/

// function* generateNumbers() {
//   yield 1;
//   console.log("Hello After Yield");
//   yield 2;
//   yield 3;
//   yield 4;
// }

// let generator = generateNumbers();

// console.log(typeof generator);
// console.log(generator);
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// for (let value of generateNumbers()) {
//   console.log(value);
// }

// for (let value of generator) {
//   console.log(value);
// }
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // #165
/*
  Generators
  - Delegate Generator
*/

// function* generateNums() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// function* generateLetters() {
//   yield "A";
//   yield "B";
//   yield "C";
// }

// function* generateAll() {
//   yield* generateNums();
//   yield* generateLetters();
//   yield* [4, 5, 6];
// }

// let generator = generateAll();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// // console.log(generator.return());
// // console.log(generator.return("Z"));
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // #166
/*
  Generators
  - Generate Infinite Numbers
  - Use Return Inside Generators
*/
// function* generateNumbers() {
//   // yield 1;
//   // yield 2;
//   // // return "A",
//   // yield 3;
//   // yield 4;
//   let index = 0;

//   while (true) {
//     yield index++;
//   }
// }

// let generator = generateNumbers();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // #167

/*
  Modules
  - Import And Export
*/

// export let a = 10;
// export let arr = [1, 2, 3, 4];

// export function saySomething() {
//   return `saySomething`;
// }

// export { a , arr , saySomething};
//
//

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // #168
//
/*
  Modules
  - Export Alias
  - Named Export
  - Default Export
  - Import All
*/

// let a = 10;
// let arr = [1, 2, 3, 4];

// function saySomething() {
//   return `Something`;
// }

// export { a as myNumber, arr, saySomething };

// export default function sayHello() {
//   return `Hello`;
// }
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // #169

/*
  What Is JSON ?
  - JavaScript Object Notation
  - Format For Sharing Data Between Server And Client
  - JSON Derived From JavaScript
  - Alternative To XML
  - File Extension Is .json

  Why JSON ?
  - Easy To Use And Read
  - Used By Most Programming Languages And Its Frameworks
  - You Can Convert JSON Object To JS Object And Vice Versa

  JSON vs XML
  ===================================================
  = Text Based Format      = Markup Language        =
  = Lightweight            = Heavier                =
  = Does Not Use Tags      = Using Tags             =
  = Shorter                = Not Short              =
  = Can Use Arrays         = Cannot Use Arrays      =
  = Not Support Comments   = Support Comments       =
  ===================================================
*/
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // #170
/*
  JSON Syntax
  - Data Added Inside Curly Braces {  }
  - Data Added With Key : Value
  - Key Should Be String Wrapped In Double Quotes
  - Data Separated By Comma
  - Square Brackets [] For Arrays
  - Curly Braces {} For Objects

  Available Data Types
  - String
  - Number
  - Object
  - Array
  - Boolean Values
  - null
*/
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // #171
//
/*
  JSON
  - API Overview
  - Tools To Test API
  - Preview Github API
  https://api.github.com/users
*/

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // #172
/*
  JSON
  - JSON.parse => Convert Text Data To JS Object
  - JSON.stringify => Convert JS Object To JSON
*/

// // Get From Server
// const myJsonObjectFromServer = '{"Username": "Adel", "Age": 25}';
// console.log(typeof myJsonObjectFromServer);
// console.log(myJsonObjectFromServer);

// const myJsObject = JSON.parse(myJsonObjectFromServer);
// console.log(typeof myJsObject);
// console.log(myJsObject);

// // Update Data
// myJsObject["Username"] = "Adel";
// myJsObject["Age"] = 26;

// // Send To Server
// const myJsonObjectToServer = JSON.stringify(myJsObject);
// console.log(typeof myJsonObjectToServer);
// console.log(myJsonObjectToServer);

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // #173

/*
  To Understand Ajax, Fetch, Promises

  Asynchronous vs Synchronous Programming
  - Meaning

  Synchronous
  - Operations Runs in Sequence
  - Each Operation Must Wait For The Previous One To Complete
  - Story From Real Life

  Asynchronous
  - Operations Runs In Parallel
  - This Means That An Operation Can Occur while Another One Is Still Being Processed
  - Story From Real Life

  - Facebook As Example
  - Simulation

  Search
  - JavaScript Is A Single-Threaded ///////////////////// HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAm
  - Multi Threaded Languages
*/
// Synchronous

// console.log("1");
// console.log("2");
// window.alert("Operation");
// console.log("3");

// // Asynchronous
// console.log("1");
// console.log("2");
// setTimeout(() => console.log("Operation"), 3000);
// console.log("3");

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // #174

/*
  To Understand Ajax, Fetch, Promises

  Call Stack || Stack Trace
  -- JavaScript Engine Uses A Call Stack To Manage Execution Contexts
  -- Mechanism To Make The Interpreter Track Your Calls
  -- When Function Called It Added To The Stack
  -- When Function Executed It Removed From The Stack
  -- After Function Is Finished Executing The Interpreter Continue From The Last Point
  -- Work Using LIFO Principle => Last In First Out
  -- Code Execution Is Synchronous.
  -- Call Stack Detect Web API Methods And Leave It To The Browser To Handle It

  Web API
  -- Methods Available From The Environment => Browser
*/

// setTimeout(() => {
//   console.log("Web API");
// }, 1000);

// function one() {
//   console.log("One");
// }
// function two() {
//   one();
//   console.log("Two");
// }
// function three() {
//   two();
//   console.log("Three");
// }

// three();

// /*
// =================================
// console.log("One");
// =================================
// function one() {
//   console.log("One");
// }
// =================================
// function two() {
//   one();
//   console.log("Two");
// }
// =================================
// function three() {
//   two();
//   console.log("Three");
// }
// =================================
// */
// console.log("#####");
// console.log("One");
// console.log("Two");
// console.log("Three");
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // #175

/*
  To Understand Ajax, Fetch, Promises

  Event Loop + Callback Queue

  Story
  - JavaScript Is A Single Threaded Language "All Operations Executed in Single Thread"
  - Call Stack Track All Calls
  - Every Function Is Done Its Poped Out
  - When You Call Asynchronous Function It Sent To Browser API
  - Asynchronous Function Like Settimeout Start Its Own Thread
  - Browser API Act As A Second Thread
  - API Finish Waiting And Send Back The Function For Processing
  - Browser API Add The Callback To Callback Queue
  - Event Loop Wait For Call Stack To Be Empty
  - Event Loop Get Callback From Callback Queue And Add It To Call Stack
  - Callback Queue Follow FIFO "First In First Out" Rule
*/

// console.log("One");
// setTimeout(() => {
//   console.log("Three");
// }, 0);
// setTimeout(() => {
//   console.log("Four");
// }, 0);
// console.log("Two");

// setTimeout(() => {
//   console.log(myVar);
// }, 0);

// let myVar = 100;
// myVar += 100;
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // #176

/*
  AJAX
  - Asynchronous JavaScript And XML
  - Approach To Use Many Technologies Together [HTML, CSS, Js, DOM]
  - It Use "XMLHttpRequest" Object To Interact With The Server
  - You Can Fetch Data Or Send Data Without Page Refresh
  - Examples
  --- Youtube Studio
  --- Google Drive
  --- Upload Article Photo
  --- Form Check Name

  Test new XMLHttpRequest();
  Request And Response
  Status Code
*/

// let req = new XMLHttpRequest();
// console.log(req);
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // #177

/*
  Ajax
  - Ready State => Status Of The Request
  [0] Request Not Initialized
  [1] Server Connection Established
  [2] Request Received
  [3] Processing Request
  [4] Request Is Finished And Response Is Ready
  - Status
  [200] Response Is Successful
  [404] Not Found
*/

// let myRequest = new XMLHttpRequest();
// myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
// myRequest.send();
// console.log(myRequest);

// myRequest.onreadystatechange = function () {
//   // console.log(myRequest.readyState);
//   // console.log(myRequest.status);
//   if (this.readyState === 4 && this.status === 200) {
//     console.log(this.responseText);
//   }
// };
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // #178
//
/*
  Ajax
  Loop On Data

  Search
  - Cross Origin API [CORS]   ???????????????????????????????????????????????????????????????///
  - API Authentication ???????????????????????????????????????????
*/

// let myRequest = new XMLHttpRequest();
// myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
// myRequest.send();
// myRequest.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     // console.log(this.responseText);
//     let jsData = JSON.parse(this.responseText);
//     // console.log(jsData);
//     for (let i = 0; i < jsData.length; i++) {
//       let div = document.createElement("div");
//       let repoName = document.createTextNode(jsData[i].full_name);
//       div.appendChild(repoName);
//       document.body.appendChild(div);
//     }
//   }
// };
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // #179

/*
  To Understand Ajax, Fetch, Promises

  Pyramid Of Doom || Callback Hell

  - What Is Callback
  - Callback Hell Example

  What Is Callback
  - A Function That Is Passed Into Another One As An Argument To Be Executed Later
  - Function To Handle Photos
  --- [1] Download Photo From URL
  --- [2] Resize Photo
  --- [3] Add Logo To The Photo
  --- [4] Show The Photo In Website
*/ //////////////////////////////////////////// callback-hell

// function makeItRed(e) {
//   e.target.style.color = "red";
// }

// let p = document.querySelector(".test");
// p.addEventListener("click", makeItRed);

// function iamACallback() {
//   console.log("Iam A Callback Function");
// }

// setTimeout(iamACallback, 2000);

// setTimeout(() => {
//   console.log("Download Photo From URL");
//   setTimeout(() => {
//     console.log("Resize Photo");
//     setTimeout(() => {
//       console.log("Add Logo To The Photo");
//       setTimeout(() => {
//         console.log("Show The Photo In Website");
//       }, 1000);
//     }, 2000);
//   }, 3000);
// }, 4000);

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //   #180 promise

//
/*
Promise Intro And Syntax
- Promise In JavaScript Is Like Promise In Real Life
- Promise Is Something That Will Happen In The Future
- Promise Avoid Callback Hell
- Promise Is The Object That Represent The Status Of An Asynchronous Operation And Its Resulting Value

- Promise Status
--- Pending: Initial State
--- Fulfilled: Completed Successfully
--- Rejected: Failed

Story
- Once A Promise Has Been Called, It Will Start In A Pending State
- The Created Promise Will Eventually End In A Resolved State Or In A Rejected State
- Calling The Callback Functions (Passed To Then And Catch) Upon Finishing.

- Then
--- Takes 2 Optional Arguments [Callback For Success Or Failure]
*/

// const myPromise = new Promise((resolveFinction, rejectFunction) => {
//   let connect = false;
//   if (connect) {
//     resolveFinction("Connection Esttablished");
//   } else {
//     rejectFunction(Error("Fonnection Filed"));
//   }
// }).then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectFunction) => console.log(`Bad ${rejectFunction}`)
// );

// console.log(myPromise);

// const myPromise = new Promise((resolveFinction, rejectFunction) => {
//   let connect = true;
//   if (connect) {
//     resolveFinction("Connection Esttablished");
//   } else {
//     rejectFunction(Error("Fonnection Filed"));
//   }
// });

// console.log(myPromise);

// myPromise.then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectFunction) => console.log(`Bad ${rejectFunction}`)
// );

// myPromise.then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectFunction) => console.log(`Bad ${rejectFunction}`)
// );

// myPromise.then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectFunction) => console.log(`Bad ${rejectFunction}`)
// );
//////////////////////////////
// const myPromise = new Promise((resolveFinction, rejectFunction) => {
//   let connect = true;
//   if (connect) {
//     resolveFinction("Connection Esttablished");
//   } else {
//     rejectFunction(Error("Fonnection Filed"));
//   }
// });

// console.log(myPromise);

// let adel = (resolveValue) => console.log(`Good ${resolveValue}`);
// let dola = (rejectFunction) => console.log(`Bad ${rejectFunction}`)

// myPromise.then(adel, dola );

//
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // #181

// /*
//   Promise Training

//   We Will Go To The Meeting, Promise Me That We Will Find The 4 Employees
//   .then(We Will Choose Two People)
//   .then(We Will Test Them Then Get One Of Them)
//   .catch(No One Came)

//   Then    => Promise Is Successfull Use The Resolved Data
//   Catch   => Promise Is Failed, Catch The Error
//   Finally => Promise Successfull Or Failed Finally Do Something
// */

// const myPromise = new Promise((resolveFunction, rejectFunction) => {
//   let employees = [];
//   if (employees.length === 4) {
//     resolveFunction(employees);
//   } else {
//     rejectFunction(Error("Number Of Employees Is Not 4"));
//   }
// });

// // myPromise.then((resolveValue) => {
// //   resolveValue.length = 2;
// //   console.log(resolveValue);
// //   // return resolveValue ;
// // });

// // myPromise.then((resolveValue) => {
// //   resolveValue.length = 1;
// //   return resolveValue;
// // });

// // myPromise.then((resolveValue) => {
// //   console.log(`The Choosen Emplyee Is ${resolveValue}`);
// // });

// myPromise
//   .then((resolveValue) => {
//     resolveValue.length = 2;
//     console.log(resolveValue);
//     // return resolveValue ;
//   })
//   .then((resolveValue) => {
//     resolveValue.length = 1;
//     return resolveValue;
//   })
//   .then((resolveValue) => {
//     console.log(`The Choosen Emplyee Is ${resolveValue}`);
//   })
//   .catch((dolaaAdel) => console.log(dolaaAdel)).finally(
//     console.log("The Operation Is Done")
//   );

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // #182

/*
  Promise And XHR
*/
// const getData = (apiLink) => {
//   return new Promise((resolve, reject) => {
//     let myRequest = new XMLHttpRequest();
//     myRequest.onload = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         resolve(JSON.parse(this.responseText));
//       } else {
//         reject(Error("No Data Found"));
//       }
//     };

//     myRequest.open("GET", apiLink);
//     myRequest.send();
//   });
// };

// getData("https://api.github.com/users/elzerowebschool/repos")
//   .then((result) => {
//     result.length = 10;
//     return result;
//   })
//   .then((result) => console.log(result[0].name))
//   .catch((rej) => console.log(rej));

// //"https://api.github.com/users/elzerowebschool/repos"

// // let jsData = JSON.parse(this.responseText);
// //         for (let i = 0; i < jsData.length; i++) {
// //           let div = document.createElement("div");
// //           let repoName = document.createTextNode(jsData[i].name);
// //           div.appendChild(repoName);
// //           document.body.appendChild(div);
// //         }
// //

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // #183
//
/*
  Fetch API
  - Return A Representation Of the Entire HTTP Response
*/

// fetch("https://api.github.com/users/elzerowebschool/repos")
//   .then((result) => {
//     console.log(result);
//     let myData = result.json();
//     console.log(myData);
//     return myData;
//   })
//   .then((myData) => {
//     myData.length = 10;
//     return myData;
//   })
//   .then((myData) => {
//     console.log(myData[0].name);
//   });

// const getData = (apiLink) => {
//   return new Promise((resolve, reject) => {
//     let myRequest = new XMLHttpRequest();
//     myRequest.onload = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         resolve(JSON.parse(this.responseText));
//       } else {
//         reject(Error("No Data Found"));
//       }
//     };

//     myRequest.open("GET", apiLink);
//     myRequest.send();
//   });
// };

// getData("https://api.github.com/users/elzerowebschool/repos").then((result) => {
//   result.length = 10;
//   return result;
// });

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // #184

/*
  Promise
  - All
  - All Settled
  - Race
*/

// const myFirstPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Iam The First Promis");
//   }, 5000);
// });

// const myTwoPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej("Iam The Two Promis");
//   }, 1000);
// });

// const myThrePromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Iam The Three Promis");
//   }, 2000);
// });

// // Promise.all([myFirstPromise, myTwoPromise, myThrePromise]).then(
// //   (resolvedValues) => console.log(resolvedValues),
// //   (rejactedValues) => console.log(`Rejected ${rejactedValues}`)
// // );

// // Promise.allSettled([myFirstPromise, myTwoPromise, myThrePromise]).then(
// //   (resolvedValues) => console.log(resolvedValues),
// //   (rejactedValues) => console.log(`Rejected ${rejactedValues}`)
// // );

// Promise.race([myFirstPromise, myTwoPromise, myThrePromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejactedValues) => console.log(`Rejected ${rejactedValues}`)
// );
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // #185
//
/*
  Async
  - Async Before Function Mean This Function Return A Promise
  - Async And Await Help In Creating Asynchronous Promise Behavior With Cleaner Style
*/
//

// function getData() {
//   return new Promise((res, rej) => {
//     let users = [""];
//     if (users.length > 0) {
//       res("Usres Found");
//     } else {
//       rej(Error("No Users Found"));
//     }
//   });
// }

// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log("Rejected " + rejectedValue)
// );

//////////////////////////////////////

// function getData() {
//   let users = [""];
//   if (users.length > 0) {
//     return Promise.resolve("Users Found");
//   } else {
//     return Promise.reject("No Users Found");
//   }
// }

// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log("Rejected " + rejectedValue)
// );
//////////////////////////////////////

// async function getData() {
//   let users = [];
//   if (users.length > 0) {
//     return "Users Found";
//   } else {
//     throw new Error("No Users Found");
//   }
// }

// console.log(getData());
// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log("Rejected " + rejectedValue)
// );
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // #186
/*
  Await
  - Await Works Only Inside Asnyc Functions
  - Await Make JavaScript Wait For The Promise Result
  - Await Is More Elegant Syntax Of Getting Promise Result
*/

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Tam The Good Promise");
//     // reject(Error("Tam The Bad Promise"));
//   }, 3000);
// });

// async function readData() {
//   console.log("Before Promise");
//   // myPromise.then((resolvedValue) => console.log(resolvedValue));
//   // console.log(await myPromise.catch((err) => err));
//   console.log(await myPromise.catch((err) => err));
//   console.log("After Promise");
// }

// readData();
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // #187
//
/*
  Async & Await With Try, Catch, Finally
*/

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("Iam The Good Promise");
//     reject("Iam The Bad Promise");
//   }, 3000);
// });

// async function readData() {
//   console.log("Before Promise");

//   try {
//     console.log(await myPromise);
//   } catch (reason) {
//     console.log(`Reason: ${reason}`);
//   } finally {
//     console.log("After Promise");
//   }
// }

// readData();

// async function fetchData() {
//   console.log("Before Fetch");

//   try {
//     let myData = await fetch(
//       "https://api.github.com/users/elzerowebschool/repos"
//     );
//     console.log(await myData.json());
//   } catch (reason) {
//     console.log(`Reason: ${reason}`);
//   } finally {
//     console.log("After Fetch");
//   }
// }

// fetchData();

//
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // #188
//
/*
  The End
  - Other Information => Practice + Tutorials
  - Problem Solving
  - Search In Lessons
  - Advanced Books
*/
