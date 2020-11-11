import axios from 'axios'
class APICall {
    constructor() {
        this.domain = 'https://tlcn-api.herokuapp.com/api/';
    }
    onPostMethod(route,params,data=[],api_token){
        return axios({
            method: 'post',
            url: this.domain + route,
            data: data,
            params : params,
            headers: { 'Authorization': api_token }
        })
        
    }
    onGetMethod(route,params,data,api_token='*'){
        return axios({
            method: 'get',
            url : this.domain + route,
            data : data,
            params : params,
            headers: {
                'Authorization':api_token
            }
        })
    }
}

export default APICall