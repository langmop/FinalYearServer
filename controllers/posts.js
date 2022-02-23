import PostMessage from "../model/postMessage.js";
export const getPosts = async (req, res) => {
  try {
    const allPosts = await PostMessage.find();
    res.status(200).json(allPosts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPosts = async (req, res) => {
  const newPost = new PostMessage(req.body);

  try {
    const saved = newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
