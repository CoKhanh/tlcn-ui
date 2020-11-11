import axios from 'axios'

class API {
    constructor() {
        this.domain = 'https://api-tlcn.herokuapp.com/api/'
    }
    onCallAPI = (method,url,data = {},params={},headers={}) => {
        return axios({
            method: method,
            url: this.domain + url,
            data: data,
            params : params,
            headers: headers
        });
    }
}

export default API