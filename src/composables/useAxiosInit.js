import axios from 'axios'
const useAxiosInit = () => {
  const init = () => {
    axios.defaults.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }

    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error(error)
        throw error
      }
    )
  }

  return {
    init
  }
}

export default useAxiosInit
