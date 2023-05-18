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
        return null;
    })
}