import React from 'react'

const Error =({touched,message}) => {
    console.log(touched,message,"lll")
    if(touched ===false ) {
        return <div>jfg</div>
    } else {
        return <div>{message}</div>
    }
}
export default Error