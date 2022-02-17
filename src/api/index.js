import axios from "axios"
const api = {
  async login(email, password) {
    const res = await axios.get(`http://spotyfree.iny.su/api/user.login?email=${email}&password=${password}`)
    return res
  },
  async register(email, password, name, dateBirth, gender) {
    const res = await axios.get(`http://spotyfree.iny.su/api/user.register?email=${email}&password=${password}&name=${name}&dateBirth=${dateBirth}&gender=${gender}`)
    return res
  }
}
export default api