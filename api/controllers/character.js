const axios = require('axios');

const getCharacter = async (req, res) => {
  try {
    const { character } = req.params;
    const url = `https://www.anapioficeandfire.com/api/characters/${character}`;
    axios.get(url)
      .then((response) => {
        const characterInfo = [];
        characterInfo.push({
          name: response.data.name !== "" ? response.data.name : 'No record',
          gender: response.data.gender !== "" ? response.data.gender : 'No record',
          culture: response.data.culture !== "" ? response.data.culture : 'No record',
          born: response.data.born !== "" ? response.data.born : 'No record',
          died: response.data.died !== "" ? response.data.died : 'No record',
          titles: response.data.titles !== "" ? response.data.titles : 'No record',
          aliases: response.data.aliases.length > 0 ? response.data.aliases : 'No record',
          father: response.data.father !== "" ? response.data.father : 'No record',
          mother: response.data.mother !== "" ? response.data.mother : 'No record',
          spouse: response.data.spouse !== "" ? response.data.spouse : 'No record',
          allegiances: response.data.allegiances.length > 0 ? response.data.allegiances : 'No record'
        });
        res.status(200).send(characterInfo);
      })
      .catch((error) => {
        res.status(400).send({
            gender: null,
            culture: null,
            born: null,
            died: null,
            titles: null,
            aliases: null,
            father: null,
            mother: null,
            spouse: null,
            allegiances: nulls
          });
      });
  } catch (e) {
    res.status(500).send(e);
  }
}

module.exports = {
    getCharacter
}
