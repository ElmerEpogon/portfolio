import {NavLink, useLocation } from "react-router-dom";
import {  OverlayTrigger, Tooltip } from 'react-bootstrap';


function Header() {
    
  const page = useLocation();
  const activePath = page.pathname;

  const renderTooltip = (props, message) => (
    <Tooltip {...props}>{message}</Tooltip>
  ); 

    return(
        <nav>

            <div className="container py-4">

                <div className="container-nav row d-flex py-5 justify-content-center">
                        <div className="col col-lg-2 text-start nav-start order-1 order-lg-1">
                    <a href="/">
                            <p className="nav-start-1 text-base text-black mt-2 pt-1">Elmer Epogon</p>
                            <p className="text-base font-light text-secondary second-p">Aspiring IT</p>
                    </a>
                        </div>

                    <div className="col-lg-8  text-center nav-main order-3 order-lg-2">

                        <a href="/about" as={NavLink} className={`text-base text-600 mx-3 font-normal ${activePath === '/about' ? 'active' : ''}`}>
                            About{activePath === '/about'&&<i className="bi bi-arrow-down m-0 p-0"></i>}
                        </a>

                        <a href="/project"  as={NavLink} className={`text-base text-600 mx-3 font-normal ${activePath === '/project' ? 'active' : ''}`}>
                            Project{activePath === '/project'&&<i className="bi bi-arrow-down m-0 p-0"></i>}
                        </a>

                        <a href="/experience"  as={NavLink} className={`text-base text-600 mx-3 font-normal ${activePath === '/experience' ? 'active' : ''}`}>
                            Experience{activePath === '/experience'&&<i className="bi bi-arrow-down m-0 p-0"></i>}
                        </a>

                        <a href="/contact"  as={NavLink} className={`text-base text-600 mx-3 font-normal ${activePath === '/contact' ? 'active' : ''}`}>
                            Contact{activePath === '/contact'&&<i className="bi bi-arrow-down m-0 p-0"></i>}
                        </a>

                    </div>

                    <div className="col col-lg-2 text-end nav-end order-2 order-lg-3">

                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 100, hide: 300 }}
                            overlay={(props) => renderTooltip(props, 'Facebook')} >
                            <a href="https://web.facebook.com/elmer.epogon.14" target='_blank' rel="noreferrer"><i className="bi bi-facebook fs-2 mx-2 text-primary"></i></a>
                        </OverlayTrigger>

                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 100, hide: 300 }}
                            overlay={(props) => renderTooltip(props, 'Github')} >  
                            <a href="https://github.com/ElmerEpogon" target='_blank' rel="noreferrer"><i className="bi bi-github fs-2 mx-2 text-dark"></i></a>
                        </OverlayTrigger>

                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 100, hide: 300 }}
                            overlay={(props) => renderTooltip(props, 'Linkedin')} >  
                            <a href="https://www.linkedin.com/in/elmer-epogon-8530a3305/" target='_blank' rel="noreferrer"><i className="bi bi-linkedin fs-2 mx-2 text-dark-primary"></i></a>
                        </OverlayTrigger>

                    </div>

                </div>

            </div>
            
        </nav>
    );
}

export default Header;