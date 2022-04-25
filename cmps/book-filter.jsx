export class BookFilter extends React.Component {

    state = {
        filterBy: {
            title: '',
            price: ''
        }
    }

    handleChange = ({ target }) => {
        const value = (target.type === 'number') ? +target.value : target.value
        const field = target.name
        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, [field]: value } }), () => {
            this.props.onSetFilter(this.state.filterBy)
        })
    }

    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }

    render() {
        const { title, price } = this.state.filterBy
        return <section className="book-filter">
            <form onSubmit={this.onFilter}>
                <label htmlFor="by-title">Book name</label>
                <input type="text" id="by-title" placeholder="by name" name="title"
                    value={title} onChange={this.handleChange} />

                <label htmlFor="by-price">Book price</label>
                <input type="number" id="by-price" placeholder="by price" name="price"
                    value={price} onChange={this.handleChange} />

                <button className="filter-btn">FILTER!</button>
            </form>
        </section>


    }

}