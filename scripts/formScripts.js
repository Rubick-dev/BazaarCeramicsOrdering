/* This function stores the values of price and quantity into a variable, then runs
a check to see if the numbers are valid. Upon valid numbers being identified it 
then runs a calculations and insserts the result in the total price column */ 
function sum(){
  // Storing variables
  let val1 = document.getElementById('quantity').value;
  let val2 = document.getElementById('price').value;
   
  // Conducting the validity of the quantity value entered by the user and notifying if errors
  if(val1 < 1 || val1===null || isNaN(val1)){
    alert("Please ensure you enter a numeric value greater than zero into the quantity field");
  }

  // Checks the validity of price, if it is invlaid, it resetsback to price and performs the calculation 
  else if(val2 < 1 || val2===null || isNaN(val2)){
    val2 = 135;
    let result = parseFloat(val1)*parseFloat(val2);
    document.getElementById('price').value=val2;
    document.getElementById('totalPrice').value=result;
    }

  // if varibables are appropriate values, performs the calc and inserts the result
  else{
    let result = parseFloat(val1)*parseFloat(val2);
    document.getElementById('totalPrice').value=result;
  }
  return;
}

function clearValues(){
  document.getElementById('quantity').value="";
  document.getElementById('totalPrice').value="";
return;
}

function submitForm(){

}
