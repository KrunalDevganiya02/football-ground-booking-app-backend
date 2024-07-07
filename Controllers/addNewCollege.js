import { College } from "../Models/college.js";

const addNewCollege = async (req, res) => {
  try {
    const { collegeName } = req.body;
    const newCollege = new College({ collegeName });

    await newCollege.save();
    return res
      .status(201)
      .send({ message: "College saved successfully", college: newCollege });
  } catch (error) {
    return res.status(500).send(error);
  }
};

export { addNewCollege };
