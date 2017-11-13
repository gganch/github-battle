var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;
<<<<<<< HEAD
=======
var PlayerPreview = require('./PlayerPreview');
>>>>>>> eeafc4bfaf12ca1a9af593eed74d6b6e12bc65f1

function PlayerPreview (props) {
  return (
    <div>
      <div className='column'>
        <img
          className='avatar'
          src={props.avatar}
          alt={'Avatar for ' + props.username}
        />
        <h2 className='username'>@{props.username}</h2>
      </div>
      <button
        className='reset'
<<<<<<< HEAD
        onClick={props.onReset.bind(null, props.id)}>
=======
        onClick={props.onReset.bind(null, 'playerTwo')}>
>>>>>>> eeafc4bfaf12ca1a9af593eed74d6b6e12bc65f1
          Reset
      </button>
    </div>
  )
}

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
<<<<<<< HEAD
  id: PropTypes.string.isRequired
=======
>>>>>>> eeafc4bfaf12ca1a9af593eed74d6b6e12bc65f1
};

class PlayerInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    var value = event.target.value;

    this.setState(function () {
      return {
        username: value
      }
    });
  }
  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(
      this.props.id,
      this.state.username
    );
  }
  render() {
    return (
      <form className='column' onSubmit={this.handleSubmit}>
        <label className='header' htmlFor='username'>{this.props.label}</label>
        <input
          id='username'
          placeholder='github username'
          type='text'
          value={this.state.username}
          autoComplete='off'
          onChange={this.handleChange}
        />
        <button
          className='button'
          type='submit'
          disabled={!this.state.username}>
            Submit
        </button>
      </form>
    )
  }
}

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

PlayerInput.defaultProps = {
  label: 'Username',
}

class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
<<<<<<< HEAD
		this.handleReset = this.handleReset.bind(this);
=======
    this.handleReset = this.handleReset.bind(this);
>>>>>>> eeafc4bfaf12ca1a9af593eed74d6b6e12bc65f1
  }
  handleSubmit(id, username) {
    this.setState(function () {
      var newState = {};
      newState[id + 'Name'] = username;
      newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200'
      return newState;
    });
  }
  handleReset(id) {
    this.setState(function () {
      var newState = {};
      newState[id + 'Name'] = '';
      newState[id + 'Image'] = null;
      return newState;
    })
  }
  render() {
<<<<<<< HEAD
		var match = this.props.match;
=======
    var match = this.props.match;
>>>>>>> eeafc4bfaf12ca1a9af593eed74d6b6e12bc65f1
    var playerOneName = this.state.playerOneName;
    var playerOneImage = this.state.playerOneImage;
    var playerTwoName = this.state.playerTwoName;
    var playerTwoImage = this.state.playerTwoImage;

    return (
      <div>
        <div className='row'>
          {!playerOneName &&
            <PlayerInput
              id='playerOne'
              label='Player One'
              onSubmit={this.handleSubmit}
            />}

          {playerOneImage !== null &&
            <PlayerPreview
              avatar={playerOneImage}
              username={playerOneName}
<<<<<<< HEAD
              onReset={this.handleReset}
              id='playerOne'
            />}
=======
            >
				<button
				  className='reset'
				  onClick={this.handleReset.bind(null, 'playerOne')}>
					Reset
				</button>
			</PlayerPreview>}
>>>>>>> eeafc4bfaf12ca1a9af593eed74d6b6e12bc65f1

          {!playerTwoName &&
            <PlayerInput
              id='playerTwo'
              label='Player Two'
              onSubmit={this.handleSubmit}
            />}

          {playerTwoImage !== null &&
            <PlayerPreview
              avatar={playerTwoImage}
              username={playerTwoName}
<<<<<<< HEAD
              onReset={this.handleReset}
              id='playerTwo'
            />}
=======
			  >
  				<button
  				  className='reset'
  				  onClick={this.handleReset.bind(null, 'playerTwo')}>
  					Reset
  				</button>
  			</PlayerPreview>}
>>>>>>> eeafc4bfaf12ca1a9af593eed74d6b6e12bc65f1
        </div>

        {playerOneImage && playerTwoImage &&
          <Link
            className='button'
            to={{
              pathname: match.url + '/results',
              search: '?playerOneName=' + playerOneName + '&playerTwoName=' + playerTwoName
            }}>
              Battle
<<<<<<< HEAD
          </Link>}
=======
          </Link>
	  	}
>>>>>>> eeafc4bfaf12ca1a9af593eed74d6b6e12bc65f1
      </div>
    )
  }
}

module.exports = Battle;
