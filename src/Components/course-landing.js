import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import '../Pages/Courses.css'
import image from '../Images/coursesBG.png'
import Confetti from 'react-confetti'

export default function CourseLanding() {
    const { width, height } = useWindowSize();
    return (
        <div>
            <div className="responsive" >
                <div className='wrap' style={{ width: width, height: '100vh', backgroundColor: "white" }} >
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
                        <div className='courseText' style={{marginTop:"60px"}} >
                            <img alt="s" src={image} width='500px' />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mobile" >
                <Confetti
                    width={width}
                    height={height}
                    numberOfPieces={5}
                    gravity={0.02}
                    style={{ position: 'absolute', width: width, height: height }}
                />
                <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:height}} >
                    <div className='conForeground'>
                        <div>
                            Coding Courses
                            <h6>Browse through our online courses.</h6>
                        </div>
                    </div>
                    <div className='conImage'>
                        <div className='courseText' >
                            <img alt="s" src={image} width='100%' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}