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

const postApiLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      responder({
        res,
        success: false,
        message: "please enter valid email or password...!",
      });
    }

    const findUser = await User.findOne({
      email: email,
      password: password,
    }).select("name email mobile address gender");
    if (!findUser) {
      responder({
        res,
        success: false,
        message: "user not found",
      });
    }
    responder({
      res,
      success: true,
      data: findUser,
      message: "user login successfully...",
    });
  } catch (err) {
    responder({
      res,
      success: false,
      message: err.message,
    });
  }
};

export { postApiSignup, postApiLogin };
