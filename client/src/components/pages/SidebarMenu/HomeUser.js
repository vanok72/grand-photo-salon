import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ConfirmEmailMessage from '../../messages/ConfirmMessage/ConfirmMessage';
import { allBooksSelector } from '../../../reducers/books';
import AddBookCta from '../../AddBookCta/AddBookCta';
import { fetchBooks } from '../../../actions/books';

class HomeUser extends React.Component {
  componentDidMount = () => this.onInit(this.props);

  onInit = props => props.fetchBooks();

  render() {
    const { isConfirmed, books } = this.props;
    return (
      <div>
        {!isConfirmed && <ConfirmEmailMessage />}
        {books.length === 0 ? <AddBookCta /> : <p>You have books!</p>}
      </div>
    );
  }
}

HomeUser.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  fetchBooks: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed,
    books: allBooksSelector(state),
  };
}

export default connect(
  mapStateToProps,
  { fetchBooks },
)(HomeUser);
