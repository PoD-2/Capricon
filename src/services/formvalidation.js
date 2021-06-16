export const formValidation = {
    nameValidation,
    mobileNumberValidation,
    emailValidation,
    passwordValidation,
    checkForCompanyName,
    zipcodeValidation,
    checkOnlyNumber,
    productImageValidation
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

function zipcodeValidation(submitted, zipCode) {
  if(submitted){
    return (zipCode.length === 6) ? true : false
 } else {
     return true
 }
}



  //get company name from buisness email
  function checkForCompanyName (buisnessEmail) {

    const popularEmailServiceProvider = ["gmail", "outlook", "yahoo", "hotmail"];
    const companyName = buisnessEmail.substring(buisnessEmail.lastIndexOf("@") +1, buisnessEmail.lastIndexOf("."));
    const checkIfNormalEmail = popularEmailServiceProvider.includes(companyName);
    if(checkIfNormalEmail){
      return "";
    } else {
      return companyName;
    }

  }

  function checkOnlyNumber (submitted, number) {
    if(submitted){
      return /^\d+$/.test(number);
   } else {
       return true
   }
  }

  function productImageValidation(submitted, imageFiles) {
    if(submitted){
      return (imageFiles.length < 5) ? true : false;
   } else {
       return true
   }
  }