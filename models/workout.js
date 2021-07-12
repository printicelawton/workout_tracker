const mongoose = require ("mongoose");
const Schema = mongoose.Schema; 

const workoutSchema = new Schema({
    day: {
        type: Date, 
        default: Date.now
    },

    exercises: [
        {
            type: {
                type: String, 
                trim: true, 
                required: "Enter type of exercise"
            },
            name: {
                type: String, 
                trim: true, 
                require: "Enter name of exercise"
            },
            duration: {
                type: Number, 
                required: "Enter the duration of exercise" 
            },
            weight: {
                type: Number 
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            } 
        }
    ]
},
{
    toJSON: {
        virtuals: true
    }
}
);