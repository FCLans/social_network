import React from "react";
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div><Field type={"text"} placeholder={"Введи логин"} name={"email"} component="input"/></div>
      <div><Field type={"password"} placeholder={"Введи пароль"} name={"password"} component="input"/></div>
      <div><Field type={"checkbox"} name={"rememberMe"} component={"input"} /> Запомнить меня</div>
      <div>
        <button>Войти</button>
      </div>
    </form>
  )
}

export const ReduxLoginForm = reduxForm({
  form: 'login'
})(LoginForm)