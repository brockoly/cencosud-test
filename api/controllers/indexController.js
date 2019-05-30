exports.index = async (req, res) => {
  const data = {
    title: 'Cencosud Test'
  }
  res
    .status(200)
    .send(data);
};
