const mongoose = require('mongoose');

// Define the schema for the About model
const aboutSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

// Define the schema for the Contact model
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

// Define the schema for the Home model
const homeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

// Create models from the schemas
const About = mongoose.model('About', aboutSchema);
const Contact = mongoose.model('Contact', contactSchema);
const Home = mongoose.model('Home', homeSchema);

// Export the models
module.exports = {
    About,
    Contact,
    Home
};