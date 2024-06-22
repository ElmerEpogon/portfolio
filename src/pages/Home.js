import webicodehelp from '../images/webicodehelp.png';
import profile from '../images/profile.png';
import rfid from '../images/rfid.png';
function Home() {
    return(
        <main>
            <div className="container py-2">
                
                <div className="card mb-3 border-0 py-0">
                    <div className="row g-5 mt-10">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="card-body">
                                <h5 className="card-title mt-12"><b className='text-black fw-bold'>Elmer Epogon</b>-IT Graduates</h5>
                                <p className="card-text"> Passionate about Software Development and Innovative Tech Solutions, eager to apply my skills to real-world challenges.</p>
                                <p className="card-text"><small className="text-body-secondary"></small></p>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 order-1 order-lg-2 img-profile">
                            <img src={profile} className="img-fluid rounded-5 border" alt="Elmer Epogon Profile "/>
                        </div>
                    </div>
                </div>
            </div>
            <div id='projects' >
                <div className='container px-4 pt-5'>
                    <div className='row mt-11'>
                        <div className='col-6'>
                            <h1 className='fs-10 bold-700'>Recent<br></br>Projects</h1>
                        </div>
                        <div className='col-6 d-flex justify-content-center align-items-center'>
                            <a href='./project' className='btn bg-white view-project shadow'><i className='bi bi-arrow-up-right-square'></i> View All</a>
                        </div>
                    </div>
                    <div className='row gap-2'>
                        <div className='col col-12 bg-dark mt-4 overflow-hidden position-relative'>
                            <a href='https://elmerepogon.github.io/' target='_blank' rel="noreferrer">
                                <div className='p-5 position-absolute top-25 start-25'>
                                    <h3 className='text-white fw-bold text-title'><i>I</i>-CodeHELP</h3>
                                </div>
                                <div className='project-image '>
                                    <img src={webicodehelp}  className='transform-image float-end p-5' alt="I-CodeHELP" />
                                </div>
                            </a>
                        </div>
                        <div className='col bg-dark mt-4 overflow-hidden position-relative'>
                            <a href={rfid} rel="noreferrer" target='_blank'>
                                <div className='p-5 position-absolute top-25 start-25'>
                                    <h3 className='text-white fw-bold text-title-1'>Attendance Monitoring</h3>
                                </div>
                                <div className='project-image '>
                                    <img src={rfid}  className='transform-image float-end p-5' alt="RFID" />
                                </div>
                            </a>
                        </div>
                        <div className='col bg-dark mt-4 overflow-hidden position-relative'>
                            <a href='https://elmerepogon.github.io/' target='_blank' rel="noreferrer">
                                <div className='p-5 position-absolute top-25 start-25'>
                                    <h2 className='text-white fw-bold text-title-1'><i>I</i>-CodeHELP</h2>
                                </div>
                                <div className='project-image '>
                                    <img src={webicodehelp}  className='transform-image float-end p-5' alt="I-CodeHELP" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
       </main>
    );
}
export default Home;