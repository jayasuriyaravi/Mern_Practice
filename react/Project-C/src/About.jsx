import clg from './assets/banner.jpg'
function About(){

    return(
    <section id="about" className="bg-body-secondary">
        <div className="container-fluid ">
            <div className="row p-5  align-items-center  ">
                <div className="col-md p-5  ">
                    <img src={clg} alt="" className="img-fluid "/>
                </div>
                <div className="col-md p-5 text-center">
                    <h1>About Balancing ScoreBoard</h1>
                        <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, exercitationem. Rem quas quibusdam saepe officia magnam officiis ex expedita nobis libero dignissimos cumque exercitationem ducimus, consequatur, tempora quae recusandae culpa.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, exercitationem. Rem quas quibusdam saepe officia magnam officiis ex expedita nobis libero dignissimos cumque exercitationem ducimus, consequatur, tempora quae recusandae culpa.</p>
                </div>
            </div>
        </div>
    </section>
);
}
export default About