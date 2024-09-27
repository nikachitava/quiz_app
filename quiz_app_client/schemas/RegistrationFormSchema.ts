import { z } from "zod";

export const RegistrationFormSchema = z.object({
	name: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}),
	surname: z.string().min(2, {
		message: "Surname must be at least 2 characters.",
	}),
	email: z.string().min(1, {
		message: "Email is required",
	}).email("Enter your valid Email"),
    password: z.string().min(8, {message: "Password must be at least 8 characters"})
});
