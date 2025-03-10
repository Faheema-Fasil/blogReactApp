const bcrypt = require('bcryptjs');
const User = require('../models/userModels');
const HttpError = require('../models/errorModel');

// Helper function for validation
const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// REGISTER A NEW USER
// POST: api/user/register
// const registerUser = async (req, res, next) => {
//     try {
//         const { name, email, password, password2 } = req.body;

//         // Validate inputs
//         if (!name || !email || !password || !password2) {
//             return next(new HttpError("All fields are required.", 422));
//         }
//         if (!isEmailValid(email)) {
//             return next(new HttpError("Invalid email format.", 422));
//         }
//         if (password.trim().length < 6) {
//             return next(new HttpError("Password should be at least 6 characters.", 422));
//         }
//         if (password !== password2) {
//             return next(new HttpError("Passwords do not match.", 422));
//         }

//         const newEmail = email.toLowerCase();

//         // Check if email already exists
//         const emailExists = await User.findOne({ email: newEmail });
//         if (emailExists) {
//             return next(new HttpError("Email already exists.", 422));
//         }

//         // Hash password
//         const salt = await bcrypt.genSalt(10);
//         const hashedPass = await bcrypt.hash(password, salt);

//         // Create new user
//         const newUser = await User.create({
//             name,
//             email: newEmail,
//             password: hashedPass
//         });

//         res.status(201).json({
//             id: newUser.id,
//             name: newUser.name,
//             email: newUser.email,
//         });
//     } catch (error) {
//         console.error(error); // Log the actual error for debugging
//         return next(new HttpError("User registration failed.", 500));
//     }
// };
const registerUser = async (req, res, next) => {
    try {
        console.log("Request body:", req.body); // Log the incoming request
        const { name, email, password, password2 } = req.body;

        // Validate inputs
        if (!name || !email || !password || !password2) {
            console.log("Validation failed: Missing fields");
            return next(new HttpError("All fields are required.", 422));
        }
        if (!isEmailValid(email)) {
            console.log("Validation failed: Invalid email format");
            return next(new HttpError("Invalid email format.", 422));
        }
        if (password.trim().length < 6) {
            console.log("Validation failed: Password too short");
            return next(new HttpError("Password should be at least 6 characters.", 422));
        }
        if (password !== password2) {
            console.log("Validation failed: Passwords do not match");
            return next(new HttpError("Passwords do not match.", 422));
        }

        const newEmail = email.toLowerCase();
        console.log("Checking if email exists:", newEmail);

        const emailExists = await User.findOne({ email: newEmail });
        if (emailExists) {
            console.log("Validation failed: Email already exists");
            return next(new HttpError("Email already exists.", 422));
        }

        console.log("Hashing password");
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt);

        console.log("Creating new user");
        const newUser = await User.create({
            name,
            email: newEmail,
            password: hashedPass,
        });

        console.log("User created successfully:", newUser);
        res.status(201).json({
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
        });
    } catch (error) {
        console.error("Error in registerUser:", error); // Log the actual error
        return next(new HttpError("User registration failed.", 500));
    }
};


// LOGIN A NEW REGISTERED USER
// POST: api/user/login
// UNPROTECTED
const loginUser = async (req, res, next) => {
    // Logic for authenticating user (to be implemented)
    res.json("Login user endpoint");
};

// USER PROFILE
// POST: api/user/:id
// PROTECTED
const getUser = async (req, res, next) => {
    // Logic for retrieving user profile (to be implemented)
    res.json("User profile endpoint");
};

// CHANGE USER AVATAR (profile picture)
// POST: api/user/change-avatar
// PROTECTED
const changeAvatar = async (req, res, next) => {
    // Logic for changing avatar (to be implemented)
    res.json("Change user avatar endpoint");
};

// EDIT USER DETAILS (from profile)
// POST: api/user/edit-user
// PROTECTED
const editUser = async (req, res, next) => {
    // Logic for editing user details (to be implemented)
    res.json("Edit user details endpoint");
};

// GET AUTHORS
// POST: api/user/author
// UNPROTECTED
const getAuthors = async (req, res, next) => {
    // Logic for retrieving authors (to be implemented)
    res.json("Get all users/authors endpoint");
};

module.exports = {
    registerUser,
    loginUser,
    getUser,
    changeAvatar,
    editUser,
    getAuthors,
};
