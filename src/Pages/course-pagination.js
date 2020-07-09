import React from "react";
import Pagination from "react-bootstrap/Pagination";
import ReactPageScroller from "react-page-scroller";
import './courses-pagination.css'
import CourseLanding from "../Components/course-landing";
import Python from "../Components/courses-python";
import Other from "../Components/courses-other";
import MyAppBar from '../Components/AppBar'
import MyAppBaMobile from "../Components/mAppBar";

export default class FullPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentPage: null };
    }

    handlePageChange = number => {
        this.setState({ currentPage: number }); // set currentPage number, to reset it from the previous selected.
    };

    getPagesNumbers = () => {
        const pageNumbers = [];

        for (let i = 1; i <= 5; i++) {
            pageNumbers.push(
                <Pagination.Item key={i} eventKey={i - 1} onSelect={this.handlePageChange}>
                    {i}
                </Pagination.Item>,
            );
        }

        return [...pageNumbers];
    };

    render() {

        return (
            <React.Fragment>
                <div className="responsive" >
                    <ReactPageScroller
                        pageOnChange={this.handlePageChange}
                        customPageNumber={this.state.currentPage}
                    >
                        <div className="component ">
                            <MyAppBar />
                            <CourseLanding />
                        </div>
                        <div className="component">
                            <Python />
                        </div>
                        <div className="component">
                            <Other />
                        </div>
                    </ReactPageScroller>
                </div>

                <div className="mobile" >
                    <MyAppBaMobile />
                    <ReactPageScroller
                        pageOnChange={this.handlePageChange}
                        customPageNumber={this.state.currentPage}
                    >
                        <div className="component ">
                            <CourseLanding />
                        </div>
                        <div className="component">
                            <Python />
                        </div>
                        <div className="component">
                            <Other />
                        </div>
                    </ReactPageScroller>
                </div>
            </React.Fragment>
        );
    }
}
