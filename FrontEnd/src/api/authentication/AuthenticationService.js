class AuthenticationService {
  registerSuccessfulLoginBusiness(username) {
    sessionStorage.setItem("authenticatedUser", username);
    sessionStorage.setItem("role", "business");
    console.log("Successful login");
  }

  registerSuccessfulLoginUser(username) {
    sessionStorage.setItem("authenticatedUser", username);
    sessionStorage.setItem("role", "user");
    console.log("Successful login");
  }

  logout() {
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload(false);
  }

  isUserLoggedIn() {
    let role = sessionStorage.getItem("role");
    if (role === "user") {
      return true;
    } else {
      return false;
    }
  }

  isBusinessLoggedIn() {
    let role = sessionStorage.getItem("role");
    if (role === "business") {
      return true;
    } else {
      return false;
    }
  }

  getLoggedInUser() {
    let username = sessionStorage.getItem("authenticatedUser");
    if (username == null) {
      return "";
    } else {
      return username;
    }
  }

  setUpToken(jwtToken) {
    localStorage.setItem("token", jwtToken);
  }
}

export default new AuthenticationService();