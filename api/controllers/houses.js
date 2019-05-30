const axios = require('axios');
const getHouses = async (req, res) => {
  try {
    const { page, size } = req.params;
    const url = `https://www.anapioficeandfire.com/api/houses?page=${page}&pageSize=${size}`;
    axios.get(url)
      .then((response) => {
        const newHouses = []
        response.data.forEach((house) => {
          let currentLord = house.currentLord.replace(/\D/g, ''); // gets only current lord number
          newHouses.push({
            name: house.name,
            region: house.region,
            words: house.words,
            currentLord
          });
        });
        res.status(200).send(newHouses);
      })
      .catch((error) => {
        res.status(400).send({
          name: null,
          region: null,
          words: null,
          currentLord: null,
          error
        });
      });
  } catch (e) {
    res.status(500).send(e);
  }
}

module.exports = {
  getHouses
}
