import { object, string} from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const loginSchema = object({
    email:string().required(),
    pass: string().required(),
})

export const validationSchema = yupResolver(loginSchema)