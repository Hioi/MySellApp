import axios from 'axios'

let req=axios.create({
    baseURL:'http://localhost:3000',
    timeout:10000
})


export function getSeller(){
    return req.get('/api/seller')
}
export function getGoods(){
    return req.get('/api/goods')
}
export function getRatings(){
    return req.get('/api/ratings')
}