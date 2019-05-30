const axios = require('axios');

module.exports.getHouses = async (page, amount) => {
  try {
    const config = {
      timeout: 30000,
      baseURL: 'https://gentle-depths-31470.herokuapp.com/houses',
      rejectUnauthorized: false,
      strictSSL: false,
    };
    
    const url = `/${page}/${amount}`;
  
    const request = axios.create(config);
  
    const { data } = await request.get(url);
    return data;
  } catch (e) {
    const data = {
      message: 'No se encuentra la información requerida',
      error: `Error: ${e}`
    }
    return data;
  }
}

module.exports.getCharacter = async (currentLord) => {
  try {
    const config = {
      timeout: 30000,
      baseURL: 'https://gentle-depths-31470.herokuapp.com/character',
      rejectUnauthorized: false,
      strictSSL: false,
    };
    
    const url = `/${currentLord}`;
  
    const request = axios.create(config);
  
    const { data } = await request.get(url);
    return data;
  } catch (e) {
    const data = {
      message: 'No se encuentra la información requerida',
      error: `Error: ${e}`
    }
    return data;
  }
}
