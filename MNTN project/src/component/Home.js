import React from "react";

export default function Home(){

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
    

      // =======================
      function scrolldown(){
        window.scrollTo({
          left:1000000,
          top:100000,
          behavior:"smooth"
        })
      }
        var [class_names ,setclass_names] = React.useState(false)
      function MarginContentDown(){
        setclass_names(() => !class_names)
        console.log(class_names)
      }
    return(
        <div className="home_section my_section" id="home">
            {/* <img src="/images/home/Component 1.png"/> */}
            <div className="container">
            <nav class="navbar navbar-expand-lg "> 
<div class="container">

<a class="navbar-brand" href="#">MNTN</a>

<button class="navbar-toggler" type="button" onClick={MarginContentDown} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="fas fa-bars navbar_toggler"></span>
</button>

     <div class="collapse navbar-collapse" id="navbarSupportedContent">
       
     <ul class="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
         
     <li class="nav-item">
           <a class="nav-link active" aria-current="page" href="#">Equipment</a>
         </li>
         
         <li class="nav-item">
           <a class="nav-link" href="#">About us</a>
         </li>

         <li class="nav-item">
           <a class="nav-link" href="#">Blog</a>

         </li>  
         {
          windowDimensions.width <=992 &&

         <li className="nav-item">
         <a class="nav-link account_area" href="#">
        <i class="fa-regular fa-circle-user"></i>
        Account
       </a>
         </li>
         }
       </ul>
   

       </div>
       {
        windowDimensions.width >=992 &&
       <a class="nav-link account_area" href="#">
        <i class="fa-regular fa-circle-user"></i>
        Account
       </a>
       }

   </div>
            </nav>
            <div className="home_content ">
            <div  className={ class_names ? "content-center toggling_down" : "content-center"}>
              <p className="header_text">
                A HIKING GUIDE

              </p>
              <h1 className="body_text">
                Be Prepared For The Mountains And Beyond!

              </h1>
              <p className="footer_text" onClick={scrolldown}>
                scroll down 
                <a href="#footer" style={{color:"white",}}><i className="fa fa-arrow-down"></i></a>
              </p>
            </div>
            </div>
            {
              windowDimensions.width >= 576 &&
            <div className={ class_names ? "content-left toggling_down" : "content-left"}>
              <ul className="social-network text-center">
              <li>Follow us</li>
              <li><a href="#"><i class="fab fa-instagram"></i></a></li>
              <li><a href="#"><i class="fab fa-twitter"></i></a></li>

              </ul>
            </div>
            }
            {
              windowDimensions.width >=576 &&
            <div className={ class_names ? "content-right toggling_down" : "content-right"}>
  <div >
    <nav id="navbar-example3" class="h-100 d flex-column align-items-stretch pe-4 border-end ">
      <nav class="nav nav-pills flex-column">
        <a  class="nav-link" href="#home">start</a>
        <a class="nav-link" href="#item-1">01</a>
        <a class="nav-link" href="#item-2">02</a>
        <a class="nav-link" href="#item-3">03</a>
      </nav>
    </nav>
  </div>
            </div>
            }
            </div>
            
        </div>
    )
}