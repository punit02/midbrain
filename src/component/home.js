import React from 'react'
import Header from './Header'
import Slider from './slider'
import Footer from './footer'

import {connect} from 'react-redux'
class Home extends React.Component{
    render(){
        return(
            <div>
                <Header></Header>
               <Footer></Footer>

            </div>
        )
    }

}


function mapStateToProps(state){
    return{
        showImage: state.donorRegistration. userLatitude

    }
}
export default connect(mapStateToProps)(Home)
