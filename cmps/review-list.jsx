import { bookService } from "../services/book.service.js"

export function ReviewList({ book, reviews, updateReviews }) {


    //this function in ReviewList or BookDetails ?
    function onRemoveReview(idx) {
        const bookId = book.id
        const reviewIdx = idx
        bookService.removeReview(bookId, reviewIdx)
            .then(updateReviews)
    }
    return <section className="review-list">

        <h3>Users Reviews:</h3>
        {reviews && <ul>
            {reviews.map((reviews, idx) => {
                return <li key={idx}>Full Name : {reviews.fullName},Rate:{reviews.rate}
                    ,Date: {reviews.readAt},User Experience: {reviews.textArea}
                    <button onClick={() => onRemoveReview(idx)}>X</button></li>
            })}
        </ul>}

    </section>
}


{

}