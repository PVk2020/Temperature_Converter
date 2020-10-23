// Getting the elements

//document.getElementsByTagName
//document.getElementById
//document.getElementsByClassName
//document.querySelectorAll
//document.getElementsByName

//Modify these elements
//element.innerHTML
//element.innerText
//element.attribute = value //id name value placeholder width src
//element.setAttribute('custom attr name', 'value');
//element.style.property = value
//element.classList.add('class');

//Events

//bytes  ->  Dropdown input
//GB     => Dropdown output

document.getElementById("cel").setAttribute("value", 10);
const getTemp = () => {
  let temp = document.getElementById("cel").value;
  temp = parseFloat(temp);

  if (isNaN(temp)) {
    //console.log("Not a valid input");
alert("Not a valid input");
    return -1;
  }

  return temp;
};

const printOutput = (format, result) => {
  let resultText = `The temperature in ${format} is ${result}`;
  document.getElementById("result").innerHTML = resultText;
};

const convertToCelsius = () => {
  let temp = getTemp();
  if (temp === -1) return;
  let result = +(((temp - 32) * 5) / 9).toFixed(1);

  printOutput("Celsius", result);
};

const convertToFahrenheit = () => {
  let temp = getTemp();
  if (temp === -1) return;

  let result = +((9 / 5) * temp + 32).toFixed(1);

  printOutput("Fahrenheit", result);
};