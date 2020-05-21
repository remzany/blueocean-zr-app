import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com';

export default class ApiService{
    getUsers(){
        return axios.get(`${url}/users`);
    }

    getPosts(){
        return axios.get(`${url}/posts`);
    }

    addPost(title, body){
        return axios.post(`${url}/posts`,{
            title: title,
            body: body
        });
    }

    editPost(id, title, body){
        return axios.post(`${url}/posts/${id}`,{
            title:title,
            body:body
        });
    }

    deletePost(id){
        return axios.delete(`${url}/posts/${id}`);
    }
}