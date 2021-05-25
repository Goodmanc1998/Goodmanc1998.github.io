var randomStrings = [
    "Hello There",
    "Welcome",
    "Error : Welcome Not Found",
    "Behold, my website",
    "Hello World",
    "Hello & Welcome"

];


function returnRandomTitle(){

    randomIndex = Math.ceil((Math.random()*randomStrings.length-1));
    newText = randomStrings[randomIndex];

    document.getElementById("rdmTitle").innerHTML = newText;
}