import React from 'react'

export default class navBar extends React.Component {
    render() {
        return   <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="index.html">Home</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
        aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

    <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href="page1.html">Page 1</a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="page1.html">Page 2</a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="page1.html">Page 3</a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="page1.html">Page 4</a>
            </li>
        </ul>
    </div>
    </nav>
    }
}