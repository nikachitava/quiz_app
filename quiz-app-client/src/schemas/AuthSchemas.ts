import {z} from 'zod'

export const loginFormSchema = z.object({
	email: z.string().min(1, "Email is required").email(),
	password: z.string().min(1, "Password is requireds").max(25, "Maximum lenght is 25 symbols"),
});

export const registerFormSchema = z.object({
    name: z.string().min(1, "Name is required").max(20, "Maximum name lenght is 20 symbols"),
    surname: z.string().min(1, "Surname is required").max(20, "Surname name lenght is 20 symbols"),
	email: z.string().min(1, "Email is required").email(),
	password: z.string().min(1, "Password is requireds").max(25, "Maximum lenght is 25 symbols"),
});