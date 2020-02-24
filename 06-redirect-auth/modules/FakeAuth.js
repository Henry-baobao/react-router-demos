const FakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        FakeAuth.isAuthenticated = true;
        setTimeout(cb, 200);
    },
    signout(cb) {
        FakeAuth.isAuthenticated = false;
        setTimeout(cb, 200);
    }
}

export default FakeAuth;