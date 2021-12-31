import mongoose from "mongoose";

const carSchema = mongoose.Schema({
    model: String,
    description: String, 
    owner: String, 
    tags: [String], 
    image: String,
    likeCount: {
        type: Number, 
        default: 0
    },
    addedAt: {
        type: Date, 
        default: new Date()
    }
});

const CarMessage = mongoose.model('CarMessage', carSchema);
export default CarMessage;