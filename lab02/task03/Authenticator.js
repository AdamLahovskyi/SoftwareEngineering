class Authenticator {
    constructor() {
        if (!Authenticator.instance) {
            this._token = null;
            Authenticator.instance = this;
        }
        return Authenticator.instance;
    }

    getToken() {
        return this._token;
    }

    setToken(token) {
        this._token = token;
    }
}
module.exports = Authenticator;