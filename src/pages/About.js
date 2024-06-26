function About() {
    
    return(
        <main>
            <div className="container py-2">
                <p className="text-base fs-10 fw-bold">About Me</p>
            </div>
            <div id='about'>
                <div className="container">
                    <div className="row g-2 pt-4">
                        <div className="col-4">
                            <div>
                                <h3 className="text-600 fw-bold">Social Links</h3>
                                <ul>
                                    <li>
                                        <a href="https://web.facebook.com/elmer.epogon.14" target='_blank' rel="noreferrer" className="text-decoration-none text-black">Facebook</a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/ElmerEpogon" target='_blank' className="text-decoration-none text-black" rel="noreferrer">Github</a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/elmer-epogon-8530a3305/" target='_blank' className="text-decoration-none text-black" rel="noreferrer">LinkedIn</a>
                                    </li>
                                </ul>
                                <h3 className="text-600 fw-bold mt-5">Want to Hire Me as a Freelancer?</h3> 
                                <p className="fs-4 text-justify pe-5">
                                    You can send me an <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzDQqQMjjqPJkmLLgNhqPMLhpgpfHRNgxQgfXfCjbFmqWphwlnTgsxmcSzlFjrfWHFfWkTq" target="_blank" rel="noreferrer">email</a> and I'll get back to you soon.
                                </p>
                                <h3 className="text-600 fw-bold mt-5">Want to ask Something?</h3> 
                                <p className="fs-4 text-justify pe-5">
                                    You can send me a message on my <a href="https://www.messenger.com/t/elmer.epogon.14" target="_blank" rel="noreferrer">messenger</a>.
                                </p>

                            </div>
                        </div>
                        <div className="col-8">
                            <div>
                                <p className="fs-4 text-justify">
                                Hello! I'm Elmer Epogon, a recent graduate from Central Philippine State University with a degree in Information Technology. I am passionate about leveraging technology to solve real-world problems and create innovative solutions.
                                </p>
                                <h3 className="text-600 fw-bold mt-5">My Journey</h3>
                                <p className="fs-4 text-justify">
                                During my time at Central Philippine State University, I immersed myself in various aspects of Information Technology, from software development and network management to data analysis. My academic projects and internships have provided me with a solid foundation in some various programming such as <b>JAVA, SQL, HTML/CSS, PHP and JAVASCRIPT</b>, and I am eager to apply these skills in a professional setting.
                                </p>
                                <h3 className="text-600 fw-bold mt-5">My Skills</h3>
                                <p className="fs-4 text-justify">
                                I have honed my skills in several programming including:

                                    <ul>
                                        <li><b>SQL:</b> Proficient in database management, including querying and maintaining databases.</li>
                                        <li><b>HTML/CSS:</b> Skilled in front-end web development, creating engaging and responsive user interfaces.</li>
                                        <li><b>PHP:</b> Experienced in server-side scripting and dynamic web page development.</li>
                                        <li><b>JavaScript:</b> Knowledgeable in client-side scripting, enhancing user experience and interactivity on websites.</li>
                                        <li><b>Java:</b> Skilled in application development, focusing on scalability and performance.</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </main>
    );
    
}
export default About;