var emailInput = document.getElementById('email');
var passworInput = document.getElementById('password');
var entrarBotao = document.getElementById('botaoEntrar')
var cadastrarBotao = document.getElementById('botaoCadastrese')

entrarBotao.addEventListener("click", login);
cadastrarBotao.addEventListener("click", cadastrar);

function login() {
    if(emailInput.value === 'adm' && passworInput.value === '123')
        window.location.href= '../Principal/principal.html' 
  }

  entrarBotao.addEventListener("click", login);

function cadastrar() {
        window.location.href= '../Principal/principal.html' 
  }

var googleUser = {};
var startApp = function() {
  gapi.load('auth2', function(){
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
      function(googleUser) {
        document.getElementById('name').innerText = "Signed in: " +
            googleUser.getBasicProfile().getName();
      }, function(error) {
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
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }