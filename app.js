document.getElementById('date').innerHTML = Date();

function example() {

    let x = 'in the morning cloudy, and in the afternoon sunny. But at night is was changing';
    document.getElementById('demo').innerHTML = `Today the weather is ${x}`;
};

const container = document.querySelector('.container-img-weather');

const img = document.createElement('img');
img.src = '/img.png';
img.style.width = '100%'
img.style.height = '100%'
container.appendChild(img);


// Cards

const titleElement1 = document.querySelectorAll('.card-body .card-title')[0];
titleElement1.textContent = 'Winter weather';

const titleElement2 = document.querySelectorAll('.card-body .card-title')[1];
titleElement2.textContent = 'El niño in Argentina';

const titleElement3 = document.querySelectorAll('.card-body .card-title')[2];
titleElement3.textContent = 'Climate Change';


// Added information

const element = document.getElementById('example');
element.innerHTML = '<strong>Weather conditions this week</strong>';
element.style.padding = '5rem';
element.style.color = '#212121';
console.log(element);


