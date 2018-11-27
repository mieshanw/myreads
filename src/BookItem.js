import React from 'react'
import PropTypes from 'prop-types'

import MoveShelfButton from './MoveShelfButton'

function BookItem(props) {
	const { book, changeShelf } = props;

	return (
		<article 
			className="book-item">
			<h3>{book.title}</h3>
			<p>{book.authors}</p>

			<div className="book-main-display">
				<img
					src={book.imageLinks ? book.imageLinks.thumbnail : ""}
					alt={book.title}
				/>
				<div className="book-interaction">
					<MoveShelfButton 
						shelfName="Reading"
						currentShelf={book.shelf}
						shelf="currentlyReading"
						changeShelf={changeShelf}
						book={book}
					/>
					<MoveShelfButton 
						shelfName="Want to"
						currentShelf={book.shelf}
						shelf="wantToRead"
						changeShelf={changeShelf}
						book={book}
					/>
					<MoveShelfButton 
						shelfName="Read"
						currentShelf={book.shelf}
						shelf="read"
						changeShelf={changeShelf}
						book={book}
					/>
					<MoveShelfButton 
						shelfName="None"
						currentShelf={book.shelf}
						shelf='none'
						changeShelf={changeShelf}
						book={book}
					/>
				</div>
			</div>
		</article>
	);
}

BookItem.propTypes = {
	book: PropTypes.object.isRequired
}

export default BookItem