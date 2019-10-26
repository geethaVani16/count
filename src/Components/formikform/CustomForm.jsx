import React from 'react'
import {withFormik} from 'formik'

const myStyle={
padding:"20px"
}
class CustomForm extends React.Component {
    render () {
        const {values,handleChange} =this.props
        console.log(values,"ll")
        return (
            <div>
               <form>
                   <label>Name
                        <input type='text' name='name' value={values.name} onChange={handleChange}/>
                   </label>
                   <label>Email
                        <input type='text' name='email' value={values.email} onChange={handleChange}/>
                   </label>
               </form>
            </div>
        )
    }
} 
const mapValuesToProps = (props) => {
    console.log(props,"maptovalues")
    return {
        name:"",
        email:""
    }
}

  
export default withFormik({mapValuesToProps,enableReinitialize: true})(CustomForm)