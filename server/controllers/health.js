import { responder } from "../util.js";

const getApiHealth = async (req, res) => {
  responder({ res, success: true, message: "All Good...Server is running✅" });
};

export { getApiHealth };