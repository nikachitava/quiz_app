import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { CustomInput } from "@/components/custom/CustomInput";
import { registerFormSchema } from "@/schemas/AuthSchemas";
import { makeRequest } from "@/lib/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface IRegisterFormProps {
	toggleLoginPage: () => void;
}

const RegisterForm: React.FC<IRegisterFormProps> = ({ toggleLoginPage }) => {
	const [errors, setErrors] = useState("");
	const form = useForm<z.infer<typeof registerFormSchema>>({
		resolver: zodResolver(registerFormSchema),
		defaultValues: {
			name: "",
			surname: "",
			email: "",
			password: "",
		},
	});
	const navigate = useNavigate();

	const onSubmit = async (values: z.infer<typeof registerFormSchema>) => {
		try {
			await makeRequest.post("user/register", values, {
				withCredentials: true,
			});

			navigate("/");
		} catch (error: any) {
			if (error.response && error.response.status === 400) {
				setErrors(error.response.data.message);
			} else {
				setErrors("Something went wrong. Please try again.");
			}
		}
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="min-w-[300px] max-w-lg w-[500px] space-y-8 mx-auto"
			>
				<CustomInput
					control={form.control}
					name="name"
					label="Name"
					placeholder="Enter your name"
					type="text"
					styles="h-12"
				/>
				<CustomInput
					control={form.control}
					name="surname"
					label="Surname"
					placeholder="Enter your surname"
					type="text"
					styles="h-12"
				/>
				<CustomInput
					control={form.control}
					name="email"
					label="Email"
					placeholder="Enter your email"
					type="text"
					styles="h-12"
				/>
				<CustomInput
					control={form.control}
					name="password"
					label="Password"
					placeholder="Enter your password"
					type="password"
					styles="h-12"
				/>

				<p
					className="text-sm text-gray-400 cursor-pointer"
					onClick={toggleLoginPage}
				>
					I already have an account
				</p>
				{errors && <p className="text-red-600">{errors}</p>}
				<Button type="submit" className="w-full">
					Submit
				</Button>
			</form>
		</Form>
	);
};

export default RegisterForm;
