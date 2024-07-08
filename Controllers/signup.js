import User from "../Models/user";

const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // Check if the user already exists by email
    const existingUser = await User.findOne({ mail });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists with this email" });
    }

    // Create a new user
    const newUser = new User({
      username,
      password,
    });
    await newUser.save();

    console.log("User registered successfully");

    // Generate JWT token
    const token = newUser.generateAuthToken();
    console.log("Registration successful, token generated:", token);
    return res.json({ token });

    // return res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Error during registration:", err);
    return res.status(500).json({ message: err.message });
  }
};

export default register;
