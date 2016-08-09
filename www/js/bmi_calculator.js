/*   ./src/bmi_calculator.js
     Is called by ./src/person.js
*/


function BMICalculator() {
}


BMICalculator.prototype.find_bmi_of = function(obj) {
  var height = person.height;
  var weight = person.weight;
  var toggle = person.toggle;
  console.log("BMICalculator.prototype.find_bmi_of: Person obj input vals: weight: " + weight + ", height: " + height + ", toggle: " + toggle);

  if (weight > 0 && height > 0 ) {
    var calc_height = 0;
    var toggle_factor = 0;
    var height_divisor = 0;

    // the spec is looking for the input select val to be Boolean type
    if(toggle === "true")
      toggle = true;
    else if ( toggle === "false" )
      toggle = false;

    if ( toggle === true ) {
      calc_height = height;
      //calc_height = height * 12;  //use this when converting from foot to inches
      toggle_factor = 703;
      height_divisor = 1;
    }
    if ( toggle === false ) {
      calc_height = height;
      toggle_factor = 1;
      height_divisor = 100;
    }
    console.log("Incoming calculation values: weight: " + weight + " toggle_factor: " + toggle_factor + " calc_height: " + calc_height + " height_divisor: " + height_divisor );
    var finalBmi = weight * toggle_factor / Math.pow((calc_height/height_divisor), 2);
    console.log("finalBmi before parseFloat: " + finalBmi);
    obj.bmiValue = parseFloat(finalBmi.toFixed(2));
    console.log("parseFloat(finalBmi): " + finalBmi);
    console.log("obj.bmiValue: " + obj.bmiValue);
    setBMIMessage(obj);
    console.log("obj.bmiMessage: " + obj.bmiMessage);
  }
};


function setBMIMessage (obj, value) {
  if (obj.bmiValue < 18.5) {
    obj.bmiMessage = "Underweight";
  }
  if (obj.bmiValue >= 18.5 && obj.bmiValue < 25) {
    obj.bmiMessage = "Normal";
  }
  if (obj.bmiValue >= 25 && obj.bmiValue < 30) {
    obj.bmiMessage = "Overweight";
  }
  if (obj.bmiValue >= 30) {
    obj.bmiMessage = "Obese";
  }
}


/*function setBMIMessage (obj, value) {
  switch (obj.value) {
    case (obj.value < 18.5):
      obj.bmiMessage = "Underweight";
      break;
    case (obj.value >= 18.5 && obj.value < 25):
      obj.bmiMessage = "Normal";
      break;
    case (obj.value >= 25 && obj.value < 30):
      obj.bmiMessage = "Overweight";
      break;
    case (obj.value >= 30):
      obj.bmiMessage = "Obese";
      break;
    default:
      obj.bmiMessage = "Invalid BMI value.";
  }
}*/
