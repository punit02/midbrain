import React from 'react'
import { connect } from 'react-redux'
import Image from '../images/banner.jpg'
import '../css/header.css'
import { ScrollableTabsButtonAuto } from './navigationtab'
class Header extends React.Component {
    render() {
        return (
            <div className="header">

                <div className="container">

                    <div className="row">
                        <div className="left-section">
                        <img className="logo" src={Image}  alt="geniusmindacademy" />
                        </div>

                         {/* <div className="right-section">

                            <div className="textwidget">
                                <ul>
                                    <li>
                                        <span className="phone"><i className="fa fa-phone"></i>&nbsp;&nbsp;Phone: <a href="tel:+918209359236"> +91820 935 9236</a> &nbsp;&nbsp;</span>
                                        <span className="mail"><i className="fa fa-envelope-o"></i>&nbsp;&nbsp;<a href="mailto:unique.geniusmind@gmail.com">unique.geniusmind@gmail.com</a></span>
                                    </li>

                                </ul>
 
                            </div>


                        </div> */}

                    </div>
                    
                   

                </div>
                <ScrollableTabsButtonAuto></ScrollableTabsButtonAuto>

            </div>

        )
    }
}
function mapStateToProps(state) {
    return {
        showImage: state.donorRegistration.userLatitude,
    }
}
export default connect(mapStateToProps)(Header)