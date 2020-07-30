import React from 'react'
import './About.css'
import Footer from '../Components/Footer'
import MyAppBar from '../Components/AppBar'
import MyAppBaMobile from '../Components/mAppBar'
import Container from '@material-ui/core/Container';

export default class AboutUs extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='responsive'>
                    <MyAppBar />
                    <div className='aboutMain' >
                        <div className='heading' style={{ backgroundColor: 'transparent' }} >
                            About Us
                        </div>
                    </div>
                
                    <div className="aboutContent">
                        We at <strong>Ariya</strong> believe that the world is moving towards to a commoditized use of machine learning and artificial intelligence, and the pace of that transition is much faster than is actually known to the common man. The jobs we know today may not exist in their current form in the near future. And new businesses and ventures will come in to change how life is lived. Having the basic understanding and skillsets for these technologies will become an essential tool in one’s arsenal, if it is not one already. 
                    </div> 
                    <div className="aboutContent">
                        Kids operate at genius level very early in their life. Their abiliy to learn new things is only limited by the opportunities afforded to them. Python was originally created 20 years ago to make it possible for kids to learn coding. We believe that by starting early, they are obtaining skills that they will anyway need during their years of higher education.
                    </div>    
                    <div className="aboutContent">
                        We believe the world is moving towards a skillset model, and less reliance is being placed on formal certifications and education. Proof of this is in the fact that jobs in AI and ML today are based on what you know in that field, because formal degrees and certifications that specialize in AI and ML are not fully developed yet. This a field with scope for mathematicians, statisticians, engineers and scientists from all branches. We can be the springboard you need to jumpstart a career in this field.
                    </div>
                    
                    
                    <div className="smallh"><strong>Our Vision</strong></div>    
                    
                    <div className="aboutContent">
                        To empower our students to build the world as they see it, rather than just live in it. To influence the development of AI, with the emotional intelligence and humane input needed to make it an enabler to improve humanity and not over-run it.
                    </div>

                    
                    <div className="smallh" style={{ marginBottom: '-15px' }}><strong>Our Mission</strong></div>
                    
                    <div className="aboutContent" style={{ margin: '0px' }}>
                        <div style={{ margin: '0px' }}>
                            <ul>
                                <div style={{ margin: '0px' }}>
                                    <li>Provide the early skills needed to grow in the field of information technology, AI and Machine Learning.</li>
                                    <li>Encourage the birth of new ideas and foster the growth of entrepreneurship.</li>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div className="aboutContent" style={{ marginTop: '30px' }}>
                        
                    </div>

                </div>

                <div className='mobile'>
                    <MyAppBaMobile />
                    <div className='aboutMain' >
                        <div className='heading' style={{ backgroundColor: 'transparent' }} >
                            About Us
                        </div>
                       
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}