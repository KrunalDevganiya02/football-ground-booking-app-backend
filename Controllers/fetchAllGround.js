import { College } from "../Models/college.js";

const fetchAllGround = async (req, res) => {
  try {
    const { collegeName } = req.body;
    const college = await College.findOne({ collegeName }).populate("grounds");
    console.log(college);

    if (!college) {
      return res.status(404).send({ message: "College not found" });
    }

    res.status(200).send(college);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error fetching college and grounds", error });
  }
};

export { fetchAllGround };
