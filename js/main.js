// Button for submiting the email
const button = document.querySelector(".button");

// Error logo when email input is not valid
const errorSign = document.querySelector(".error");

// Error message when email input is not valid
const errorMessage = document.querySelector(".error-text");

const input = document.querySelector("input");



button.addEventListener("click", function(e){
    e.preventDefault();
    const email = input.value;
    console.log(email);
    const goodEmail = checkInput(email);
    console.log(goodEmail);

    input.value = "";
});



const checkInput = function (text) {
    const acceptedLetters = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (text.length === 0) {
        errorMessage.classList.remove("hide");
        errorSign.classList.remove("hide");
    } else if (!text.match(acceptedLetters)) {
        errorMessage.classList.remove("hide");
        errorSign.classList.remove("hide");
    } else {
        errorMessage.classList.add("hide");
        errorSign.classList.add("hide");
        return text;
    }
}