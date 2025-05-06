import React from "react";

export default function Footer(){
    const [windowDimensions, setWindowDimensions] = React.useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    
      React.useEffect(() => {
        const handleResize = () => {
          setWindowDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    
        console.log(windowDimensions)
        
    return(
        <div className="footer_section my_section" id="footer">
            <div className="container">
                <div className="footer_content row ">
                    <div className="footer_left  col-lg-6">
                        
                        <div className="left_text">
                        <img src="/images/home/Logo.png"/>
                        <h5>
                            Get out there & dicover your next slop, mountain & destination!
                        </h5>
                        </div>
                        <p className="left_down">
                            Copyright 2023  MNTN, Inc. Terms & Privacy
                        </p>

                    </div>
                    {
                        windowDimensions.width >=992 &&
                    <div className="footer_right col-6 row justify-content-around">
                        
                        {/*ms-auto me-auto  */}
                        <ul class="navbar-nav  mb-2 mb-lg-0 col-3">
                            <li class="nav-item">
                                <h4>More on The Blog </h4>
                            </li>
                            
                            <li class="nav-item">
                                <a class="nav-link" href="#">About MNTN</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contributes & writers</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Write For Us</a>
                            </li> 
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Privacy Policy</a>
                            </li>
                        </ul>

                        <ul class="navbar-nav  mb-2 mb-lg-0 col-3">
                            <li class="nav-item">
                                <h4>More on MNTN </h4>
                            </li>
                            
                            <li class="nav-item">
                                <a class="nav-link" href="#">The Team</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Jobs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Press</a>
                            </li>
                        </ul>
                        

                    </div>
                    }
                </div>
            </div>
        </div>
    )
}