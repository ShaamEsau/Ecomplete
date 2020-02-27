/* Creates a JQuery functions that hides and shows specified tag */
$(document).ready(function() {
    $("#jacketBox").hide();
});

$(document).ready(function() {
    $("#teeBox").hide();
});


$("#jacketFilter").click(function() {
    $("#teeBox").hide();
    $("#jacketBox").show();
});


$("#teeFilter").click(function() {
    $("#jacketBox").hide();
    $("#teeBox").show();
})

/* Creates an object with key-value pairs */
var clothePrices = { "FunnelJacket": 39, "MeshJacket": 50, "WorkoutJacket": 19, "ZipJacket": 50, "ShortSleeve": 10,"YogaSleeveless": 15, "YogaFit": 10, "PlainTee": 5  };

/* Saves object in a JSON readable object */
localStorage.setItem("Clothes", JSON.stringify(clothePrices));

/* Gets the value from the container and sets it as float */
var totPrice = parseFloat(localStorage.getItem("Total"));

if (!totPrice) {
    /* Creates a empty variable and array */
    var totPrice = 0;
    var cart = [];
    localStorage.setItem("Cart", JSON.stringify(cart));
} else {
    cart = JSON.parse(localStorage.getItem("Cart"));
}

localStorage.setItem("Total", totPrice);

function addToCart(n) {
    clotheList = JSON.parse(localStorage.getItem("Clothes"));
    totPrice = parseFloat(localStorage.getItem("Total"));
    cart = JSON.parse(localStorage.getItem("Cart"));

    var whiteSel = document.getElementById("colWhite");
    var white = document.getElementById("colWhite").value;
    var greySel = document.getElementById("colGrey");
    var grey = document.getElementById("colGrey").value;
    var blackSel = document.getElementById("colBlack");
    var black = document.getElementById("colBlack").value;

    var smallSel = document.getElementById("small");
    var small = document.getElementById("small").value;
    var mediumSel = document.getElementById("medium");
    var medium = document.getElementById("medium").value;
    var largeSel = document.getElementById("large");
    var large = document.getElementById("large").value;

    /* Inserts element into the array */
    cart.push(n);

    if(whiteSel.checked){
    	cart.push(white);
    }else if (greySel.checked) {
    	cart.push(grey);
    }else if (blackSel.checked) {
    	cart.push(black);
    }else{
    	cart.push(white);
    	alert("Default white has been added");
    }

    if(smallSel.checked){
    	
    	cart.push(small);
    }else if (mediumSel.checked) {
    	cart.push(medium);
    }else if (largeSel.checked) {
    	cart.push(large);
    }else{
    	cart.push(medium);
    	alert("Default medium has been added");
    }

 	var clotheItem = cart[1];

    localStorage.setItem("Cart", JSON.stringify(cart));

    /* Sets variable with a new incremented value */
    localStorage.setItem("Total", totPrice += clotheList[n]);
    /* Generates a pop up with text  */
    alert("The total comes to " + "$" + totPrice);
}

