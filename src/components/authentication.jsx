import { useFormik } from 'formik';
import React from 'react';
// import * as yup from 'yup';

// кнопки авторизации через соц сети пустышки, но сделать их не сложно
// кнопки стилизованы как ссылки, потому что

const Authentication = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async () => {

    },
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
              <input className="formElem formInput" type="text" name="email" id="email" required />
              <label className="placeholder">Email</label>
            </div>
            <div className="field">
              <input className="formElem formInput" type="text" name="password" id="pass" required />
              <label className="placeholder">Password</label>
            </div>
            <button className="formElem formBtn" type="submit">
              Log in
            </button>
          </form>
          <p className="passwordRecovery">
            Forgot password?
            <a href="#" className="forgetPass" type="button">Click here</a>
          </p>
          <div className="socials">
            <button className="icons" type="button">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" width="25px" />
            </button>
            <button className="icons" type="button">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" width="25px" />
            </button>
            <button className="icons" type="button">
              <img src="https://play-lh.googleusercontent.com/KSuaRLiI_FlDP8cM4MzJ23ml3og5Hxb9AapaGTMZ2GgR103mvJ3AAnoOFz1yheeQBBI" alt="" width="25px" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
