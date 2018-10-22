var webAuth = new auth0.WebAuth({
  domain: "wqrld.auth0.com",
  clientID: "7lwAMtx7evyBq5a52I0tnaM2vW0kml47",
  responseType: 'token id_token',
  redirectUri: 'https://botpanel.feroxmc.ga/callback'
  
});
  function login(){
    
    webAuth.authorize();
  }



  function handleAuthentication() {
    webAuth.parseHash(function(err, authResult) {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        setSession(authResult);
      //  loginBtn.style.display = 'none';
       // homeView.style.display = 'inline-block';
      } else if (err) {
       // homeView.style.display = 'inline-block';
        console.log(err);
        alert(
          'Error: ' + err.error + '. Check the console for further details.'
        );
      }
      displayButtons();
    });
  }

  function setSession(authResult) {
    // Set the time that the Access Token will expire at
    var expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  function logout() {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    displayButtons();
  }

  function isAuthenticated() {
    // Check whether the current time is past the
    // Access Token's expiry time
   // var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    //return new Date().getTime() < expiresAt;
    return true;
  }

  function displayButtons() {
    /*
    if (isAuthenticated()) {
      loginBtn.style.display = 'none';
      logoutBtn.style.display = 'inline-block';
      loginStatus.innerHTML = 'You are logged in!';
    } else {
      loginBtn.style.display = 'inline-block';
      logoutBtn.style.display = 'none';
      loginStatus.innerHTML =
        'You are not logged in! Please log in to continue.';
    }*/
  }
console.log("authutils initiated");