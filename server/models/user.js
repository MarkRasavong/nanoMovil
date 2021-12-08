import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address1: { type: String, required: false },
    city: { type: String, required: false },
    postalCode: { type: Number, required: false },
    province: { type: String, required: false }

});

export default mongoose.model('User', userSchema);