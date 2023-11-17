import mongoose from 'mongoose';
const mongodbURI = process.env.mongodbURI || "mongodb+srv://ahmed:ahmed@cluster0.tlxtt8v.mongodb.net/";
/////////////////////////////////////////////////////////////////////////////////////////////////

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    subject: String,
    message: String
  });
 export const Contact = mongoose.model('Contact', contactSchema);
  
 const tripSchema = new mongoose.Schema({
    name: String,
    people: Number,
    checkinDate: Date,
    checkoutDate: Date
  });
  
 export const Trip = mongoose.model('Trip', tripSchema);  

mongoose.connect(mongodbURI);
////////////////mongodb connected disconnected events///////////////////////////////////////////////
mongoose.connection.on('connected', function () {//connected
    console.log("Mongoose is connected");
});

mongoose.connection.on('disconnected', function () {//disconnected
    console.log("Mongoose is disconnected");
    process.exit(1);
});

mongoose.connection.on('error', function (err) {//any error
    console.log('Mongoose connection error: ', err);
    process.exit(1);
});

process.on('SIGINT', function () {/////this function will run jst before app is closing
    console.log("app is terminating");
    mongoose.connection.close(function () {
        console.log('Mongoose default connection closed');
        process.exit(0);
    });
});
////////////////mongodb connected disconnected events///////////////////////////////////////////////
