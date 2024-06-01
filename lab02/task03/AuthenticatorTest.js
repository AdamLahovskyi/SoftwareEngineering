const Authenticator = require("./Authenticator");

const authenticator1 = new Authenticator();
const authenticator2 = new Authenticator();

console.log(authenticator1 === authenticator2);

authenticator1.setToken("example_token");

console.log(authenticator2.getToken());