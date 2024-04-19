class AuthController {
    register(req, res) {
        res.render('auth/register');
    }
}

module.exports = new AuthController;