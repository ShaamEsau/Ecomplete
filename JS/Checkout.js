/* SHIPPING DETAILS CODE */
    /* Sets a variable from the data stored locally */
    totPrice = parseFloat(localStorage.getItem("Total"));
    var shipCost = document.getElementById("shipCost");
    var subtotal = document.getElementById("subtotal");
    subtotal.innerHTML = "$" + totPrice

function shipSav() {
    /* Creates variable from specified ID */
    var collect = document.getElementById("radCol");
    var delivery = document.getElementById("radDev");

    var devList = [];
    var textEmail = document.getElementById("email").value;
    var textFName = document.getElementById("fName").value;
    var textLName = document.getElementById("lName").value;
    var textStrAdd1 = document.getElementById("strAdd1").value;
    var textStrAdd2 = document.getElementById("strAdd2").value;
    var textCity = document.getElementById("city").value;
    var textZipOrPost = document.getElementById("zipOrPost").value;

    var choose = document.getElementById("stateOrProv").value;

    devList.push(textEmail, textFName, textLName, textStrAdd1, textStrAdd2, textCity, choose, textZipOrPost);

    localStorage.setItem("Location", JSON.stringify(devList));
    console.log(devList)

    localStorage.setItem("Total", totPrice += 40);
    localStorage.setItem("Shipping", 40);
    var shipping = parseFloat(localStorage.getItem("Shipping"));
    shipCost.innerHTML = "$" + shipping
    /* Refreshes page */
    location.reload();
    alert("Your shipping choice has been save. The delivery cost is $40 and brings your total to $" + totPrice);
}

/* CHECKOUT DETAILS */
var local = localStorage.getItem("Location");
var cart = JSON.parse(localStorage.getItem("Cart"));
var cartLen = cart.length;
var orderTot = document.getElementById("orderTot");
orderTot.innerHTML = "$" + totPrice


function Purchase() {

    var refNum = (Math.random() * 0xffffff).toString(16);
    if (cartLen != 0 && local != "null") {

        /* Sets containers as empty */
        localStorage.setItem("Total", 0);
        localStorage.setItem("Cart", JSON.stringify([]));
        localStorage.setItem("Location", null);
        localStorage.setItem("Shipping", 0);


        alert("Total is $" + totPrice + ". Your purchase has been successfully made! Enjoy the game(s)!!!!!!!!!!! Your Reference Number is : " + refNum);

    } else {

        alert("Please make sure cart is not empty and shipping details have been filled out");
    }

    /* Refreshes page with new information */
    location.reload();
}