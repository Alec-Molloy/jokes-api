const JokeController = require('../controllers/controller.jokes');
const Joke = require('../models/model.joke')

module.exports = (app) => {
    app.get('/', JokeController.index);
    app.post('/api/create/joke', JokeController.create);
    app.get('/api/joke/:id', JokeController.show);
    app.put('/api/update/joke/:id', JokeController.update);
    app.delete('/api/destroy/joke/:id', JokeController.destroy);
    app.get('/api/joke/random', JokeController.random)
}