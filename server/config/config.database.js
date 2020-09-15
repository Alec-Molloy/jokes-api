const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/jokes",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log("Database online"))
.catch(()=> console.log("Something went wrong"))