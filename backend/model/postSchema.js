import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required,
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

module.exports = mongoose.model('Post', PostSchema);
const Posts = mongoose.model('Posts', PostSchema);
export { Posts };
