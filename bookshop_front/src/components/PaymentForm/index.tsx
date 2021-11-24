import React, { useRef, useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import './form.scss';

const PaymentForm = (): any => {
  const getSchema = () =>
    yup.object().shape({
      cardNumber: yup.string().min(16, "not less than 16"),
      cardHolder: yup.string().required(),
      cardMonth: yup.string().required()
    });

  return (
    <div>
      <Formik
        initialValues={{
          cardNumber: "",
          cardHolder: "",
          cardMonth: "",
          cardYear: "",
          cvv: ""
        }}
        onSubmit={(values, formikBag) => {
          alert(JSON.stringify(values, null, 2));
          formikBag.resetForm();
        }}
        validationSchema={getSchema()}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            {" "}
            <div className="form">
              <label className="label">Número do cartão</label>
              <input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cardNumber
                  .replace(/\s/g, "")
                  .replace(/(\d{4})/g, "$1 ")
                  .trim()}
                name="cardNumber"
              />
              <span className="error">{errors.cardNumber && touched.cardNumber && errors.cardNumber}</span>
              <label className="label">Nome do proprietário</label>
              <input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cardHolder}
                name="cardHolder"
              />
              <span className="error">{errors.cardHolder && touched.cardHolder && errors.cardHolder}</span>
              <div className="row">
                <div className="column">
                  <label className="label">Vencimento</label>
                  <div>
                    <select
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.cardMonth}
                      placeholder="Month"
                      name="cardMonth"
                    >
                      <option value="" disabled selected>
                        Mês
                      </option>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((m, i) => (
                        <option value={m}>{m < 10 ? `0${m}` : m}</option>
                      ))}
                    </select>

                    <select
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.cardMonth}
                      name="cardYear"
                    >
                      <option value="" disabled selected>
                        Ano
                      </option>
                      {[
                        2020,
                        2021,
                        2023,
                        2024,
                        2025,
                        2026,
                        2027,
                        2028,
                        2029,
                        2030,
                        2031,
                        2032
                      ].map((y, i) => (
                        <option value={y}>{y}</option>
                      ))}
                    </select>
                  </div>
                </div>{" "}
                <div className="column">
                  <label className="label">CVV</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.cvv}
                    name="cvv"
                  />
                </div>
                <span className="error">{errors.cvv && touched.cvv && errors.cvv}</span>
              </div>
              <button type="submit">
                Comprar
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default PaymentForm;
