import React from 'react'
import { connect } from 'react-redux'
import Image from '../images/banner.jpg'
import GirlImage from '../images/girl.jpg'
import '../css/header.css'
import { ScrollableTabsButtonAuto } from './navigationtab'
class Header extends React.Component {
    render() {
        return (
            <div className="header">

                <div className="container">

                    <div className="row">
                        <div className="left-section">
                        {/* <img src={GirlImage} className="logo1" width="200" height="auto" alt="geniusmindacademy" /> */}
                        <img className="logo" src={Image} className="logo" width="800" height="200" alt="geniusmindacademy" />
                        </div>

                        <div className="right-section">

                            <div className="textwidget">
                                <ul>
                                    <li>
                                        <span className="phone"><i className="fa fa-phone"></i>&nbsp;&nbsp;Phone: <a href="tel:+918209359236"> +91820 935 9236</a> &nbsp;&nbsp;</span>
                                        <span className="mail"><i className="fa fa-envelope-o"></i>&nbsp;&nbsp;<a href="mailto:ashishpurohit7@gmail.com">ashishpurohit7@gmail.com</a></span>
                                    </li>

                                </ul>
                                {/* <p className="cursive red">The Midbrain Activation Program</p> */}
                                {/* <img src={MindImage} className="logo1" width="300" height="100" margin-right="100" alt="geniusmindacademy" /> */}
                            </div>


                        </div>

                    </div>
                    <ScrollableTabsButtonAuto></ScrollableTabsButtonAuto>

                </div>

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