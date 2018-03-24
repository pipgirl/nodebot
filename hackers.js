//document.write("Welcome Hacker!");

var hacker = 
{ firstName : "Kelsey", 
lastName : "Huebner", 
age : 28, 
eyeColor : "hazel" }; 

//Hacker Profiles
var hackerName = hacker["firstName"] ; //”Kelsey”
var hackerAge = hacker["age"]; //28

var colors = ['blue', 'red', 'green', 'yellow', 'pink'];
var myFavColor = colors[2];

displayHacker(hackerName, hacker["age"]);

function favColor(){
    //get color from our input tag
    var newColor = document.getElementById("inputColor").value;
    document.getElementById("displayColor").style.backgroundColor = newColor;
    
    //use indexOf to check if color exists and then push if it doesn’t.
    if (colors.indexOf(newColor) === -1 ) {
        colors.push(newColor)
    };
}

function displayHacker(name, age) {
    var middleName = "Elaine";
    document.getElementById("info").innerHTML = "Hacker name: " + hackerName + " " + middleName+  ". Age: " + age + ". "  ; 
}

try {
    adddlert("Welcome hacker!");
}
catch(err) {
    document.getElementById("oops").innerHTML = err.message;
}
