import { createSelector } from 'reselect';
import { BOOKS_FETCHED, BOOKS_CREATED } from '../types';

export default function books(state = {}, action = {}) {
  switch (action.type) {
    case BOOKS_FETCHED:
    case BOOKS_CREATED:
      return { ...state, ...action.data.entities.books };
    default:
      return state;
  }
}

//SELECTORS

export const booksSelector = state => state.books;

export const allBooksSelector = createSelector(
  booksSelector,
  booksHash => Object.keys(booksHash).map(itm => booksHash[itm]),
);

// export const allBooksSelector = createSelector(
//     booksSelector, tags
//     booksHash, tags
// )
