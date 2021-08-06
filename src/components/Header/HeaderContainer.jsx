import React from 'react';
import {setAuthData} from '../../redux/authReducer';
import {connect} from 'react-redux';
import axios from 'axios';
import Header from './Header';

class HeaderContainer extends React.Component {
  componentDidMount() {
      axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
        withCredentials: true
      }).then(response => {
        if(response.data.resultCode === 0 ) {
          const authData = response.data.data

          this.props.setAuthData(authData)
        }
      })
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
    setAuthData: (data) => dispatch(setAuthData(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)

