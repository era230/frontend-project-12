import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required(),
      password: Yup.string()
        .required(),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="col-12 col-md-6 mt-3 mt-mb-0">
    <h1 className="text-center mb-4">Войти</h1>
    <div className="form-floating mb-3">
    <input
      id="username"
      type="text"
      name="username"
      autocomplete="username"
      required
      placeholder="Ваш ник"
      className="form-control"
      {...formik.getFieldProps('username')}
    />
    <label htmlFor="username">Ваш ник</label>
    {formik.touched.username && formik.errors.username ? (
      <div>{formik.errors.username}</div>
    ) : null}
    </div>

    <div className="form-floating mb-4">
    <input
      id="password"
      type="text"
      name="password"
      autocomplete="password"
      required
      placeholder="Пароль"
      className="form-control"
      {...formik.getFieldProps('password')} />
    <label htmlFor="password" className="form-label">Пароль</label>
    {formik.touched.password && formik.errors.password ? (
      <div>{formik.errors.password}</div>
    ) : null}
    </div>

    <button type="submit" className="w-100 mb-3 btn btn-outline-primary">Войти</button>
  </form>
  )
}

export default LoginForm;