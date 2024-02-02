import axios from 'axios';

const drinkDB = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1',
});

export default drinkDB;
