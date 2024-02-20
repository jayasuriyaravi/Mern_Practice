// import logo from './assets/REC-Chennai-Logo.webp'
function Footer() {
    return (
        <>
            {/* <h1>heloo</h1> */}
            <div className="container-fluid bg-dark text-white text-center py-3">
                <div className="row p-5 ">
                    <div className="col-md-4">
                        <h5>About Us</h5>
                        <p>To be an institution of excellence in Engineering, Technology and Management Education & Research. To provide competent and ethical professionals with a concern for society.</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact Information</h5>
                        <p>Rajalakshmi Engineering College,</p>
                        <p>Rajalakshmi Nagar Thandalam, Chennai - 602 105.</p>
                        <p>Phone : +91-44-67181111, 67181112</p>
                    </div>
                    <div className="col-md-4">
                        {/* <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li className="my-3"><a className="nav-link" href="#">Home</a></li>
                            <li className="my-3"><a className="nav-link" href="#">Products</a></li>
                            <li className="my-3"><a className="nav-link" href="#">About Us</a></li>
                            <li className="my-3"><a className="nav-link" href="#">Contact Us</a></li>
                        </ul> */}
                        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4258203018458!2d80.0008945751463!3d13.008533387310264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528c9ebac84723%3A0x18e2bf88dfefa3ed!2sRajalakshmi%20Engineering%20College!5e0!3m2!1sen!2sin!4v1708447657167!5m2!1sen!2sin" allowfullscreen="" loading="lazy" ></iframe>

                    </div>
                </div>
                <hr />
                <p>&copy; Rajalakshmi Engineering College</p>

            </div>
        </>
    );
}
export default Footer;