const newsRouter = require('../routes/new');
const homeRouter = require('../routes/home');
const authRouter = require('../routes/auth');

function routes(app) {
    app.use('/news', newsRouter);
    app.use('/auth/register', authRouter);
    app.use('/', homeRouter);
        
    app.get('/register', (req, res) => {
        res.render('auth/register');
    });
        
    app.post('/register', (req, res) => {
        console.log(req.body);
        return res.render('auth/register');
    });      
}

module.exports = routes;