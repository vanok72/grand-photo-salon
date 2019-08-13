import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Form, Alert } from 'react-bootstrap';
import Loader from '../../Loader/Loader';

class SearchBookForm extends React.Component {
  state = {
    query: '',
    loading: false,
    option: [
      {
        key: 1,
        value: 1,
        text: 'first book',
      },
      {
        key: 2,
        value: 2,
        text: 'second book',
      },
    ],
    books: {},
  };

  onSelect = (text, value) => {
    this.setState({
      query: text,
    });

    this.props.onBookSelect(this.state.books[value]);
  };

  onSearchChange = e => {
    clearTimeout(this.timer);

    this.setState({
      query: e.target.value,
    });

    this.timer = setTimeout(this.fetchOptions, 1000);
  };

  fetchOptions = () => {
    if (!this.state.query) return;
    this.setState({ loading: true });
    axios
      .get(`/api/books/search?q=${this.state.query}`)
      .then(res => res.data.books)
      .then(books => {
        const options = [];
        const booksHash = [];
        books.forEach(book => {
          booksHash[book.goodreadsId] = book;
          options.push({
            key: book.goodreadsId,
            value: book.goodreadsId,
            text: book.title,
          });
        });
        this.setState({ loading: false, options, books: booksHash });
      });
  };

  preparedListFunc = (data, click) => {
    const searchQuery = this.state.query;
    const preparedData = data.filter(function(el) {
      var searchValue = el.text.toLowerCase();

      return searchValue.indexOf(searchQuery.toLowerCase()) !== -1;
    });

    return preparedData.map(function(el) {
      return (
        <li key={el.key} className="contact">
          <div onClick={() => click(el.text, el.value)}>{el.text}</div>
        </li>
      );
    });
  };

  render() {
    const { options } = this.state;

    const preparedList = options && this.preparedListFunc(options, this.onSelect);

    return (
      <Form>
        <Form.Group controlId="search">
          <Form.Label>Search for a book by title</Form.Label>
          <Form.Control
            autoComplete="off"
            type="text"
            name="search"
            value={this.state.query}
            onChange={this.onSearchChange}
            placeholder="search for a book by title"
          />
          {preparedList && <ul className="contacts-list">{preparedList}</ul>}
        </Form.Group>
      </Form>
    );
  }
}

SearchBookForm.propTypes = {
  onBookSelect: PropTypes.func.isRequired,
};

export default SearchBookForm;
