import errorHandler from "../../helpers/errorHandler.js";
import User from "../../models/user.js";

const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(
      errorHandler(401, "You are able to delete only your own account!")
    );
  try {
    await User.findByIdAndDelete(req.params.id);
    res.clearCookie("access_token");
    res.status(200).json("User has been deleted!");
  } catch (error) {
    next(error);
  }
};

export default deleteUser;
