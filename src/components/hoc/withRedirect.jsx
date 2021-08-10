import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  }
}

export const withRedirectComponent = (Component) => {
  const withRedirect = (props) => {

    if (!props.isAuth) {
      return <Redirect to='/login' />
    }
    return <Component {...props}/>
  }

  return connect(mapStateToProps)(withRedirect)
}