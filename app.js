hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
    hamburger.classList.toggle("active");
}
function startCounter( step = 20) {
    const targetNumber1=20;
    const counterElement1 = document.getElementById('count_1');
    const startNumber1 = 0;
    const totalSteps1 = 20;
    const increment1 = 1;

    let currentNumber1 = startNumber1;
    let currentStep1 = 0;

    const counterInterval1 = setInterval(() => {
      currentNumber1 += increment1;
      currentStep1++;

      if (currentStep1 >= totalSteps1) {
        clearInterval(counterInterval1);
        currentNumber1= targetNumber1;
      }

      counterElement1.innerHTML = currentNumber1+"+"; // Update the counter display
    }, step);
    const targetNumber2=15;
    const counterElement2 = document.getElementById('count_2');
    const startNumber2= 0;
    const totalSteps2 = 20;
    const increment2= 1;

    let currentNumber2 = startNumber2;
    let currentStep2 = 0;

    const counterInterval2 = setInterval(() => {
      currentNumber2 += increment2;
      currentStep2++;

      if (currentStep2 >= totalSteps2) {
        clearInterval(counterInterval2);
        currentNumber2= targetNumber2;
      }

      counterElement2.innerHTML = currentNumber2+"+"; // Update the counter display
    }, step);
  

 
};








