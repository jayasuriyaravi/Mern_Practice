import logo from './assets/REC-Chennai-Logo.webp'
function Navbar() {
    return (
        <div >
            <nav className="navbar navbar-expand-lg bg-body-tertiary  " >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" width="40" height="40" className="d-inline-block align-text-top me-3 " />
                        Rajalakshmi Engineering College
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mx-auto pe-5 " id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item m-2 ">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Part 1
                                </a>
                            </li>
                            <li className="nav-item m-2">
                                <a className="nav-link" href="#">
                                    Part 2
                                </a>
                            </li>
                            <li className="nav-item m-2">
                                <a className="nav-link" href="#">
                                    Part 3
                                </a>
                            </li>
                            <li className="nav-item m-2">
                                <a className="nav-link" href="">
                                    Part 4
                                </a>
                            </li>
                             <li className="nav-item m-2">
                                <a className="nav-link" href="">
                                    Part 5
                                </a>
                            </li>
                            <li className="nav-item m-2">
                                <a className="nav-link" href="">
                                    Report
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;