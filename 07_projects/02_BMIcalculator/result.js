const form = document.querySelector("form");
// console.log(form);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  if (height === "" || height < 0 || isNaN(height)) {
    console.log("Please provide a valid height");
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    console.log("Please provide a valid weight");
  } else {
    // const bmi = ((weight * 10000) / (height * height)).toFixed(2);

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    let remarks = "";

    if (bmi < 18.6) {
      remarks = "Under Weight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      remarks = "Normal Weight";
    } else {
      remarks = "Overweight";
    }

    result.innerHTML = `<span>Test Result : BMI = ${bmi} , ${remarks} </span>`;
  }
});
