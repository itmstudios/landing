// entities
const dialog = document.getElementById("dialog");
const showButton = document.getElementById("book");
const modalCloseBtn = document.getElementById('close-modal')
const email = document.getElementById('email')
const name = document.getElementById('name')
const industry = document.getElementById('industry')
const request = document.getElementById('request')
const phone = document.getElementById('phone')
const company = document.getElementById('company')
const form = document.getElementById('contactForm')
const languageSelect = document.getElementById('language_select')


// dialog logic
showButton.addEventListener("click", () => {
    dialog.showModal();
});

modalCloseBtn.addEventListener("click", () => {
    dialog.close();
});

//form logic
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailValue = email.value;
    const nameValue = name.value;
    const industryValue = industry.value;
    const requestValue = request.value;
    const phoneValue = phone.value;
    const companyValue = company.value;

    // Create an object to hold the data
    const formData = {
        emailValue,
        nameValue,
        industryValue,
        requestValue,
        phoneValue,
        companyValue
    };

    // Log the form data to the console
    console.log('Form submitted:', formData);

    // Add your form submission logic here

    form.reset();
    dialog.close();
});
document.getElementById('aboutBtn').addEventListener('click', function() {
    document.getElementById('aboutPanel').style.right = '0'; 
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('aboutPanel').style.right = '-50%'; 
});

