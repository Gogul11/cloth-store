const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        username : {
            type : String,
            required : true,
        },
        email : {
            type : String,
            required : true,
        },
        phone : {
            type : String,
            required : true,
        },
        password : {
            type : String,
            required : true
        }
    },
    {
        timestamps : true
    }
)

const userModel = new mongoose.model("User", userSchema, "user")

module.exports = userModel

//mongodb+srv://gogul:trendytrends@clustertt.brs6oz2.mongodb.net/?retryWrites=true&w=majority&appName=clusterTT