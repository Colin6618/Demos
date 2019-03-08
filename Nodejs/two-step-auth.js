const Express = require("express");
const BodyParser = require("body-parser");
const Speakeasy = require("speakeasy");

var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({
    extended: true
}));

// generate a secret, in fact it should not send to user
app.post("/totp-secret", (request, response, next) => {  //OUUDCZZVOEQTO6RGGEWFGRCNGJ5C4MZ4
    var secret = Speakeasy.generateSecret({
        length: 20
    });
    response.send({
        "secret": secret.base32
    });
});

// generate and remember the same token every 30s
app.post("/totp-generate", (request, response, next) => { //258753
    response.send({
        "token": Speakeasy.totp({
            secret: request.body.secret,
            encoding: "base32"
        }),
        "remaining": (30 - Math.floor((new Date()).getTime() / 1000.0 % 30))
    });
});

// validate the token and secret
app.post("/totp-validate", (request, response, next) => {
    console.log(request.body.secret, request.body.token)
    response.send({
        "valid": Speakeasy.totp.verify({
            secret: request.body.secret,
            encoding: "base32",
            token: request.body.token,
            window: 0
        })
    });

});

app.listen(3000, () => {
    console.log("Listening at :3000...");
});