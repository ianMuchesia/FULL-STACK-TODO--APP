const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, 'must provide a name'],
        trim:true,
        maxlength: [20, 'name cannot be more than 20 characters']
    },
    completed:{
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        //default to ten days from now
        default: () => {
                let tenDaysFromNow = new Date();
                tenDaysFromNow.setDate(tenDaysFromNow.getDate() + 10);
                return tenDaysFromNow;
            }
    },
    category:{
        type:String,
        default:"Others",
    }
})

module.exports = mongoose.model("Task", TaskSchema)
