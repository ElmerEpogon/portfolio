import profile from '../images/profile.png';
function Home() {
    return(
        <main>
            <div className="container py-2">
                
                <div className="card mb-3 border-0 py-0">
                    <div className="row g-5">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-body-secondary"></small></p>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 order-1 order-lg-2 img-profile ">
                        <img src={profile} className="img-fluid rounded-5 border" alt="Elmer Epogon Profile "/>
                        </div>
                    </div>
                </div>
                
            </div>
       </main>
    );
}
export default Home;