import drinkDB from '../api';

interface FormSearch {
  name: string;
  category: string;
}

export default {
  getCategory() {
    return drinkDB.get('/list.php?c=list');
  },

  searchRecibes({ category, name }: FormSearch) {
    return drinkDB.get(`/filter.php?c=${category}&i=${name}`);
  },
};
