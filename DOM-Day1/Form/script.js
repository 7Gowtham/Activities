let container = document.getElementById("container")

let header = document.createElement("h3")
header.innerHTML = "Form Registration"

let card_header = document.querySelector(".card-header")

card_header.appendChild(header)


let statesArray = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands",
    "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi",
    "Lakshadweep", "Puducherry"
  ];

function stateList(){
    let stateElement = document.getElementById("state")

    statesArray.forEach((e)=>{
        let option = document.createElement("option")
        option.value = e
        option.textContent = e
        stateElement.appendChild(option)
    })
}

stateList();

let countriesArray = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola",
    "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
    "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
    "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
    "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
    "Cameroon", "Canada", "Central African Republic", "Chad", "Chile",
    "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica",
    "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Democratic Republic of the Congo",
    "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador",
    "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia",
    "Eswatini (fmr. 'Swaziland')", "Ethiopia", "Fiji", "Finland", "France",
    "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
    "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau",
    "Guyana", "Haiti", "Holy See", "Honduras", "Hungary",
    "Iceland", "India", "Indonesia", "Iran", "Iraq",
    "Ireland", "Israel", "Italy", "Jamaica", "Japan",
    "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait",
    "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho",
    "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
    "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali",
    "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico",
    "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro",
    "Morocco", "Mozambique", "Myanmar (formerly Burma)", "Namibia", "Nauru",
    "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
    "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman",
    "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea",
    "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
    "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
    "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
    "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone",
    "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
    "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka",
    "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
    "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo",
    "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
    "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
    "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela",
    "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ];

function countryList(){
    let countryElement = document.getElementById("country")

    countriesArray.forEach((e)=>{
        let option = document.createElement("option")
        option.value = e
        option.textContent = e
        countryElement.appendChild(option)
    })    

}

countryList();



document.getElementById("form").addEventListener("submit", formSubmission);


function formSubmission(event){
    event.preventDefault()
    
    let fname = document.getElementById("fname").value
    let lname = document.getElementById("lname").value
    let addr = document.getElementById("addr").value
    let gender = "";
    document.querySelectorAll('input[type="radio"]').forEach((radio) => {
        if (radio.checked) {
            gender = radio.value;
        }
    });
    let pincode = document.getElementById("pincode").value

    let foodcheck = document.querySelectorAll('input[type="checkbox"]:checked');
    let selectFood = "";
    foodcheck.forEach((checkbox, index) => {
        if (index === 0) { 
            selectFood += checkbox.value;
        } else {
            selectFood += ', ' + checkbox.value;
        }
    });

    let state = document.getElementById("state").value
    let country = document.getElementById("country").value

    let tableBody = document.getElementById("tb").querySelector("tbody")

    let newRow = tableBody.insertRow()

    let c1 = newRow.insertCell();
    c1.innerHTML = fname

    let c2 = newRow.insertCell();
    c2.innerHTML = lname

    let c3 = newRow.insertCell();
    c3.innerHTML = addr

    let c4 = newRow.insertCell();
    c4.innerHTML = gender

    let c5 = newRow.insertCell();
    c5.innerHTML = pincode

    let c6 = newRow.insertCell();
    c6.innerHTML = selectFood

    let c7 = newRow.insertCell();
    c7.innerHTML = state

    let c8 = newRow.insertCell();
    c8.innerHTML = country

    document.getElementById("form").reset();

    

}

