module.exports = function(app) {
    const sendEmailService = require('./mailrouting/mailroute')
    app.use(sendEmailService);

    app.use(function (req, res) {
        res.status(404).json({ error: "Not Found" });
    });
}