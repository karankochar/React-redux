import React from 'react'
import { connect } from 'react-redux'
import { buyMobile } from '../Redux/Mobile/MobileAction'

const MobileShop = (props) => {
    return (
        <div>
            <h2>
                Mobile shop - {props.quantity}
            </h2>
            <button className="btn btn-primary" onClick={props.buyMobile}>Buy mobile</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(`mapStatetoProps${JSON.stringify(state)}`)
    return{
        quantity: state.quantity
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log(`mapDispatchToProps`)
    return{
        buyMobile: ()=> dispatch(buyMobile())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileShop)
