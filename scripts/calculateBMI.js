function calculateBMI(event) {
    event.preventDefault();

    // Getting Weight and Height
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value / 100;

    // Calculating BMI
    const userBMI = weight / (height * height);
    const userBMIFixed = userBMI.toFixed(2);

    // BMI Result
    document.getElementById('resultBMI').innerText = userBMIFixed;
    const backgroundStyle = document.getElementById('backgroundStyle');
    const category = document.getElementById('category');

    // Showing Result
    if (userBMIFixed < 18.5) {
        backgroundStyle.removeAttribute('hidden');
        category.innerText = 'Underweight';
        backgroundStyle.style.backgroundColor = '#009DAC';
    }
    else if (userBMIFixed >= 18.5 && userBMIFixed <= 24.9) {
        backgroundStyle.removeAttribute('hidden');
        category.innerText = 'Normal weight';
        backgroundStyle.style.backgroundColor = '#7DBD4C';
    }
    else if (userBMIFixed >= 25 && userBMIFixed <= 29.9) {
        backgroundStyle.removeAttribute('hidden');
        category.innerText = 'Overweight';
        backgroundStyle.style.backgroundColor = '#FAAE2A';
    }
    else if (userBMIFixed >= 30 && userBMIFixed <= 34.9) {
        backgroundStyle.removeAttribute('hidden');
        category.innerText = 'Obesity';
        backgroundStyle.style.backgroundColor = '#EB853C';
    }
    else {
        backgroundStyle.removeAttribute('hidden');
        category.innerText = 'Extreme Obesity';
        backgroundStyle.style.backgroundColor = '#E5433A';
    }

}