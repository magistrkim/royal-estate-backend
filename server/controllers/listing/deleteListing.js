import Listing from "../../models/listing.js";
import errorHandler from "../../helpers/errorHandler.js";

const deleteListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);

  if (!listing) {
    return next(errorHandler(404, "Listing not found!"));
  }
  if (req.user.id !== listing.userRef) {
    return next(
      errorHandler(401, "You are able to remove only your own listing!")
    );
  }
  try {
      await Listing.findByIdAndDelete(req.params.id);
      res.status(200).json("Listing has been deleted!")
  } catch (error) {
    next(error);
  }
};

export default deleteListing;
