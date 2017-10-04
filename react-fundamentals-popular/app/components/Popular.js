var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api.js');

function SelectLanguage (props) {
	var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

	return (
	<ul className="languages">
		{languages.map(function (lang) {
			return (
				<li
					style={lang === props.selectedLanguage ? { color: '#d0021b' }: null}
					onClick={props.onSelect.bind(null, lang)}
					key={lang}>
					{lang}
				</li>
			)
		})}
	</ul>
	)
}

function RepoGrid (props) {
	return (
		<ul className='popular-list'>
			{props.repos.map(function () {
				<li key={repo.name} className='popular-item'>

				</li>
			})}
		</ul>
	)
}

SelectLanguage.propTypes = {
	selectedLanguage: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired,
}

//3 things that encompass a component, state, lifecycle events, and the UI

class Popular extends React.Component {
	constructor (props) {
		super();
		this.state = {
			selectedLanguage: 'All',
			repos: null
		};

		this.updateLanguage = this.updateLanguage.bind(this);
	}

	componentDidMount () {
		this.updateLanguage(this.state.selectedLanguage);
	}

	updateLanguage(lang) {
		this.setState(function () {
			return {
				selectedLanguage: lang,
				repos: null,
			}
		});

		api.fetchPopularRepos(lang)
			.then(function (repos) {
				this.setState(function () {
					return {
						repos: repos
					}
				})
			}.bind(this));
	}
	render() {
		return (
			<div>
				<SelectLanguage
					selectedLanguage={this.state.selectedLanguage}
					onSelect={this.updateLanguage}
				/>
				<RepoGrid repos={this.state.repos} />
			</div>
		)
	}
}

module.exports = Popular;

// class Popular extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedLanguage: 'All',
//     };
//
//     this.updateLanguage = this.updateLanguage.bind(this);
//   }
//   updateLanguage(lang) {
//     this.setState(function () {
//       return {
//         selectedLanguage: lang,
//       }
//     });
//   }
//   render() {
//     var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
//
//     return (
//       <div>
//         <ul className='languages'>
//           {languages.map(function (lang) {
//             return (
//               <li
//                 style={lang === this.state.selectedLanguage ? {color: '#d0021b'} : null}
//                 onClick={this.updateLanguage.bind(null, lang)}
//                 key={lang}>
//                   {lang}
//               </li>
//             )
//           }, this)}
//         </ul>
//       </div>
//     )
//   }
// }
//
// module.exports = Popular;
