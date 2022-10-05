let user_product;
let user_number;
let user_email;

let x;
let y;
let z;


document.getElementById("button").onclick = function() {
    user_product = document.getElementById("text").value;
    user_number = document.getElementById("number").value;
    user_email = document.getElementById("email").value;


    document.getElementById("result").innerHTML = user_product + " " + "choose" + user_number + " and " + " " + user_email;
}

document.getElementById("numberButton").onclick = function() {

    x = Math.floor(Math.random() * 100) + 1;
    y = Math.floor(Math.random() * 100) + 1;
    z = Math.floor(Math.random() * 100) + 1;

    document.getElementById("one").innerHTML = x;
    document.getElementById("two").innerHTML = y;
    document.getElementById("three").innerHTML = z;
}