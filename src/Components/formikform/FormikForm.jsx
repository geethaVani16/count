import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Error from '../formikform/Error'

const validationSchema =Yup.object().shape({
name:Yup.string()
    .min(5,"must be character")
    .max(255,"must be shorter than 255")
    .required("Must enter a name"),
email:Yup.string()
    .min(5,"must be valid email adddress")
    .max(255,"must be shorter than 100")
    .required("Must enter a email"),
})
export default function FormikForm() {
    return (
        <Formik 
        initialValues = {{ name: "", email: "" }} 
        validationSchema={validationSchema}
        onSubmit={(values,{setSubmitting,resetForm}) => {
            setSubmitting(true)

            setTimeout (() => {
                alert(JSON.stringify(values,null,2));
                resetForm();
                setSubmitting(false);
            },500)
        }}
        >
            {({ values, errors, touched, handleChange, handleBlur,handleSubmit,isSubmitting }) => (
                <form onSubmit={handleSubmit}>

                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        placeholder='enter your name'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        className={touched.name && errors.name ? "has-error" :null} 
                    />
                    <Error touched={touched.name} message={errors.name}/>
                    <br/>

                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='enter your email'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        className={touched.email && errors.email ? "has-error" :null}
                    /> 
                       <Error touched={touched.email} message={errors.email}/>
                    <br/>
                    <button type='submit' disabled={isSubmitting}>Submit</button>

                </form>
            )}

        </Formik>
    )
}