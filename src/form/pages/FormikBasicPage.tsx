import { FormikErrors, FormikValues, useFormik } from 'formik'
import '../styles/styles.css'
export const FormikBasicPage = () => {

  const validate = ( {firstName, lastName, email}: FormikValues) =>{
    const errors: FormikErrors<FormikValues> = {};

    if(!firstName){
      errors.firstName = 'Required';
    }else if(firstName.length > 15) {
      errors.firstName = 'Mayor a 15 caracteres';
    }
    if ( !lastName ) {
      errors.lastName = 'Required';
    } else if( lastName.length >= 10 ) {
      errors.lastName = 'Must be 10 characters or less';
    }

    if (!email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test( email )) {
      errors.email = 'Invalid email address';
    }
    return errors;
  }


  const { handleChange, values, handleSubmit, errors, touched, handleBlur }  = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: ''
        },
        onSubmit: (values) =>{ //metodo para obtwner los datos del form, el parametro es del initialvalues
          console.log(values);
        },
        validate
  })
  //onblur es cuando si me salgo del campo del input ya me ale un eror
  return (
    <div>
        <h1>Formik FormikBasic</h1>
        <form noValidate onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
             type="text" 
             name="firstName"
             onBlur={handleBlur}
             onChange={ handleChange }
             value={values.firstName}
            />
            { errors.firstName && <span>{ errors.firstName }</span> }

            <label htmlFor="firstName">Last Name</label>
            <input
             type="text"
             name="lastName"
             onBlur={handleBlur}
             onChange={ handleChange }
             value={values.lastName} 
              />
              { errors.lastName && <span>{ errors.lastName }</span> }

            <label htmlFor="firstName">Email</label>
            <input
             type="email"
              name="email"
              onBlur={handleBlur}
              onChange={ handleChange }
              value={values.email}
               />
               { errors.email && <span>{ errors.email }</span> }

            <button type='submit'>Send</button>
        </form>
    </div>
  )
}
