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