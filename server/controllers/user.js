import User from "../models/User.js";

const postApiSignup = async (req, res) => {
  const { name, email, password, mobile, address, gender } = req.body;

  const signupObj = new User({
    name,
    email,
    password,
    mobile,
    address,
    gender,
  });
  const savedUser = await signupObj.save();

  responder({
    res,
    success: true,
    message: "user signup successfully..✅",
    data: savedUser,
  });
};

export { postApiSignup };
