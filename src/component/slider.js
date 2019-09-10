import React from 'react'
import { connect } from 'react-redux'
import '../css/slider.css'

class Header extends React.Component {
    render() {
        return (
                    <div id='slides-section'>
                        <div id='slides'>
                            <img alt="Beyond Midbrain Activation 01" src="http://2.bp.blogspot.com/--TD9KpfJx3g/VZAlcADIeEI/AAAAAAAAA3E/gq-BJRGFKSg/s1600/Beyond_Midbrain_Activation_03.jpg" className="slidesjs-slide" slidesjs-index="0" style={{ position: "absolute", top: "0px", left: "0px", width: "100%", zIndex: "0", backfaceVisibility: "hidden", display: "none" }} />
                            <img alt="Beyond Midbrain Activation 02" src="http://2.bp.blogspot.com/-K64DpxeMVOQ/VZAlbER7pvI/AAAAAAAAA3A/DHV0RGU695k/s1600/Beyond_Midbrain_Activation_02.jpg" className="slidesjs-slide" slidesjs-index="1" style={{ position: "absolute", top: "0px", left: " -1284px", width: "100%", zIndex: "0", display: "block", backfaceVisibility: "hidden" }} />
                            <img alt="Beyond Midbrain Activation 03" src="http://1.bp.blogspot.com/-uG6zGDp0bJM/VZAlagc9aRI/AAAAAAAAA28/kKSiiLfd05Y/s1600/Beyond_Midbrain_Activation_01.jpg" className="slidesjs-slide" slidesjs-index="2" style={{ position: "absolute", top: "0px", left: "0px", width: "100%", zIndex: "10", display: "block", backfaceVisibility: "hidden" }} />
                            <img alt="Beyond Midbrain Activation 05" src="http://1.bp.blogspot.com/-CsAUbvtmJ9k/VZAlT0XqFPI/AAAAAAAAA24/X99pKCexcuo/s1600/Beyond_Midbrain_Activation_05.jpg" className="slidesjs-slide" slidesjs-index="3" style={{ position: "absolute", top: "0px", left: "1284px", width: "100%", zIndex: "0", display: "block", backfaceVisibility: "hidden" }} />
                            
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
