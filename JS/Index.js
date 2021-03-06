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


    /* Inserts element into the array */
    cart.push("white");
    cart.push(n);
    cart.push("medium");

    localStorage.setItem("Cart", JSON.stringify(cart));

    /* Sets variable with a new incremented value */
    localStorage.setItem("Total", totPrice += clotheList[n]);
    /* Generates a pop up with text  */
    alert("The total comes to " + "$" + totPrice);
}

