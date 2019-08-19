import React from 'react';
import PropTypes from 'prop-types';
import { fadeIn } from 'react-animations';
import * as glamor from 'glamor';
import glamorous from 'glamorous';
import { connect } from 'react-redux';
import { Nav } from 'react-bootstrap';
import { charactersSelector } from '../../../reducers/characters';

const FadeInDiv = glamorous.div({
  animation: `1s ${glamor.css.keyframes(fadeIn)}`,
});

class NewCharacterPage extends React.Component {
  state = {
    step: 1,
  };

  render() {
    return (
      <div>
        <Nav className="nav nav-pills nav-justified">
          <button
            className={`nav-item nav-link ${this.state.step === 1 ? 'active' : ''}`}
            onClick={() => this.setState({ step: 1 })}
          >
            <h1>step 1</h1>
            <p>Race</p>
          </button>
          <button
            className={`nav-item nav-link ${this.state.step === 2 ? 'active' : ''}`}
            onClick={() => this.setState({ step: 2 })}
          >
            <h1>step 2</h1>
            <p>Class</p>
          </button>
          <button
            className={`nav-item nav-link ${this.state.step === 3 ? 'active' : ''}`}
            onClick={() => this.setState({ step: 3 })}
          >
            <h1>step 3</h1>
            <p>Background</p>
          </button>
          <button
            className={`nav-item nav-link ${this.state.step === 4 ? 'active' : ''}`}
            onClick={() => this.setState({ step: 4 })}
          >
            <h1>step 4</h1>
            <p>Action</p>
          </button>
          <button
            className={`nav-item nav-link ${this.state.step === 5 ? 'active' : ''}`}
            onClick={() => this.setState({ step: 5 })}
          >
            <h1>step 5</h1>
            <p>Name</p>
          </button>
        </Nav>

        <div>
          {this.state.step === 1 && (
            <FadeInDiv>
              <h2>STEP 1</h2>
            </FadeInDiv>
          )}
          {this.state.step === 2 && (
            <FadeInDiv>
              <h2>STEP 2</h2>
            </FadeInDiv>
          )}
          {this.state.step === 3 && (
            <FadeInDiv>
              <h2>STEP 3</h2>
            </FadeInDiv>
          )}
          {this.state.step === 4 && (
            <FadeInDiv>
              <h2>STEP 4</h2>
            </FadeInDiv>
          )}
          {this.state.step === 5 && (
            <FadeInDiv>
              <h2>STEP 5</h2>
            </FadeInDiv>
          )}
        </div>
      </div>
    );
  }
}

NewCharacterPage.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function mapStateToProps(state) {
  return {
    characters: charactersSelector(state),
  };
}

export default connect(mapStateToProps)(NewCharacterPage);
