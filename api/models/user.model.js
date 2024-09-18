import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
username :{
    type: String,
    required: true,
    unique: true,
},
email :{
    type: String,
    required: true,
    unique: true,
},
password :{
    type: String,
    required: true,

},
profilePicture :{
    type: String,
    default: "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FProfile.png&sp=1726665557T2e0c96984c30a249a9462fe25ddac57e325048f5c617479fd4c11f85a3f5a16b",

},
},{timestamps: true});

const User = mongoose.model('User',userSchema);

export default User;