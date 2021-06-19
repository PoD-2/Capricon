export const formValidation = {
    nameValidation,
    mobileNumberValidation,
    emailValidation,
    passwordValidation,
    checkForCompanyName,
    zipcodeValidation,
    checkOnlyNumber,
    productImageValidation,
    formatCreditCardNumber,
    formatExpirationDate,
    formatCvc,
    accountNumberValidation,
    cvcValidation,
    expiryValidation
};


function nameValidation(submitted, name) {

  if(submitted){
    return name.length===0 ? false : true
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

  function checkOnlyNumber(submitted, number) {
    if(submitted){
      return /^\d+$/.test(number);
   } else {
       return true
   }
  }

function productImageValidation(submitted, imageFiles) {
    if(submitted){
      return (imageFiles.length < 5 && imageFiles.length >= 2) ? true : false;
   } else {
       return true
   }
  }

function clearNumber(value = '') {
    return value.replace(/\D+/g, '')
  }


function formatCreditCardNumber(value){

const clearValue = clearNumber(value)
let nextValue;
nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(4,8)} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 16)}`;
return nextValue.trim();

}

function formatExpirationDate(value) {
const clearValue = clearNumber(value)

if (clearValue.length >= 3) {
  return `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`
}

return clearValue;
}

function formatCvc(value) {
  const clearValue = clearNumber(value);
  return clearValue.slice(0, 3);
}

function accountNumberValidation(submitted, value){
  if(submitted){
    return (value.length === 19) ? true : false
 } else {
     return true
 }
}

function cvcValidation(submitted, value){
  if(submitted){
    return (value.length === 3) ? true : false
 } else {
     return true
 }
}

function expiryValidation(submitted, value){
  if(submitted){
    return (value.length === 5) ? true : false
 } else {
     return true
 }
}