import Axios from "axios";

export const axios = Axios.create({
    baseURL:'http://localhost:80/iceadmin_v2/api'
})

// export const axios = Axios.create({
//     baseURL:'https://admin.beehiveeg.com/api'
// })