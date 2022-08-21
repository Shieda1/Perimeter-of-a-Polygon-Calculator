// https://calculator.swiftutors.com/perimeter-of-a-polygon-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const perimeterofthePolygonRadio = document.getElementById('perimeterofthePolygonRadio');
const numberofSidesofPolygonRadio = document.getElementById('numberofSidesofPolygonRadio');
const lengthofAnySideofPolygonRadio = document.getElementById('lengthofAnySideofPolygonRadio');

let perimeterofthePolygon;
let numberofSidesofPolygon = v1;
let lengthofAnySideofPolygon = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

perimeterofthePolygonRadio.addEventListener('click', function() {
  variable1.textContent = 'Number of Sides of Polygon';
  variable2.textContent = 'Length of Any Side of Polygon';
  numberofSidesofPolygon = v1;
  lengthofAnySideofPolygon = v2;
  result.textContent = '';
});

numberofSidesofPolygonRadio.addEventListener('click', function() {
  variable1.textContent = 'Perimeter of the Polygon';
  variable2.textContent = 'Length of Any Side of Polygon';
  perimeterofthePolygon = v1;
  lengthofAnySideofPolygon = v2;
  result.textContent = '';
});

lengthofAnySideofPolygonRadio.addEventListener('click', function() {
  variable1.textContent = 'Perimeter of the Polygon';
  variable2.textContent = 'Number of Sides of Polygon';
  perimeterofthePolygon = v1;
  numberofSidesofPolygon = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(perimeterofthePolygonRadio.checked)
    result.textContent = `Perimeter of the Polygon = ${computePerimeterofthePolygon().toFixed(2)}`;

  else if(numberofSidesofPolygonRadio.checked)
    result.textContent = `Number of Sides of Polygon = ${computeNumberofSidesofPolygon().toFixed(2)}`;

  else if(lengthofAnySideofPolygonRadio.checked)
    result.textContent = `Length of Any Side of Polygon = ${computeLengthofAnySideofPolygon().toFixed(2)}`;
})

// calculation

function computePerimeterofthePolygon() {
  return Number(numberofSidesofPolygon.value) * Number(lengthofAnySideofPolygon.value);
}

function computeNumberofSidesofPolygon() {
  return Number(perimeterofthePolygon.value) / Number(lengthofAnySideofPolygon.value);
}

function computeLengthofAnySideofPolygon() {
  return Number(perimeterofthePolygon.value) / Number(numberofSidesofPolygon.value);
}