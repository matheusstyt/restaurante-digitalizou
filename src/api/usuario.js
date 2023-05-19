import axios from 'axios';
const HOST = require("@/config/env").HOST;
const PORT = require("@/config/env").PORT;

export async function get_usuarios(){
    return await axios.get(`${HOST}:${PORT}/usuario`)
    .then( res => {
        return res.data;
    })
    .catch( error => {
        return []
    })
}
export function post_usuario(body_usuario){

    return axios.post(`${HOST}:${PORT}/usuarios`, body_usuario)
    .then( res => {
        return res.data;
    })
    .catch( error => {
        var [msg] = error.response.data.message;
        return msg;
    })
}
export async function validar_usuario(body_usuario){
    return await axios.post(`${HOST}:${PORT}/auth/login`, body_usuario)
    .then( res => {
        return res.data;
    })
    .catch( error => {
        var [msg] = error.response.data.message;
        return msg;
    })
}
export function delete_usuario(id){
    return axios.delete(`${HOST}:${PORT}/usuarios/${id}`)
    .then( res => {
        return res.data;
    })
    .catch( error => {
        return null;
    })
}