import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "9d3fc0c8-6701-4cc5-b24c-b92d3aeff07b"
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
  },

  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
      .then(resp => {
        return resp.data
      })
  },

  updateStatus(status) {
    return instance.put(`profile/status`, {status: status})
      .then(resp => {
        return resp.data
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