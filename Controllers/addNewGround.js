import { Ground } from "../Models/ground.js";
import { College } from "../Models/college.js";

const addNewGround = async (req, res) => {
  try {
    const { collegeName, groundName, photoURL } = req.body;

    const college = await College.findOne({ collegeName });

    if (!college) {
      return res.status(404).send({ message: "College not found" });
    }

    const newGround = new Ground({ groundName, photoURL });
    await newGround.save();

    college.grounds.push(newGround._id);
    await college.save();

    res
      .status(201)
      .send({ message: "Ground added successfully", ground: newGround });
  } catch (error) {
    res.status(500).send({ message: "Error adding ground", error });
  }
};

export { addNewGround };
