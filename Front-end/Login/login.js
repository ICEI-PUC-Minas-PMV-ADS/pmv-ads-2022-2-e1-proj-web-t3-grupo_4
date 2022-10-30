var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var entrarBotao = document.getElementById('botaoEntrar')
var cadastrarBotao = document.getElementById('botaoCadastrese')

entrarBotao.addEventListener("click", login);
cadastrarBotao.addEventListener("click", cadastrar);
emailInput.addEventListener("focusout", validarEmail);

var usuarios = [
    {
        login : 'a@a.com',
        senha: 'a'
    },
    {
        login : 'fulalo@deTal.com',
        senha: 'ciclano'
    },
    
]

function login() {
    let usuario = usuarios.find( u=> u.login === emailInput.value);
    let senhaValida = usuario != null && usuario.senha === passwordInput.value
    if ( senhaValida){

        passwordInput.classList.remove("is-invalid");
        window.location.href = '../Principal/Home.html'//todo incluir endereço correto da home
    }   
    else{
        passwordInput.classList.add("is-invalid")
    }
}


// function cadastrar() {
//     window.location.href = ''
// }

function validarEmail() {
      if(emailInput.value === ""){
        emailInput.classList.remove("is-invalid")
        emailInput.classList.remove("is-valid")
      }
      else if(emailValido(emailInput.value)){
        emailInput.classList.remove("is-invalid")
        emailInput.classList.add("is-valid")
      }else{
        emailInput.classList.remove("is-valid")
        emailInput.classList.add("is-invalid")
      }
  };

function emailValido(email){
    return  String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}  
var googleUser = {};
var startApp = function () {
    gapi.load('auth2', function () {
            // Retrieve the singleton for the GoogleAuth library and set up the client.
        auth2 = gapi.auth2.init({
            client_id: '655703055622-gdqg0q28mh8725vfjhutfk1idnhcfagj.apps.googleusercontent.com',
            cookiepolicy: 'single_host_origin',
            // Request scopes in addition to 'profile' and 'email'
            //scope: 'additional_scope'
        });
        attachSignin(document.getElementById('btn-google'));
    });
};

function attachSignin(element) {
    console.log(element.id);
    auth2.attachClickHandler(element, {},
        function (googleUser) {
            document.getElementById('name').innerText = "Signed in: " +
                googleUser.getBasicProfile().getName();
        }, function (error) {
            alert(JSON.stringify(error, undefined, 2));
        });
}
startApp();

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
// function signOut() {
//     var auth2 = gapi.auth2.getAuthInstance();
//     auth2.signOut().then(function () {
//         console.log('User signed out.');
//     });
// }


