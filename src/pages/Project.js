import webicodehelp from '../images/webicodehelp.png';
import rfid from '../images/rfid.png';
function Project() {
    return(
        <main>
            <div className="container py-2">
            <p className="text-base fs-10 fw-bold">Projects</p>
            </div>
            <div id='projects' >
                <div className='container px-4 pt-5'>
                    <div className='row gap-2'>
                        <div className='col-12 bg-dark mt-4 overflow-hidden position-relative'>
                            <a href='https://elmerepogon.github.io/' target='_blank' rel="noreferrer">
                                <div className='p-5 position-absolute top-25 start-25'>
                                    <h3 className='text-white fw-bold text-title'><i>I</i>-CodeHELP</h3>
                                </div>
                                <div className='project-image '>
                                    <img src={webicodehelp}  className='transform-image float-end p-5' alt="I-CodeHELP" />
                                </div>
                            </a>
                        </div>
                        <div className='col-12 bg-dark mt-4 overflow-hidden position-relative'>
                            <a href={rfid} rel="noreferrer" target='_blank'>
                                <div className='p-5 position-absolute top-25 start-25'>
                                    <h3 className='text-white fw-bold text-title-1'>Attendance Monitoring</h3>
                                </div>
                                <div className='project-image '>
                                    <img src={rfid}  className='transform-image float-end p-5' alt="RFID" />
                                </div>
                            </a>
                        </div>
                        <div className='col-12 bg-dark mt-4 overflow-hidden position-relative'>
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
                    <div className='row mt-11'>
                        <div className='col m-5'>
                            <h1 className='text-center fs-7'>Others on progress...</h1>
                        </div>
                    </div>
                </div>
            </div>
       </main>
    );
}
export default Project;