document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get values from form
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
  
    // Calculate BMI
    let bmi = calculateBMI(height, weight);
  
    // Display result
    displayBMIResult(bmi);
  });
  
  function calculateBMI(height, weight) {
    // BMI formula: weight (kg) / (height (m) * height (m))
    let heightMeters = height / 100; // convert cm to meters
    return (weight / (heightMeters * heightMeters)).toFixed(1);
  }
  
  function displayBMIResult(bmi) {
    let bmiCategory = getBMICategory(bmi);
    let bmiResultElement = document.getElementById('bmiResult');
    bmiResultElement.innerHTML = `Your BMI is ${bmi}. This is considered ${bmiCategory}.`;
  }
  
  function getBMICategory(bmi) {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
      return 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  }
  