class NewController {
    index(req, res) {
        res.render('news/index');
    }

    // Get news/:id
    show(req, res) {
        const id = req.params.id;
        res.send("News has id: "+id);
    }
}

module.exports = new NewController;