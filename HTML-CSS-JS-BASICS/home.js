

function handleMultiplication () {
    //alert("this is my custom function");
    var value1 =  document.getElementById('num1').value;
    var value2 =  document.getElementById('num2').value;
    var userAnswer =  document.getElementById('sum').value;

    var product =  Number(value1) * Number(value2); 

    if(Number(userAnswer)  === product ){
        alert('Correct Answer');
    } else {
        alert('Wrong Answer!!!')
    }
    
  }


function hideShowSections() {

   var yesRadioBtnSelected =  document.getElementById('yes').checked; //Determine if the yes radio btn was selected
   var redContainer =  document.getElementById('red-container'); //find the red container
   var greenContainer =  document.getElementById('green-container'); // find the green container

      if (yesRadioBtnSelected) {
           greenContainer.style.display = "inline-block"; //show green
           redContainer.style.display = "none"; //hide red
      } else {
           redContainer.style.display = "inline-block"; //show red
           greenContainer.style.display = "none"; //hide green
      }
  }