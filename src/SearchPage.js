import React from 'react'
import PropTypes from 'prop-types'

import SearchInput from './SearchInput'
import BookItem from './BookItem'

function SearchPage(props) {
	const { books, updateSearchedBooks, changeShelf } = props;

	return (
		<div className="search-page">
			<SearchInput updateSearchedBooks={updateSearchedBooks} />

			<ul className="search-books-container">
				{books.map((book) => (
					<li key={book.id}>
						<BookItem 
							book={book}
							changeShelf={changeShelf}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}

SearchPage.propTypes = {
	books: PropTypes.array.isRequired,
	updateSearchedBooks: PropTypes.func.isRequired,
	changeShelf: PropTypes.func.isRequired
}

export default SearchPage