
//mobile navigation
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  // contact page form
  var fields ={};
  document.addEventListener("formContent", function() {
      fields.name = document.getElementById('name');
      fields.email = document.getElementById('email');
      fields.message = document.getElementById('message');
  });

  function isFilled(value) {
      if(value ==null || typeof value =='undefined') return false;
      return(value.length>0);
  }

  function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
   }

   function fieldValidation (field, validationFunction) {
       if (field ==null) return false;

       let isFieldValid = validationFunction(field.value)
       if(!isFieldValid) {
           field.className ='placeholderRed';
       } else {
           field.className='';
       }
       return isFieldValid;
   };
   function isValid() {
       var valid=true;

       valid&=fieldValidation(fields.name, isNotEmpty);
       valid&=fieldValidation(fields.email, isNotEmpty);
       valid&=fieldValidation(fields.message, isNotEmpty);

       return valid;
   };

   class user {
       constructor (name, email, emssage) {
           this.name=name;
           this.email = email;
           this.message = message;
       }
   };
