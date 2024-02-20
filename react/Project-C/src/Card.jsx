import Avatar from './assets/images.png'
function Card(props) {
    return (

        <div className="card m-auto mb-5 " style={{ borderRadius: '5px', width: '16rem', height: '16rem', boxShadow: '2px 2px 20px #0000005e' }}>
            <img src={Avatar} className="card-img-top mt-4" alt="..." style={{ height: '40%', width: '40%', margin: 'auto', backgroundColor: '#fb8938d7' }} />
            <div className="card-body ">
                <h5 className="card-title mb-4">{props.name}</h5>
                <button className='btn btn-dark ' style={{ width: '70%' }}><b>Login</b></button>
            </div>
            {/* <hr/> */}
        </div>

    )
}
export default Card