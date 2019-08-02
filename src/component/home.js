import React from 'react'
import Header from './Header'
import Slider from './slider'

import {connect} from 'react-redux'
class Home extends React.Component{
    render(){
        return(
            <div>
                <Header></Header>
               

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
