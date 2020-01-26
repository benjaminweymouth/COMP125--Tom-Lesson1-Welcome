/* Custom JS goes here */

//IIFE - Immediately Invoked Function Expression
// anonymous self excecuting function
(function(){

 function Start() {
   console.log("App started!");
 }
 window.onload=Start;
 //window loads and then the start function is called. 
})();