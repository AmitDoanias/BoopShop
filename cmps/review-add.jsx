import { bookService } from "../services/book.service.js"

export class ReviewAdd extends React.Component {
    state = {
        fullName: 'Books Reader',
        rate: '',
        readAt: '',
        textArea: ''

    }

    handleChange = ({ target }) => {
        const value = (target.type === 'number ') ? +target.value : target.value
        const field = target.name
        this.setState((prevState) => ({ ...prevState, [field]: value }))
    }

    onSaveReview = (ev) => {
        ev.preventDefault()
        const bookId = this.props.book.id
        const review = this.state
        bookService.saveReview(bookId, review)
            .then(this.props.updateReviews)
    }

    render() {

        const { fullName, readAt, rate, textArea } = this.state
        return <section className="review-add">
            <h2>Edit review</h2>
            <form onSubmit={this.onSaveReview}>

                <div className="user-name-container">
                    <label htmlFor="user-name">Name:</label>
                    <input type="text" id="user-name" placeholder="Full name" name="fullName"
                        value={fullName} onChange={this.handleChange} />
                </div>

                <div className="rate-container">
                    <select name="rate" value={rate} onChange={this.handleChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

                <div className="date-container">
                    <label htmlFor="readAt">Date:</label>
                    <input type="date" id="readAt" name="readAt"
                        value={readAt} onChange={this.handleChange} />
                </div>

                <div className="textArea">
                    <label htmlFor="textArea">Your experience:</label>
                    <input type="text" id="textArea" placeholder="write your opinion" name="textArea"
                        value={textArea} onChange={this.handleChange} />
                </div>

                <button>Save Review!</button>
            </form>


        </section >
    }
}