import React from 'react'
import "./../App.css"
import ZoomRed from "./../images/zoomRed.png"
import useWebAnimations,{zoomIn} from "@wellyshen/use-web-animations";

export default function LaptopIcon() {
    const { ref, playState } = useWebAnimations({...zoomIn});
    return (
        
        <div className="show-bg">
            <div className="show-laptop">
                <div className="show-zoom">
                    <img src={ZoomRed} alt="zoomred" ref={ref}/>
                </div>
            </div>
        </div>
        
    )
}
