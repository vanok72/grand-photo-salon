import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import SearchBookFrom from '../forms/SearchBookForm/SearchBookForm';
import BookForm from '../forms/BookForm/BookForm';
import { createBook } from '../../actions/books';

class NewBookPage extends Component {
  state = {
    book: null,
  };

  onBookSelect = book => {
    this.setState({ book });
    axios
      .get(`/api/books/fetchPages?goodreadsId=${book.goodreadsId}`)
      .then(res => res.data.pages)
      .then(pages => this.setState({ book: { ...book, pages } }));
  };

  addBook = book =>
    this.props.createBook(book).then(() => this.props.history.push('/HomeUser'));

  render() {
    return (
      <div>
        <React.Fragment>
          <h1>Add new book to your collection</h1>
          <SearchBookFrom onBookSelect={this.onBookSelect} />

          {this.state.book && <BookForm submit={this.addBook} book={this.state.book} />}
        </React.Fragment>
      </div>
    );
  }
}

NewBookPage.propTypes = {
  createBook: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(
  null,
  { createBook },
)(NewBookPage);
