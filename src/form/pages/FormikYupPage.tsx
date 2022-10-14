import { FormikErrors, FormikValues, useFormik } from 'formik'
import * as Yup from 'yup';
import '../styles/styles.css'

export const FormikYupPage = () => {




  const { handleSubmit, errors, touched, getFieldProps}  = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: ''
        },
        onSubmit: (values) =>{ //metodo para obtwner los datos del form, el parametro es del initialvalues
          console.log(values);
        },
        validationSchema: Yup.object({
          firstName: Yup.string()
                          .max(15, 'Debe de tener 15 caracteres o menos')
                          .required('Requerido'),
          lastName: Yup.string()
                      .max(15, 'Debe de tener 15 caracteres o menos')
                      .required('Requerido'),
          email: Yup.string()
                      .email('El correo no tiene un formato válido')
                      .required('Requerido'),
      })
  })
  //getFieldProps 
  //touched es cuando si me salgo del campo del input ya me ale un eror
  return (
    <div>
        <h1>Formik FormikBasic</h1>
        <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" { ...getFieldProps('firstName') }/>
                { touched.firstName && errors.firstName && <span>{ errors.firstName }</span> }

                <label htmlFor="lastName">Last Name</label>
                <input type="text" { ...getFieldProps('lastName') }/>
                { touched.lastName && errors.lastName && <span>{ errors.lastName }</span> }

                <label htmlFor="email">Email Address</label>
                <input type="email" { ...getFieldProps('email') } />
                { touched.email && errors.email && <span>{ errors.email }</span> }


                <button type="submit">Submit</button>
        </form>
    </div>
  )
}
