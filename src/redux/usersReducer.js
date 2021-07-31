const FOLLOW = 'USERS/FOLLOW'
const UNFOLLOW = 'USERS/UNFOLLOW'
const SET_USERS = 'USERS/SET_USERS'

const initialState = {
  users: [],
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.data) {
            return {...u, followed: true}
          }

          return u
        })
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.data) {
            return {...u, followed: false}
          }

          return u
        })
      }

    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.data]
      }

    default:
      return state
  }
}

export const followAC = (userId) => {
  return {type: FOLLOW, data: userId}
}

export const unfollowAC = (userId) => {
  return {type: UNFOLLOW, data: userId}
}

export const setUsersAC = (users) => {
  return {type: SET_USERS, data: users}
}

export default usersReducer