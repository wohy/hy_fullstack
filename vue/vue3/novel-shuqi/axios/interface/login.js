import axios from '../api'

const tologin = (data) => {
  return axios({
    url: '/login',
    method: 'post',
    data
  })
}

export default {
  tologin
}