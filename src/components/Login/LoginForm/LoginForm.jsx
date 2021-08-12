import React from "react";
import { Field, reduxForm } from 'redux-form'
import {Input} from "../../common/FormsControls/FormsControls";
import {isRequiredField, maxLength} from "../../../utils/validators";

const maxLength190 = maxLength(30)

const LoginForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div><Field type={"text"} placeholder={"Введи логин"} name={"email"} component={Input} validate={[isRequiredField, maxLength190]} /></div>
      <div><Field type={"password"} placeholder={"Введи пароль"} name={"password"} component={Input} validate={[isRequiredField, maxLength190]} /></div>
      <div><Field type={"checkbox"} name={"rememberMe"} component={Input} /> Запомнить меня</div>
      <div>
        <button>Войти</button>
      </div>
    </form>
  )
}

export const ReduxLoginForm = reduxForm({
  form: 'login'
})(LoginForm)