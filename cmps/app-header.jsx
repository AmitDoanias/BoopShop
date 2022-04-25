const { Link, NavLink, withRouter } = ReactRouterDOM

function _AppHeader(props) {
    return <header className="app-header">
        <h4>The Bookworm Shack</h4>

        <nav>
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/book" activeClassName="my-active">Our Books</NavLink>
        </nav>
    </header>
}


export const AppHeader = withRouter(_AppHeader)