import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { Server } from 'miragejs';
import routes from '../routes';

const server = new Server();
server.post(routes.apiUther(), () => ({ status: 'success' }));

// кнопки авторизации через соц сети - пустышки(знаю как их подключать через uLogin, но нужен бек)

const Authentication = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (value) => {
      try {
        const response = await fetch(routes.apiUther(), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: value.email, password: value.password }),
        });
        const jsonRes = await response.json();
        if (jsonRes.status === 'success') {
          alert('Success');
        }
      } catch (e) {
        // здесь в зависимости от статуса и кода ошибки с сервера
        // можно будет вывести в интерфейс сохранив ошибку в состояние через
        // useState или менеджер состояния:
        // - Неправильный пароль
        // - Такого пользователя не существует и тд.
        alert('Server error!');
      }
    },
    validationSchema: yup.object({
      email: yup.string().required().email(),
      password: yup.string().required(),
    }),
  });
  return (
    <div className="auth">
      <div className="content">
        <div className="imgAuth">
          <img src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?w=740&t=st=1699973765~exp=1699974365~hmac=9f3b732ad271e4c0d19bcdcb47714db07fea353584917408b32f927c3fb1b8a8" alt="auth" />
        </div>
        <div className="form">
          <form onSubmit={formik.handleSubmit}>
            <h1>Authentication</h1>
            <div className="field">
              <input
                className="formElem formInput"
                type="text"
                name="email"
                id="email"
                required
                value={formik.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label className="placeholder">Email</label>
            </div>
            <div className="field">
              <input
                className="formElem formInput"
                type="password"
                name="password"
                id="pass"
                required
                value={formik.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label className="placeholder">Password</label>
            </div>
            <p className="formError">{formik.errors.email ? formik.errors.email : formik.errors.password}</p>
            <button disabled={formik.isSubmitting} className="formElem formBtn" type="submit">
              Log in
            </button>
          </form>
          <p className="passwordRecovery">
            Forgot password?
            <a href="#" className="forgotPass" type="button">Click here</a>
          </p>
          <div className="socials">
            <button disabled={formik.isSubmitting} className="icons" type="button">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="github" />
            </button>
            <button disabled={formik.isSubmitting} className="icons" type="button">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="in" />
            </button>
            <button disabled={formik.isSubmitting} className="icons" type="button">
              <img src="https://play-lh.googleusercontent.com/KSuaRLiI_FlDP8cM4MzJ23ml3og5Hxb9AapaGTMZ2GgR103mvJ3AAnoOFz1yheeQBBI" alt="gmail" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
