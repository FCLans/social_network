import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "1f4ea4f4-0216-4d33-9542-5146b24606f1"
  }
})

export const UsersApi = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data
      })
  },
  follow(userId) {
    return instance.post(`follow/${userId}`, {})
      .then(response => {
        return response.data
      })
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
      .then(response => {
        return response.data
      })
  }
}

export const ProfileApi = {
  getProfileInfo(userId) {
    return instance.get(`profile/${userId}`)
      .then(response => {
        return response.data
      })
  }
}

export const AuthApi = {
  me() {
    return instance.get(`auth/me`)
      .then(response => {
        return response.data
      })
  }
}