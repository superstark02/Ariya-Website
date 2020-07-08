import React from 'react'
import './Courses.css'
import MyAppBar from '../Components/AppBar'
import Footer from '../Components/Footer'
import MyAppBaMobile from '../Components/mAppBar'
import SignUp from '../Components/SignUp'
import ButtonBases from '../Components/Images'
import CourseLanding from '../Components/course-landing'
import Pagination from "react-bootstrap/Pagination";
import ReactPageScroller from "react-page-scroller";

export default class Courses extends React.Component {

    constructor(props) {
        super(props);
        this.state = { currentPage: null };
    }

    handlePageChange = number => {
        this.setState({ currentPage: number }); // set currentPage number, to reset it from the previous selected.
    };

    getPagesNumbers = () => {
        const pageNumbers = [];

        for (let i = 1; i <= 3; i++) {
            pageNumbers.push(
                <Pagination.Item key={i} eventKey={i - 1} onSelect={this.handlePageChange}>
                    {i}
                </Pagination.Item>,
            );
        }
        return [...pageNumbers];
    }

    render() {
        const pagesNumbers = this.getPagesNumbers();
        return (
            <React.Fragment>
                <div className='responsive' >
                    <ReactPageScroller
                        pageOnChange={this.handlePageChange}
                        customPageNumber={this.state.currentPage}
                    >
                        <CourseLanding />

                        <div className="course-container" style={{ height: '100%', width: '100vw' }} >
                            <div className="course-box python" >
                                <div className='course-heading' >
                                    <div>
                                        <div className='course-title' >LEVEL 1</div>
                                                    Here is the sample details
                                                </div>
                                </div>
                            </div>
                            <div className="course-box python">
                                <div className='course-heading' >
                                    <div>
                                        <div className='course-title' >LEVEL 2</div>
                                    </div>
                                </div>
                            </div>
                            <div className="course-box python" >
                                <div className='course-heading' >
                                    <div>
                                        <div className='course-title' >LEVEL 3</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="course-container" style={{ height: '100%', width: '100vw' }} >
                            <div className="course-box aws" >
                                <div className='course-heading' >
                                    <div>
                                        <div className='course-title' >STATISTICS</div>
                                    </div>
                                </div>
                            </div>
                            <div className="course-box aws">
                                <div className='course-heading' >
                                    <div>
                                        <div className='course-title' >DEV OPS</div>
                                    </div>
                                </div>
                            </div>
                            <div className="course-box aws" >
                                <div className='course-heading' >
                                    <div>
                                        <div className='course-title' >AMAZON WEB SERVICES</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ReactPageScroller>
                </div>
            </React.Fragment>
        )
    }
}