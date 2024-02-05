const express = require('express')
const connectDb = require('./config/db')
const app = express()
const cors = require('cors')
const bcrypt = require("bcryptjs")
const User = require('./Model/UserSchema')
const session = require("express-session")
const Message = require('./Model/MessageSchema'); // Adjust the path as needed

connectDb()

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, // Allow cookies and credentials
};
app.use(cors(corsOptions));
app.use(express.json())
app.use(
  session({
    secret: "qw1er2ty3ui4op5", // Replace with a secure secret key
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false, // Set to true for HTTPS
    },
  })
);

app.post("/signup", async function (req, res) {
  try {
    const { name, email, password,username } = req.body;
    if(email && password) {

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
      username: username 
    });

    const registeredUser = await User.findOne({ email: email });
    if (registeredUser) {
      res.status(400).json({ errorMessage: "User already registered!" });
    } else {
      newUser.save();
      req.session.userId = newUser._id; // Store user ID in the session
      res.status(200).json({message: "User registered successfully" });
      console.log("User registered successfully");
    }
  }
  else{
    res.status(400).json({ errorMessage: "Email and Password Required!" });
  }
  } catch (error) {
    console.error(error);
    res.status(500).json({ errorMessage: "Error registering user." });
  }
});
app.post("/signin", async function (req, res) {
  try {
    const { email, password } = req.body;
    const registeredUser = await User.findOne({ email: email });
    if (registeredUser) {
      const isPasswordValid = await bcrypt.compare(password, registeredUser.password);
      if (isPasswordValid === true) {
        req.session.userId = registeredUser._id; // Store user ID in the session
        res.status(200).json({message: "User logged in successfully" });
        console.log("User logged in successfully");
      } else {
        res.status(400).json({ errorMessage: "Invalid email or password" });
      }
    } else {
      res.status(400).json({ errorMessage: "User not registered" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ errorMessage: "Error logging in user." });
  }
});
app.get("/get-user",async function(req,res) {
  try {
    const user = await User.findOne({_id: req.session.userId});
    console.log(user);
    res.status(200).json({user: user});
  } catch (error) {
    console.error(error);
    res.status(500).json({errorMessage: "Error getting user details."});
  }
})
app.post('/save-messages', async (req, res) => {
    const { text } = req.body;
  
    try {
      const newMsg = new Message({
        type: 'user-msg',
        text: text,
      });
      await newMsg.save();
      res.status(201).json({ message: 'Message created successfully' });
    } catch (error) {
      console.error('Error creating message:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  app.get('/get-messages', async (req, res) => {
    try {
      // Fetch messages from the database
      const messages = await Message.find().exec();
      
      // Send the messages as JSON response
      res.json({ messages });
    } catch (error) {
      console.error('Error fetching messages:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});