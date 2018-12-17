function myFunction(){
    var firstside = document.getElementById("sides1").value;
    alert(firstside)
}
function myFunction(){
    var secondside = document.getElementById("sides2").value;
    alert(secondside)
}
function myFunction(){
    var thirdSide = document.getElementById("sides3").value;
    alert(thirdSide)
}
var triangle=parseInt[firstSides, secondSides, thirdSides];


    if(firstSide===secondSide && firstSide===thirdSide){
        alert("triangle is equitateral");
    }
     else if(firstSides===secondSides || firstSides===thirdSides || secondSides===thirdSides){
        alert("triangle is scalene");
     }
     else if(firstSides+secondSides>thirdSides || firstSides+thirdSides>secondsides ||(secondSides+thirdSides>firstSides){
        alert("triangle is isoscele")
    }
  
