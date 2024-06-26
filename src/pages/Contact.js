import { Container, Card  } from "react-bootstrap";
function Contact() {
    
    return(
        <main>
            <Container className="py-2">
            <p className="text-base fs-10 fw-bold">Contact</p>
            </Container>
            <div id="contact">
                <Container className="px-4">
                    <Card className="p-3 border-0 shadow">
                    <h2 className="fw-bold">We can get in touch via:</h2>
                    <ul className="ms-4 g-3">
                        <li>
                        <a
                            href="https://web.facebook.com/elmer.epogon.14"
                            target="_blank"
                            rel="noreferrer"
                            className="text-decoration-none fw-bold text-600"
                        >
                            Facebook → https://web.facebook.com/elmer.epogon.14
                        </a>
                        </li>
                        <li>
                        <a
                            href="https://github.com/ElmerEpogon"
                            target="_blank"
                            rel="noreferrer"
                            className="text-decoration-none fw-bold text-600"
                        >
                            Github → https://github.com/ElmerEpogon/
                        </a>
                        </li>
                        <li>
                        <a
                            href="https://www.linkedin.com/in/elmer-epogon-8530a3305/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-decoration-none fw-bold text-600"
                        >
                            LinkedIn → https://www.linkedin.com/in/elmer-epogon-8530a3305/
                        </a>
                        </li>
                    </ul>
                    <p className="fw-bold m-auto py-5">OR</p>
                    <p className="ms-5 fw-bold text-600">You can send me an <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzDQqQMjjqPJkmLLgNhqPMLhpgpfHRNgxQgfXfCjbFmqWphwlnTgsxmcSzlFjrfWHFfWkTq" target="_blank" rel="noreferrer">email</a> and I'll get back to you soon.</p>
                    </Card>
                </Container>
            </div>
       </main>
    );
    
}
export default Contact;