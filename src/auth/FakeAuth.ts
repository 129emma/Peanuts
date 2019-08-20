const fakeAuth = {
    isLogged: false,
    login(callback: () => void) {
        this.isLogged = true
    },
    logout(callback: () => void) {
        this.isLogged = false
    }
};

export default fakeAuth;