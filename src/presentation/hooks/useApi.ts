// import axios from 'axios';

// const api = axios.create({
//     baseURL: process.env.REACT_APP_API
// });

const userDataMock = {
    user: {id: 3, name: 'horus', email:'horus@gmail.com'},
    token: '123123123'
};
export const useApi = {
    validateToken: async(token:string) => {
        return userDataMock;
        // const response = await api.post('/validateToken', {token});
        // return response.data;
    },
    signin: async(email:string, password: string) => {
        return userDataMock;
        // const response = await api.post('/signin', {email,password});
        // return response.data;
    },
    logout: async()=>{
        return true;
        // const response = await api.post('/signout');
        // return response.data;
    }
}