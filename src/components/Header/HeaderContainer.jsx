import React from 'react';
import {setAuthDataTC} from '../../redux/authReducer';
import {connect} from 'react-redux';
import Header from './Header';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.setAuthData()
  }

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAuthData: () => dispatch(setAuthDataTC())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)

