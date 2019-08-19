import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ConfirmEmailMessage from '../../messages/ConfirmMessage/ConfirmMessage';
import { charactersSelector } from '../../../reducers/characters';
import AddBookCta from '../../AddBookCta/AddBookCta';
import { fetchBooks } from '../../../actions/books';

const CharactersPage = ({ characters }) => (
  <div>
    {characters.length === 0 && (
      <div>
        <div className="alert alert-info">You have no characters tey. Add one?</div>
        <Link className="btn btn-primary" to="/characters/new">
          create new character
        </Link>
      </div>
    )}
  </div>
);

CharactersPage.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function mapStateToProps(state) {
  return {
    characters: charactersSelector(state),
  };
}

export default connect(mapStateToProps)(CharactersPage);
