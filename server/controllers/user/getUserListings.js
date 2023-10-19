import errorHandler from "../../helpers/errorHandler.js";
import Listing from "../../models/listing.js";

const getUserListings = async (req, res, next) => {
  if (req.user.id === req.params.id) {
    try {
      const listings = await Listing.find({ userRef: req.params.id });
      res.status(200).json(listings);
    } catch (error) {
      next(error);
    }
  } else {
    return next(errorHandler(401, "You can view only your own listings"));
  }
};

export default getUserListings;
