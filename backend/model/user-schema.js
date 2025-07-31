import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
    minLength: 2,
    maxLength: 20
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    minLength: 2,
    maxLength: 20
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    index: true,
    lowercase: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;
