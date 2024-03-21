import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Name is required'], 
    },
    email: {
        type: String,
        trim: true,
        unique: [true, 'Email already exists'], 
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        required: [true, 'Email is required'], 
    },
    password: {
        type: String,
        required: [true, 'Password is required'], 
    },
}, { versionKey: false });

export default mongoose.model('User', UserSchema);
