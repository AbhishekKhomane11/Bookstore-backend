// import bcrypt from 'bcryptjs/dist/bcrypt.js';
// import User from '../model/user.model.js'
// import bcryptjs from 'bcryptjs'
// export const signup = async (req, res) => {
//     try {
//         const { fullname, email, password } = req.body;
//         console.log(req.body)
//         // Check if all required fields are present
//         if (!fullname || !email || !password) {
//             return res.status(400).json({ message: "All fields are required" });
//         }
 
//         const user = await User.findOne({ email });
//         if (user) {
//             return res.status(400).json({ message: "User already exists" });
//         }
//         const hashPassword=await bcryptjs.hash(password,10)
//         const createdUser = new User({
//             fullname: fullname,
//             email: email,
//             password: hashPassword
//         });

//         await createdUser.save();
//         res.status(201).json({ message: "User created successfully" ,user:{
//             _id:createdUser._id,
//             fullname:createdUser.fullname,
//             email:createdUser.email,

//         }});
//     } catch (error) {
//         console.error("Error: ", error.message);
//         res.status(500).json({ message: "Internal server error" });
//     }
// };

// export const login=async(req, res) => {
//     try{
//         const {email, password}= req.body;
//         const user = await User.findOne({email});
//         const isMatch= await bcryptjs.compare(password, user.password);
//         if(!user || !isMatch){
//             return res.status(400).json({message:"Invalid username or password"});
//         }else{
//             res.status(200).json({message:"Login successful", user:{
//                 _id:user._id,
//                 fullname:user.fullname,
//                 email:user.email
//             }})
//         }
//     } catch(error){
//          console.log("Error:" +error.message)
//          res.status(500).json({message:"Internal server error"})
//     }
// }



import bcryptjs from 'bcryptjs';
import User from '../model/user.model.js';

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        if (!fullname || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcryptjs.hash(password, 10);

        const newUser = new User({
            fullname,
            email,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({
            message: "User created successfully",
            user: {
                _id: newUser._id,
                fullname: newUser.fullname,
                email: newUser.email,
            }
        });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        res.status(200).json({
            message: "Login successful",
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email
            }
        });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
