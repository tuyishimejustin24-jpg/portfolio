const signUpForm = document.querySelector("#signup-form")

const inputFistName = document.getElementById("fist-name")
const inputLastName = document.getElementById("last-name")
const inputEmail = document.getElementById("email")
const inputPhone = document.getElementById("phone")
const inputPassWord = document.getElementById("password")

const firstNameValidation = document.getElementById("first-name-validation")
const emailValidation = document.getElementById("passWord-validation")

function signUp(event){
  event.preventDefault()

  if(inputFistName.value==="" && inputEmail.value==="" && inputPhone.value==="" && inputPassWord.value === ""){
    alert("please all input is required")
  }

  if(inputFistName.value !== inputFistName.value.charAt(0).toUpperCase()+inputFistName.value.slice(1)){
    firstNameValidation.innerHTML="put your first name start with upper case "
    return
  }

  if(inputEmail.value.includes("@")){
    emailValidation.innerHTML="invarid email"
    return
  }

  if(inputPhone.value.length !== 13 || !inputPhone.value.startswith("+2507")){
    phoneValidation.innerHTML = "Invalid phone number"
    return
  }

  if(!inputPassWord.value.tostrongPassWord())



  const data = {
      firstName: inputFistName.value,
      lastName: inputLastName.value,
      email: inputEmail.value,
      phone: inputPhone.value,
      passWord:inputPassWord

  }
    try{                    
   let users = JSON.parse(localStorage.getItem("users")) || []
   users.push(data)
   localStorage.setItem("users", JSON.stringify(users))
   alert("User successfuly registed")
   signUpForm.reset();
    } catch (error) {

    console.log(`Error is : ${error}`)
    }
}  

signUpForm.addEventListener("submit", signUp)

