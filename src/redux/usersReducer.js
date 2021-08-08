const FOLLOW = 'USERS/FOLLOW'
const UNFOLLOW = 'USERS/UNFOLLOW'
const SET_USERS = 'USERS/SET_USERS'
const SET_CURRENT_PAGE = 'USERS/SET_CURRENT_PAGE'
const SET_TOTAL_COUNT_USERS = 'USERS/SET_TOTAL_COUNT_USERS'
const TOGGLE_FOLLOWED_PROGRESS = 'USERS/TOGGLE_FOLLOWED_PROGRESS'

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  followedInProgress: [],
  isFollowing: false
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
        users: [...action.data]
      }

    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.data}

    case SET_TOTAL_COUNT_USERS:
      return {...state, totalCountUsers: action.data}

    case TOGGLE_FOLLOWED_PROGRESS:
      return {
        ...state,
        followedInProgress: action.isFollowing
          ? [...state.followedInProgress, action.userId]
          : state.followedInProgress.filter(userId => userId !== action.userId)
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

export const setCurrentPageAC = (numberPage) => {
  return {type: SET_CURRENT_PAGE, data: numberPage}
}

export const setTotalUsersCountAC = (count) => {
  return {type: SET_TOTAL_COUNT_USERS, data: count}
}

export const toggleFollowedInProgressAC = (userId, isFollowing) => {
  return {type: TOGGLE_FOLLOWED_PROGRESS, userId: userId, isFollowing: isFollowing}
}


export default usersReducer