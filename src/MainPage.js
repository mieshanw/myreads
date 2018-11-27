import React from 'react'
import PropTypes from 'prop-types'

import Shelf from './Shelf'

function MainPage(props) {
	const { books, changeShelf } = props;

	return (
		<div className="main-page">
			<Shelf 
				title="Currently Reading" 
				books={books}
				shelf="currentlyReading"
				changeShelf={changeShelf}
			/>
	        <Shelf 
	        	title="Want to Read" 
	        	books={books}
	        	shelf="wantToRead"
	        	changeShelf={changeShelf}
	        />
	        <Shelf 
	        	title="Read" 
	        	books={books}
	        	shelf="read"
	        	changeShelf={changeShelf}
	        />
		</div>
	);
}

MainPage.propTypes = {
	books: PropTypes.array.isRequired,
	changeShelf: PropTypes.func.isRequired
}

export default MainPage