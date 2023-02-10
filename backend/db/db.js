const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://mern_auth:<Collection_Password>@cluster0.hif2mn3.mongodb.net/Auth_Mern?retryWrites=true&w=majority';

const mongoDB = async ()=> {
    mongoose.connect(mongoURI,async (err, result)=> {
        if(err) {
            console.log(err)
        }else {
            console.log('Connected to Database Successfully')
        }
    })
};

module.exports = mongoDB();