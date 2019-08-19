import { combineReducers } from 'redux';
import user from './reducers/user';
import books from './reducers/books';
import characters from './reducers/characters';
import locale from './reducers/locale';
import formErrors from './reducers/formErrors';

export default combineReducers({
  user,
  books,
  characters,
  locale,
  formErrors,
});
