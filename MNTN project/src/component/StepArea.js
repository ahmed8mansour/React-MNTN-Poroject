import React from "react";
export default function StepArea( props){
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
        console.log(props)
    return(
        // "step_area row "
        <div  className={props.reversed ? "step_area row reverse" : "step_area row" } id={`item-${props.area_num}`}>
            <div className="step_left col-lg-6 " id={props.id}>
            <p className="header_text">
                {props.pretitle}

            </p>
            <div className="body">

            <h1 className="body_text">
                {props.title}

            </h1>
            <p className="body_text2">
                {props.describtion}
            </p>
            </div>
            <p className="footer_text">
                Read More
                <a><i className="fa fa-arrow-right"></i></a>
            </p>
            </div>

            {
                windowDimensions.width >=992 &&
            <div className="step_right col-lg-6">
                <img src={`/images/about/${props.image_src}.png`}/>
            </div>
            }

        </div>
    )
}