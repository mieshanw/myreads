import React, { Component } from 'react'
import { Link } from 'react-router-dom'
/*import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'*/
import PropTypes from 'prop-types'

class SearchInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchQuery: ''
		};
	}

	updateQuery = (query) => {
		this.setState({ searchQuery: query });
		this.props.updateSearchedBooks(query)
	}

	render () {
		const { searchQuery } = this.state;

		return (
			<div className="search-field">
				<Link
					to="/"
					className="back-btn"
				><i className="fas fa-arrow-left"></i></Link>
				<form onSubmit={(event) => event.preventDefault()} >
					<input
						className="search-input"
						type="text"
						placeholder="Search Books..."
						value={searchQuery}
						onChange={(event) => 
							this.updateQuery(event.target.value)
						}
					/>
				</form>
			</div>
		);
	};
}

SearchInput.propTypes = {
	updateSearchedBooks: PropTypes.func.isRequired
}

export default SearchInput