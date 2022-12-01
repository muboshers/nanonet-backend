export const createMiddleWare = async (
  req,
  res,
  model,
  message,
  succesMessage,
  fileName
) => {
  try {
    const post = req.body;
    await model.create({
      title: post.title,
      creator: post.creator,
      description: post.description,
      blogImage: fileName,
    });
    res.status(200).json({ message: succesMessage });
  } catch (error) {
    return res.status(500).json({ message: `${message} ${error.message}` });
  }
};
