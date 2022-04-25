import { utilService } from "../services/util.service.js"
import { bookService } from "../services/book.service.js"
import { LongTxt } from "../cmps/book-long-txt.jsx"
import { ReviewAdd } from "../cmps/review-add.jsx"
import { ReviewList } from "../cmps/review-list.jsx"

export class BookDetails extends React.Component {
    state = {
        book: null,
        isLongTxtShown: false,
    }
    componentDidMount() {
        this.loadBook()
    }

    loadBook = () => {
        const { bookId } = this.props.match.params
        bookService.getById(bookId)
            .then(book => this.setState({ book }))
    }

    getPriceColor = () => {
        if (this.state.book.listPrice.amount > 150) return 'red-price'
        else if (this.state.book.listPrice.amount < 20) return 'green-price'
    }

    onSetTxtShown = () => {
        const { isLongTxtShown } = this.state
        this.setState({ isLongTxtShown: !isLongTxtShown })
    }

    onGoBack = () => {
        this.props.history.push('/book')
    }

    updateReviews = (book) => {
        this.setState({ book })

    }

    // onRemoveReview = (idx) => {
    //     console.log('onRemoveReview', idx)
    // }


    pageCount = () => { return utilService.pageCount(this.state.book.pageCount) }
    publishDate = () => { return utilService.publishDate(this.state.book.publishedDate) }
    getCurrenyCode = () => { return utilService.currenyIcon(this.state.book.listPrice.amount, this.state.book.listPrice.currencyCode) }

    render() {

        const { book } = this.state
        if (!book) return <div>Loading....</div>
        const { title, authors, categories, description, thumbnail, language, pageCount, publishedDate } = book
        const { isOnSale } = book.listPrice
        return < section className="books-container" >
            <div className="book-details">
                <p>Title : {title}</p>
                <p>Authors : {authors} </p>
                <p>Catgories : {categories}</p>
                <p>Page count : {pageCount} - {this.pageCount()}</p>
                <div className="img-container">
                    <img src={`${thumbnail}`} />
                </div>
                <p>Language : {language}</p>
                <p>PublishedDate : {publishedDate} - {this.publishDate()}</p>
                <p className={this.getPriceColor()}>Price : {this.getCurrenyCode()}</p>
                {isOnSale && <p>This book is on sale</p>}

                <LongTxt text={description} isLongTxtShown={this.state.isLongTxtShown} onSetTxtShown={this.onSetTxtShown} />
            </div>

            <div className="reviews-container">
                <ReviewAdd book={book} updateReviews={this.updateReviews} />
                {book.reviews.length !== 0 && <ReviewList book={book} reviews={book.reviews} updateReviews={this.updateReviews} />}
                <button className="btn-back" onClick={this.onGoBack}>Go Back!</button>
            </div>
        </section >
    }
}


