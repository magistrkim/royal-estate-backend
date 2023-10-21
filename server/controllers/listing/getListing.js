import Listing from "../../models/listing.js";
import errorHandler from "../../helpers/errorHandler.js";

const getListing = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return next(errorHandler(404, "Listing not found!"));
    }
    return res.status(200).json(listing);
  } catch (error) {
    next(error);
  }
};

export default getListing;
