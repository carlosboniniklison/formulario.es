
/* grecaptcha.enterprise.ready(function () {
    grecaptcha.enterprise.execute('6LfOxHYeAAAAAAoHpVZj8L-IDofEfQBcvx736uzm', { action: 'login' }).then(function (token) {
       
    });
}); */



/* function onClick(e) {
    e.preventDefault();
    grecaptcha.enterprise.ready(async () => {
        const token = await grecaptcha.enterprise.execute('6LfOxHYeAAAAAAoHpVZj8L-IDofEfQBcvx736uzm', { action: 'LOGIN' });

    });
} */

// IMPORTANT: The 'token' that results from execute is an encrypted response sent by
// reCAPTCHA Enterprise to the end user's browser.
// This token must be validated by creating an assessment.
// See https://cloud.google.com/recaptcha-enterprise/docs/create-assessment


function onSubmit(token) {
    document.getElementById("formulario").submit();
}


