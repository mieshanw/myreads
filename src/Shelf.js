import React from 'react'
import PropTypes from 'prop-types'

import BookItem from './BookItem'

function Shelf(props) {
	const { books, shelf, changeShelf } = props;

	return (
		<section className="shelf">
			<header className="shelf-header">
				<h2>{props.title}</h2>
			</header>

			<ul className="book-items-container">
				{books
					.filter((book) => book.shelf === shelf)
					.map((book) => (
						<li key={book.id}>
							<BookItem 
								book={book}
								changeShelf={changeShelf}
							/>
						</li>
				))}
			</ul>
		</section>
	);
}

Shelf.propTypes = {
	title: PropTypes.oneOf([
		'Currently Reading',
		'Want to Read',
		'Read'
	]).isRequired,
	books: PropTypes.array.isRequired,
	shelf: PropTypes.oneOf([
		'currentlyReading',
		'wantToRead',
		'read'
	]).isRequired,
	changeShelf: PropTypes.func.isRequired
}

export default Shelf