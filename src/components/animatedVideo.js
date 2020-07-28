import React from 'react'
import video from "./../images/video.mp4"
import "./../App.css"

export default function AnimatedVideo() {
    return (
        <div className="videoshow">
            <video autoPlay loop >
                <source src={video} type="video/mp4" />
            </video>        
        </div>
    )
}
