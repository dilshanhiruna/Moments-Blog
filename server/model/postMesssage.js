import mongoose from "mongoose";

const postShema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tag: [String],
  seletedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postShema);
export default PostMessage;
