import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Posts = mongoose.model('Posts', PostSchema);
export default Posts;
