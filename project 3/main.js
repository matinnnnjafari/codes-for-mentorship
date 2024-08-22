'use strict';

//main div(root) styles
var mainDiv = document.getElementById("root")
mainDiv.setAttribute("style", "display:flex;")
mainDiv.setAttribute("style", "justify-content:center;display: flex;")
mainDiv.style.padding = "350px"


// img element
var img = document.createElement("img");
img.setAttribute("src", "/assets/Rectangle.png");
img.setAttribute("height", "800");
img.setAttribute("width", "500");
img.setAttribute("alt", "Flower");
img.setAttribute("style", "margin:0;")
document.getElementById("root").appendChild(img);

//forms div
var formDiv = document.createElement('div')
formDiv.setAttribute("style", "background-color: #E9EFFD")
formDiv.style.width = "500px";
formDiv.style.height = "800px";
formDiv.style.borderTopRightRadius = "8px";
formDiv.style.borderBottomRightRadius = "8px";
formDiv.classList.add('formDiv');
document.getElementById("root").appendChild(formDiv);


//form
const form = document.createElement('form');
form.classList.add('form');
formDiv.appendChild(form);
form.style.display = "flex";
form.setAttribute("style", "justify-content:flex-start;display: flex;")
form.setAttribute("style", "padding: 60px 60px")


//h1 sign up
const formH1 = document.createElement('H1');
formH1.textContent = 'Sign Up';
formH1.classList.add('form_H1');
formH1.style.fontWeight = "800"
formH1.style.fontFamily = "system-ui"
form.appendChild(formH1);



//item1 div
const item1 = document.createElement('div');
item1.classList.add('item1');
item1.style.display = "flex"
item1.style.flexWrap = "wrap"
item1.style.justifyContent = "flex-start"
item1.style.gap = "5px"
form.appendChild(item1);

//first label 
const label1 = document.createElement('label');
label1.textContent = 'First Name';
label1.classList.add('label');
item1.appendChild(label1);

//first input
const input1 = document.createElement('input')
input1.classList.add('input1');
input1.setAttribute("type", "text")
input1.setAttribute('placeholder', 'Enter Your first name');
input1.style.width = "100%"
input1.style.height = "50px"
input1.style.borderRadius = "10px"
input1.style.padding = "0 10px"
input1.style.border = "3px solid #cccccc"
item1.appendChild(input1);



//item2 div
const item2 = document.createElement('div');
item2.classList.add('item2');
item2.style.display = "flex"
item2.style.flexWrap = "wrap"
item2.style.justifyContent = "flex-start"
item2.style.padding = "20px 0 0 0"
item2.style.gap = "5px"
form.appendChild(item2);


//second label 
const label2 = document.createElement('label');
label2.textContent = 'Last Name';
label2.classList.add('label');
item2.appendChild(label2);

//second input
const input2 = document.createElement('input')
input2.classList.add('input2');
input2.setAttribute("type", "text")
input2.setAttribute('placeholder', 'Enter Your last name');
input2.style.width = "100%"
input2.style.height = "50px"
input2.style.borderRadius = "10px"
input2.style.padding = "0 10px"
input2.style.border = "3px solid #cccccc"
item2.appendChild(input2);




//item3 div
const item3 = document.createElement('div');
item3.classList.add('item3');
item3.style.display = "flex"
item3.style.flexWrap = "wrap"
item3.style.justifyContent = "flex-start"
item3.style.padding = "20px 0 0 0"
item3.style.gap = "5px"
form.appendChild(item3);

//third label 
const label3 = document.createElement('label');
label3.textContent = 'Email Address';
label3.classList.add('label');
item3.appendChild(label3);

//third input
const input3 = document.createElement('input')
input3.classList.add('input3');
input3.setAttribute("type", "text")
input3.setAttribute('placeholder', 'Email Address');
input3.style.width = "100%"
input3.style.height = "50px"
input3.style.borderRadius = "10px"
input3.style.padding = "0 10px"
input3.style.border = "3px solid #cccccc"
item3.appendChild(input3);


//item4 div
const item4 = document.createElement('div');
item4.classList.add('item2');
item4.style.display = "flex"
item4.style.flexWrap = "wrap"
item4.style.justifyContent = "flex-start"
item4.style.padding = "20px 0 0 0"
item4.style.gap = "5px"
form.appendChild(item4);

//forth label 
const label4 = document.createElement('label');
label4.textContent = 'Password';
label4.classList.add('label');
item4.appendChild(label4);

//forth input
const input4 = document.createElement('input')
input4.classList.add('input4');
input4.setAttribute("type", "text")
input4.setAttribute('placeholder', 'Re enter Password ');
input4.style.width = "100%"
input4.style.height = "50px"
input4.style.borderRadius = "10px"
input4.style.padding = "0 10px"
input4.style.border = "3px solid #cccccc"
item4.appendChild(input4);


//footer div
const footerDiv = document.createElement('div')
footerDiv.classList.add('footerDiv')
footerDiv.style.display = "flex"
footerDiv.style.justifyContent = "center"
footerDiv.style.alignItems = "baseline"
form.appendChild(footerDiv);

//footer text 1
const footerText = document.createElement('h3')
footerText.classList.add('footerText')
footerText.textContent = "Already have an account?"
footerDiv.appendChild(footerText);


//footer text 2
const footerText2 = document.createElement('a')
footerText2.classList.add('footerText2')
footerText2.textContent = "Log in"
footerDiv.appendChild(footerText2);

//button div
const button = document.createElement('div')
button.classList.add('button')
button.style.backgroundColor = "#2563EB"
button.style.width = "100%"
button.style.height = "50px"
button.style.borderRadius = "10px"
button.style.border = "none"
button.style.display  = "flex"
button.style.justifyContent = "center"
button.style.alignItems = "center"
form.appendChild(button);

//button a
const signUp = document.createElement('a')
signUp.classList.add('signUp')
signUp.textContent = 'Sign Up'
signUp.style.fontSize = "1rem"
signUp.style.color = "white"
button.appendChild(signUp)


button.addEventListener('click', function (e) {
    e.preventDefault();
    const firstNameInput = document.querySelector('.input1').value;
    const lastNameInput = document.querySelector('.input2').value;
    const emailInput = document.querySelector('.input3').value;
    const passInput = document.querySelector('.input4').value;
  
    async function fetchApi() {
      try {
        const response = await fetch('https://dummyjson.com/users/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstName: firstNameInput,
            lastName: lastNameInput,
            email: emailInput,
            password: passInput,
          }),
        });
        const data = await response.json();
        console.log(data);
      } catch {
        (err) => console.error('something went wrong❌');
      }
    }
    fetchApi();
  });



