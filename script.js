// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll animation
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight / 5 * 4;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});

// BMI Calculation
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // convert cm to meters
    if (!weight || !height) {
        alert('Please enter valid values.');
        return;
    }
    const bmi = (weight / (height * height)).toFixed(2);
    let status = '';
    if (bmi < 18.5) status = 'Underweight';
    else if (bmi < 24.9) status = 'Normal';
    else if (bmi < 29.9) status = 'Overweight';
    else status = 'Obese';
    document.getElementById('bmi-result').textContent = `Your BMI is ${bmi} (${status}).`;
}
