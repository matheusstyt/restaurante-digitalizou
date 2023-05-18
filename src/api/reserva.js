import axios from 'axios';
const HOST = require("@/config/env").HOST;
const PORT = require("@/config/env").PORT;

export function get_reservas(){
    return axios.get(`${HOST}:${PORT}/reserva`)
    .then( res => {
        return res.data;
    })
    .catch( error => {
        return []
    })
}
export function post_reserva(body_reserva){

    return axios.post(`${HOST}:${PORT}/reserva`, body_reserva)
    .then( res => {
        return res.data;
    })
    .catch( error => {
        var [msg] = error.response.data.message;
        return msg;
    })
}
export function delete_reserva(id){
    return axios.delete(`${HOST}:${PORT}/reserva/${id}`)
    .then( res => {
        return res.data;
    })
    .catch( error => {
 
        return null;
    })
}