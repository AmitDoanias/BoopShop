import { bookService } from '../services/book.service.js'


import { BookList } from '../cmps/book-list.jsx'
import { BookFilter } from '../cmps/book-filter.jsx'
// import { BookDetails } from '../cmps/book-details-old.jsx'

export class BookApp extends React.Component {

    state = {
        books: [],
        filterBy: null,
        // selectedBook: null
    }

    componentDidMount() {
        this.loadBooks()
    }

    loadBooks = () => {
        bookService.query(this.state.filterBy)
            .then(books => this.setState({ books }))
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => {
            this.loadBooks()
        })
    }



    render() {
        const { books, filterBy, selectedBook } = this.state
        return <section className="book-app">
            {!selectedBook && <BookFilter onSetFilter={this.onSetFilter} />}
            {!selectedBook && <BookList books={books} onSelectBook={this.onSelectBook} />}
            {selectedBook && <BookDetails book={selectedBook} onUnSelectBook={() => { this.onUnSelectBook(null) }} />}

        </section>
    }
}
