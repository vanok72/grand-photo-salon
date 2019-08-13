import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Alert, Figure } from 'react-bootstrap';
import Loader from '../../Loader/Loader';

class BookForm extends React.Component {
  state = {
    data: {
      goodreadsId: this.props.book.goodreadsId,
      title: this.props.book.title,
      authors: this.props.book.authors,
      cover: this.props.book.covers[0],
      pages: this.props.book.pages,
    },
    covers: this.props.book.covers,
    index: 0,
    loading: false,
    errors: {},
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });

  onChangeNumber = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: parseInt(e.target.value, 10) },
    });

  onSubmit = event => {
    event.preventDefault();
    event.stopPropagation();

    const errors = this.validate(this.state.data);
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false }),
        );
    }
  };

  componentWillReceiveProps(props) {
    this.setState({
      data: {
        goodreadsId: props.book.goodreadsId,
        title: props.book.title,
        authors: props.book.authors,
        cover: props.book.covers[0],
        pages: props.book.pages,
      },
      covers: props.book.covers,
    });
  }

  validate = data => {
    const errors = {};
    if (!data.title) errors.title = "Can't be blank";
    if (!data.authors) errors.authors = "Can't be blank";
    if (!data.pages) errors.pages = "Can't be blank";
    return errors;
  };

  changeCover = () => {
    const { index, covers } = this.state;
    const newIndex = index + 1 >= covers.length ? 0 : index + 1;
    this.setState({
      index: newIndex,
      data: { ...this.state.data, cover: covers[newIndex] },
    });
  };

  render() {
    const { data, errors, loading } = this.state;

    return (
      <Form onSubmit={this.onSubmit}>
        {loading && <Loader isUseWall />}
        {errors.global && (
          <Alert key="book_1_key" variant="danger">
            <Alert.Heading>Something went wrong! You got an error!</Alert.Heading>
            <p>{errors.global}</p>
          </Alert>
        )}
        <Form.Group controlId="title">
          <Form.Label>Book title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={data.title}
            onChange={this.onChange}
            isInvalid={!!errors.title}
            placeholder="title"
          />
          <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="authors">
          <Form.Label>Book authors</Form.Label>
          <Form.Control
            name="authors"
            type="text"
            value={data.authors}
            onChange={this.onChange}
            isInvalid={!!errors.authors}
            placeholder="authors"
          />
          <Form.Control.Feedback type="invalid">{errors.authors}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="pages">
          <Form.Label>Book pages</Form.Label>
          <Form.Control
            disabled={data.pages === undefined}
            name="pages"
            type="text"
            value={data.pages !== undefined ? data.pages : 'Loading...'}
            onChange={this.onChangeNumber}
            isInvalid={!!errors.pages}
          />
          <Form.Control.Feedback type="invalid">{errors.pages}</Form.Control.Feedback>
        </Form.Group>

        <Figure>
          <Figure.Image width={171} height={180} alt="171x180" src={data.cover} />
        </Figure>

        {this.state.covers.length > 1 && (
          <a role="button" tabIndex={0} onClick={this.changeCover}>
            Another cover
          </a>
        )}

        <Button variant="outline-success" type="submit">
          Save
        </Button>
      </Form>
    );
  }
}

BookForm.propTypes = {
  submit: PropTypes.func.isRequired,
  book: PropTypes.shape({
    goodreadsId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.string.isRequired,
    covers: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    pages: PropTypes.number,
  }).isRequire,
};

export default BookForm;
