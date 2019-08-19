import { createSelector } from 'reselect';
import { BOOKS_FETCHED, BOOKS_CREATED } from '../types';

export default function characters(state = {}, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

//SELECTORS

export const charactersHashSelector = state => state.characters;

export const charactersSelector = createSelector(
  charactersHashSelector,
  hash => Object.keys(hash).map(itm => hash[itm]),
);
