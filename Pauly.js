function myFunction(){
    var firstSide = document.getElementById("sides1").value;
    var secondSide =document.getElementById("sides2").value;
    var thirdSide = document.getElementById("sides3").value;
    var triangle=[firstSide, secondSide,thirdSide];
    console.log(triangle);
//var triangle=parseInt[firstSides, secondSides, thirdSides];
 if(firstSide===secondSide && firstSide===thirdSide ){
        alert("triangle is equitateral");
    }
     else if(firstSide!==secondSide && firstSide!==thirdSide && secondSides!==thirdSide){
        alert("triangle is scalene");
     }
     else if(firstSide===secondSide || firstSide===secondside ||secondSide+thirdSide){
        alert("triangle is isoscele");
    }
      else if(firstSide+secondSide<=thirdSide || firstSide+thirdSide<=secondSide || secondSide+thirdSide<=firstSide){
          alert("not a triangle");
    }
     } 
