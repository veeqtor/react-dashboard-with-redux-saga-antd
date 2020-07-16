const authenticationStatus = true;

class Auth {
  isAuthenticated = (): boolean => {
    return authenticationStatus;
  };
}

const auth = new Auth();

export default auth;
