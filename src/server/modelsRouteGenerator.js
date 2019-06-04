module.exports = function(app, models)
{
    models.forEach(element => {
        var basePath = `/${element.route}`;

        var get = element.get || (async (req, res) => {
            try {
                var result = await element.model.find().exec();
                res.send(result);
            }
            catch (err)
            {
                res.status(500).send(err);
            }
        });
        app.get(basePath, get);

        var getByID = element.getByID || (async (req, res) => {
            try {
                var result = await element.model.findById(req.params.id).exec();
                res.send(result);
            }
            catch (err)
            {
                res.status(500).send(err);
            }
        });
        app.get(`${basePath}/:id`, getByID);

        var post = element.post || (async (req, res) => {
            try {
                var instance = new element.model(req.body);
                var result = await instance.save();
                res.send(result);
            }
            catch (err)
            {
                res.status(500).send(err);
            }
        });
        app.post(basePath, post);

        var put = element.put || (async (req, res) => {
            var instance = await element.model.findById(req.params.id).exec();
            instance.set(req.body);
            var result = await instance.save();
            res.send(result);
        });
        app.put(`${basePath}/:id`, put);

        var del = element.delete || (async (req, res) => {
            try {
                var result = await element.model.deleteOne({ _id: req.params.id }).exec();
                res.send(result);
            }
            catch (err) {
                res.status(500).send(err);
            }
        });
        app.del(`${basePath}/:id`, del);
    });
}