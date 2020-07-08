import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import '../Pages/Courses.css'
import image from '../Images/coursesBG.png'
import Confetti from 'react-confetti'

export default function CourseLanding() {
    const { width, height } = useWindowSize();
    return (
            <div className='wrap' style={{ width: width, height: '100vh',backgroundColor:"white" }} >
                <Confetti
                    width={width}
                    height={height}
                    numberOfPieces={100}
                    gravity={0.03}
                    style={{ position: 'absolute', width: width, height: height }}
                />
                <div className='conForeground' style={{ height: height }} >
                    <div>
                        Coding Courses
                                    <h5>Browse through our online courses.</h5>
                    </div>
                </div>
                <div className='conImage' style={{ height: height }} >
                    <div className='courseText' >
                        <img alt="s" src={image} width='500px' />
                    </div>
                </div>
            </div>
    )
}