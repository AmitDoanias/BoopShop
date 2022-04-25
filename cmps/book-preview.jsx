import { utilService } from '../services/util.service.js';

const { Link } = ReactRouterDOM

export function BookPreview({ book }) {
    const price = utilService.currenyIcon(book.listPrice.amount, book.listPrice.currencyCode)

    return <Link to={`/book/${book.id}`}>
        <article className="book-preview">
            <h3>Title : {book.title}</h3>
            <h3>Price : {price} </h3>
            <div className="img-container">
                <img src={`${book.thumbnail}`} />
            </div>
        </article>
    </Link>
}



