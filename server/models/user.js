import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://wallpapers.com/images/hd/cool-profile-picture-ld8f4n1qemczkrig.jpg",
    },
  },
  { versionKey: false, timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
