import { apiFB } from "../../utils/axios"
import { SignUpPayload } from "./types"


const add = async (user: SignUpPayload) => {

    const response = await apiFB.post('/users.json', user)
    return response.data

}



export const servicesUser = { add }