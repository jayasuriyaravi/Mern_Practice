import img from './assects/img2.JPG'
import Button from './Button/Button.jsx';
import PropType from 'prop-types';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fas, far, fal } from '@awesome.me/kit-KIT_CODE/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faCog, faUser } from '@fortawesome/free-solid-svg-icons';
// import { faLinkedin } from '@fortawesome/free-solid-svg-icons';




function Card(props) {
    // Creating the object for the inline style in css
    const imgsty = {
        width: " 250px",
        borderRadius: "5px",
    }

    return (
        <div className="Card">
            {/* Image Src is imported in name of src and applied inside the src={img}  */}

            <img src={img} alt="" style={imgsty} />{/*here object is called in Style attribute for the inline style css*/}
            <div className="body">
                <h2 className="CardHeading">{props.Heading}</h2><b>{props.DOB}</b>
                <p className="des">Iam an student ,Studing in the Rajalakshmi Engineering college</p>
                <p>Interesed in <b>Web Devlopement</b></p>
                <div>
                    {/* <FontAwesomeIcon icon={faTwitter} /> */}
                    {/* <FontAwesomeIcon icon={faLinkedin} /> */}
                    <FontAwesomeIcon icon={faCoffee} style={{color:"blue"}}/>
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faCog} />
                </div>
                <Button />{/*button component imported and used */}
            </div>
        </div>
    );
}

Card.propTypes = {
    Heading: PropType.String,
    DOB: PropType.Number,
}
Card.defaultProps = {
    Heading: "Guest",
    DOB: 0,
}

export default Card