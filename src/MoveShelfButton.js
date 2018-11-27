import React from 'react'
import PropTypes from 'prop-types'

function MoveShelfButton(props) {
	const { shelfName, currentShelf, shelf, changeShelf, book } = props;
	const className = (currentShelf === shelf || 
		(currentShelf === undefined && shelf === 'none')) ?
	 ' active' : '';

	return (
		<button 
			className={`move-shelf-button${className}`}
			onClick={() => changeShelf(book, shelf)}
		>
			{shelfName}
		</button>
	);
}

MoveShelfButton.propTypes = {
	shelfName: PropTypes.oneOf([
		'Reading',
		'Want to',
		'Read',
		'None'
	]).isRequired,
	currentShelf: PropTypes.oneOf([
		'currentlyReading',
		'wantToRead',
		'read',
		undefined
	]),
	shelf: PropTypes.oneOf([
		'currentlyReading',
		'wantToRead',
		'read',
		'none'
	]),
	changeShelf: PropTypes.func.isRequired,
	book: PropTypes.object.isRequired
}

export default MoveShelfButton