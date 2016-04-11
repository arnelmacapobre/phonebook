var path = require('path');  

    module.exports = function(app) {
		
		app.use('/api', require('./routes/api'));
		// frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
           res.sendFile(path.join(__dirname, '../public/views', 'index.html')); // load our public/index.html file
        });	

    };
