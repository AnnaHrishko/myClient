$(".gumb").click(function(){
	$(this).toggleClass('active')
	$('header .menu').toggleClass('active').slideToggle()
	$('html').toggleClass('hidden')
})

jQuery(function($){
   $(".phoneInput").mask("+ 38 (999) 999-99-99");
   $('#number-card').mask('9       9       9       9       9       9       9       9       9       9       9       9');
});

$(function() {
    $.validator.addMethod("emailRegex", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(value);
    }, "");
});

// $(function() {
//     $.validator.addMethod("passwordRegex", function(value, element) {
//         return this.optional(element) || /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(value);
//     }, "");
// });

// function ValidatePassword() {
//   var rules = [{
//       Pattern: "[A-Z]",
//       Target: "UpperCase"
//     },
//     {
//       Pattern: "[a-z]",
//       Target: "LowerCase"
//     },
//     {
//       Pattern: "[0-9]",
//       Target: "Numbers"
//     },
//     {
//       Pattern: "[!@@#$%^&*]",
//       Target: "Symbols"
//     }
//   ];
//   var password = $(this).val();

//   $("#Length").removeClass(password.length > 8 ? "glyphicon-remove" : "glyphicon-ok");
//   $("#Length").addClass(password.length > 8 ? "glyphicon-ok" : "glyphicon-remove");

//   for (var i = 0; i < rules.length; i++) {

//     $("#" + rules[i].Target).removeClass(new RegExp(rules[i].Pattern).test(password) ? "glyphicon-remove" : "glyphicon-ok"); 
//     $("#" + rules[i].Target).addClass(new RegExp(rules[i].Pattern).test(password) ? "glyphicon-ok" : "glyphicon-remove");
//       }
//     }

//     $(document).ready(function() {
//       $(".password").on('keyup', ValidatePassword)
//     });



$(function() {
    $(".form_forgive_password").validate({
        rules: {
            "email": {
                required: true,
                emailRegex: true,
            },
        },
        messages: {
            "email": {
                required: "Введіть вашу електронну адресу",
                emailRegex: "Формат електронної пошти невірний"
            },
        },
    });
});

$(function() {
    $(".form_enter").validate({
        rules: {
            "email": {
                required: true,
                emailRegex: true,
            },
            "password": {
                required: true,
                // passwordRegex: true,
            },
        },
        messages: {
            "email": {
                required: "Введіть вашу електронну адресу",
                emailRegex: "Формат електронної пошти невірний",
            },
            "password": {
                required: "Введіть пароль",
                // passwordRegex: "Невірний пароль",
            },
        },
    });
});


$(function() {
    $(".form_registration").validate({
        rules: {
        	"name_company": {
                required: true,
            },
            "first_name": {
                required: true,
              	minlength: 3,
            },
            "last_name": {
                required: true,
              	minlength: 3,
            },
            "email": {
                required: true,
                emailRegex: true,
            },
            "phone": {
                required: true,
            },
        },
        messages: {
        	"name_company": {
                required: "Обовʼязкове поле",
            },
            "first_name": {
                required: "Обовʼязкове поле",
              	minlength: "Введіть ваше повне і'мя",
            },
            "last_name": {
                required: "Обовʼязкове поле",
              	minlength: "Введіть ваше повне прізвище",
            },
            "email": {
                required: "Введіть вашу електронну адресу",
                emailRegex: "Формат електронної пошти невірний",
            },
            "phone": {
                required: "Обовʼязкове поле",
            },
        },
    });
});


