import axios from '../api'

const getList = (data) => {
  return axios({
    url: '/booksList',
    method: 'GET',
    data
  })
}

export default {
  getList
}