import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Header from './Header'
import FooterNav from './FooterNav'
import MainPage from './MainPage'
import SearchPage from './SearchPage'

import * as BooksAPI from './BooksAPI'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedBooks: [],
      searchedBooks: []
    };
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ displayedBooks: books })
    })
  }

  updateSearchedBooks = (query) => {
    let searchedBooksShelf
    if (query) {
      BooksAPI.search(query).then(books => {
        if (books.error) {
          this.setState({ searchedBooks: [] })
        } else {
          searchedBooksShelf = books.map(book => {
            book.shelf = this.syncShelf(book);
            return book;
          })
          this.setState({ searchedBooks: searchedBooksShelf })
        }
      })
    } else {
      this.setState({ searchedBooks: [] })
    }
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    BooksAPI.getAll().then((books) => {
      this.setState({ displayedBooks: books })
    })
  }

  syncShelf = (book) => {
    let matchingShelf = this.state.displayedBooks.filter(displayedBook =>
      book.id === displayedBook.id
    )
    return matchingShelf.length ? matchingShelf[0].shelf : undefined
  }

  render () {
    const { displayedBooks, searchedBooks } = this.state;

    return (
      <div className="full-app">
        <Header />
        
        <Route 
          exact path="/fend-my-reads/" 
          render={() => (
            <MainPage 
              books={displayedBooks}
              changeShelf={this.changeShelf}
            />
          )}
        />
        <Route 
          path="/fend-my-reads/search" 
          render={() => (
            <SearchPage 
              books={searchedBooks}
              updateSearchedBooks={this.updateSearchedBooks}
              changeShelf={this.changeShelf}
            />
          )}
        />

        <FooterNav />
      </div>
    );
  }
}

export default App;
