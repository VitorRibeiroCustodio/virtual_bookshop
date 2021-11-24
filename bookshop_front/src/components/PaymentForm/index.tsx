import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';

const PaymentFormWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;


const PaymentForm: any = ({}: any) => {
  return (
    <PaymentFormWrapper>
     <Formik
       initialValues={{ cardName: '', cardNumber: '', cardDate: '', cvc: '' }}
       onSubmit={(values, { setSubmitting }) => {}}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <FormWrapper onSubmit={handleSubmit}>
           <input
             style={{ marginTop: '10px', marginBottom: '10px' }}
             type="name"
             name="cardName"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.cardName}
           />
           {errors.cardName && touched.cardName && errors.cardName}
           <input
             style={{ marginTop: '10px', marginBottom: '10px' }}
             type="number"
             name="cardNumber"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.cardNumber}
           />
           {errors.cardNumber && touched.cardNumber && errors.cardNumber}
           <input
            style={{ marginTop: '10px', marginBottom: '10px' }}
             type="date"
             name="cardDate"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.cardDate}
           />
           {errors.cardDate && touched.cardDate && errors.cardDate}
           <input
           style={{ marginTop: '10px', marginBottom: '10px' }}
             type="number"
             name="cvc"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.cvc}
           />
           {errors.cvc && touched.cvc && errors.cvc}
           <button type="submit" disabled={isSubmitting}>
             Comprar
           </button>
         </FormWrapper>
       )}
     </Formik>
    </PaymentFormWrapper>
  );
}

export default PaymentForm;
