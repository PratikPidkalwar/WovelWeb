const mongoose = require("mongoose");

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect("mongodb+srv://mayank:lIt3CxkEtOjKXIU7@cluster0.culfh5y.mongodb.net/FormMERN?retryWrites=true&w=majority", connectionParams); //connection string
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};
