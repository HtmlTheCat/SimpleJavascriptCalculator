
// 1. Number();  converts ta sting entered into the input into numb.
// 2. doc.getElmt  locates the input field based on its #id.
// 3. .value ();  returns the value that the  user has types into the input field  
// 4.that value is then stored in the var key1 and key2  so they can be manipulated an dreused 
//in the functions 


function addNum() {

    var key1 = Number(document.getElementById("number1").value);
    var key2 = Number(document.getElementById("number2").value);
    var answ = document.getElementById("results");

    answ.value = key1 + key2;
}
//Subtract
function subNum() {

    var key1 = Number(document.getElementById("number1").value);
    var key2 = Number(document.getElementById("number2").value);
    var answ = document.getElementById("results");
    answ.value = key1 - key2;
}
//Multiply
function multNum() {

    var key1 = Number(document.getElementById("number1").value);
    var key2 = Number(document.getElementById("number2").value);
    var answ = document.getElementById("results");
    answ.value = key1 * key2;
}
//Divide
function divdNum() {

    var key1 = Number(document.getElementById("number1").value);
    var key2 = Number(document.getElementById("number2").value);
    var answ = document.getElementById("results");
    answ.value = key1 / key2;

}
//Clear  
function clrNum() {

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    document.getElementById("results").value = "";

}
