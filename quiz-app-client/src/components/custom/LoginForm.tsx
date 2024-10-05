import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { CustomInput } from "@/components/custom/CustomInput";
import { loginFormSchema } from "@/schemas/AuthSchemas";
import { makeRequest } from "@/lib/axios";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

interface ILoginFormProps {
	toggleLoginPage: () => void;
}

const LoginForm: React.FC<ILoginFormProps> = ({ toggleLoginPage }) => {
	const [errors, setErrors] = useState("");
	const { setCurrentUser } = useContext(AuthContext);
	const navigate = useNavigate();

	const form = useForm<z.infer<typeof loginFormSchema>>({
		resolver: zodResolver(loginFormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof loginFormSchema>) => {
		try {
			const response = await makeRequest.post("user/auth", values, {
				withCredentials: true,
			});
			localStorage.setItem("user", JSON.stringify(response.data));
			setCurrentUser(response.data);
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
					name="email"
					label="Email"
					placeholder="Enter your email"
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
					I don't have an account
				</p>
				{errors && <p className="text-red-600">{errors}</p>}
				<Button type="submit" className="w-full">
					Submit
				</Button>
			</form>
		</Form>
	);
};

export default LoginForm;
