export const formValidation = {
    nameValidation,
    mobileNumberValidation,
    emailValidation,
    passwordValidation
};


function nameValidation(submitted, name) {
  if(submitted){
    return name ? true : false
} else {
    return true
}
}

function mobileNumberValidation(submitted, mobileNumber) {
  if(submitted){
    return (mobileNumber.length === 10) ? true : false
 } else {
     return true
 }
}


function emailValidation(submitted, email) {
    if(submitted){
        return email ? true : false
      } else {
        return true
      }
}


function passwordValidation(submitted, password) {
    if(submitted){
        return (password.length > 7) ? true : false
     } else {
       return true
     }
}