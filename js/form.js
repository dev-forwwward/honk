
$(document).ready(function () {

    let isContactForm = document.querySelector(".form-contact");
    if (isContactForm) {
        var $form = $("form");
        $.validator.addMethod("letters", function (value, element) {
          return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/);
        });
        $.validator.addMethod("customEmail", function (value, element) {
          return (
            this.optional(element) || /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(value)
          );
        });
        
        $form.validate({
          rules: {
            youremail: {
              required: true,
              email: true,
              customEmail: true // Add the customEmail validation
            }
          },
          messages: {
            youremail:
              "Please specify a valid email address using the format user@example.com",
          }
        });
    }
    
});





