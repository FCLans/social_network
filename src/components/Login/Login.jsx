import React from "react";
import styles from './Login.module.css'
import {ReduxLoginForm} from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {loginTC} from "../../redux/authReducer";
import {Redirect} from "react-router-dom"

export const Login = (props) => {

  const onSubmit = (formData) => {
    props.authorization(formData)
  }

  return (
    <div className={styles.loginBlock}>
      {props.isAuth && <Redirect to='/profile' />}
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authorization: ({email, password, rememberMe}) => dispatch(loginTC(email, password, rememberMe))
  }
}

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)