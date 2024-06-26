
import dpwh1 from "../images/dpwh1.jpg";
import dpwh2 from "../images/dpwh2.jpg";
import dpwh3 from "../images/dpwh3.jpg";
function Experience() {
    return(
        <main>
            <div className="container py-2">
            <p className="text-base fs-10 fw-bold">Experience</p>
            </div>
            <div id='experience' >
                <div className='container px-4'>
                    <div className="row mt-0 mb-0 exp-content">
                        <div className="col text-center mt-5">
                            <img src={dpwh1} alt="OJT Photo1" className="exp-image" />
                        </div>
                        <div className="col text-center mt-5">
                            <img src={dpwh3} alt="OJT Photo2" className="exp-image" />
                        </div>
                        <div className="col text-center mt-5">
                            <img src={dpwh2} alt="OJT Photo3" className="exp-image" />
                        </div>
                        <p className="fs-4 text-justify mt-5">
                                During my on-the-job training (OJT) at the Department of Public Works and Highways (DPWH), I gained hands-on experience in IT support and infrastructure management. My tasks included designing and implementing efficient cable management systems, performing routine server maintenance, and troubleshooting hardware and software issues to ensure smooth operations.
                                I became proficient in cable crimping and network setup, ensuring high-quality connections and installing network hardware such as switches and routers. Additionally, I configured and optimized computer systems, installed operating systems and software, and implemented security measures to protect sensitive data.
                                Providing technical support to DPWH employees was a key aspect of my training. I resolved hardware and software issues, developed troubleshooting documentation, and trained staff on best practices for IT maintenance. This experience enhanced my communication skills and ability to assist non-technical users.
                                My OJT at DPWH equipped me with a comprehensive skill set in IT support and infrastructure management, preparing me for a successful career in the field.
                            </p>
                            
                    </div>
                </div>
            </div>
       </main>
    );
}
export default Experience;