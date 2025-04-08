const bcrypt = require('bcryptjs');
const User = require('../models/userModels');
const HttpError = require('../models/errorModel');
const jwt=require('jsonwebtoken')
const fs=require('fs')
const path=require('path');
const { trusted } = require('mongoose');
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
            // id: newUser.id,
            // name: newUser.name,
            // email: newUser.email,
            // posts: newUser.posts,
            // avatar: newUser.avatar,
            // password: newUser.password,
            
            message: `User ${newUser.name} with email ${newUser.email}, Registered successfully `

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

    
    try {
        console.log("Received login request:", req.body); 
        const{email,password}=req.body;
        if(!email || !password){
            console.log("Validation failed: Missing fields");
            return next(new HttpError("All fields are required.", 422));
        }
        const user = await User.findOne({ email: email });
        if (!user) {
            console.log("Validation failed: User not found");
            return next(new HttpError("User not found.", 422));
        }
        const camparePass=await bcrypt.compare(password,user.password);
        if(!camparePass){
            console.log("Validation failed: Invalid password");
            return next(new HttpError("Invalid password.", 422));
        }
        const {_id:id,name}=user;
        const token=jwt.sign({id,name},process.env.JWT_SECRET,{expiresIn:"1d"});
        res.status(200).json({token,id,name});
        console.log("User authenticated successfully:", user);

    } catch (error) {
        console.error("Error in loginUser:", error); // Log the actual error
        return next(new HttpError("User login failed.", 500));
    }
    res.json("Login user endpoint");
};

// USER PROFILE
// POST: api/user/:id
// PROTECTED
const getUser = async (req, res, next) => {
    // Logic for retrieving user profile (to be implemented)
    try {
        const {id}=req.params;
        const user=await User.findById(id).select("-password");
        if(!user){
            return next(new HttpError("User not found.", 404));
        }
        res.status(200).json(user);
    } catch (error) {
        return next(new HttpError("User profile retrieval failed.", 500));
    }
};

// CHANGE USER AVATAR (profile picture)
// POST: api/user/change-avatar
// PROTECTED
const changeAvatar = async (req, res, next) => {
    // Logic for changing avatar (to be implemented)
    try {
        if (!req.files.avatar) {
            return next(new HttpError("please choose an image.", 422))
        }
        // find users fform db
        const user= await User.findById(req.user.id);
        // delete old avatar if exists
        if (user.avatar) {
            fs.unlink(path.join(__dirname,'..','uploads',user.avatar),(err)=>{
                if(err){
                    return next(new HttpError(err))
                }
            })
        }
        const {avatar}=req.files;
        // check ffile size
        if(avatar.size>500000){
            return next(new HttpError("profile pic is too bg . shoukd be less than 500kb"),422)

        }
        let fileName;
        fileName=avatar.name;
        let splittedFilename=fileName.split('.')
        let newFilename=splittedFilename[0]+uuid()+'.'+splittedFilename[splittedFilename.length-1]
        avatar.mv(path.join(__dirname,'..','uploads',newFilename),async(err)=>{
            if(err){
                return next(new HttpError(err))
            }
            const updatedAvatar=await User.findByIdAndUpdate(req.user.id,{avatar:newFilename},{new:true})
            if(!updatedAvatar){
                return next(new HttpError(err),422)
            }
            res.status(200).json(updatedAvatar)
        })
    } catch (error) {
        return next(new HttpError("Avatar change failed.", 500,error));
    }
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
    try {
        const authors=await User.find().select("-password");
        res.status(200).json(authors);
    } catch (error) {
        return next(new HttpError("Authors retrieval failed.", 500));
    }
};

module.exports = {
    registerUser,
    loginUser,
    getUser,
    changeAvatar,
    editUser,
    getAuthors,
};
