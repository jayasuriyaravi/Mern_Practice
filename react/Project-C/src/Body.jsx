import Card from './Card.jsx'
function Body() {
    return (
        <div className="container">
            <div className="row text-center m-auto mt-5 ">

                <h1 className='mb-5'>Portals</h1>
                <div className="col">
                    <Card name="Principal" />
                </div>

                <div className="col">
                    <Card name="COE" />
                </div>

                <div className="col">
                    <Card name="HOD" />
                </div>

                <div className="col">
                    <Card name="HR" />
                </div>

            </div>
        </div>
    )
}

export default Body