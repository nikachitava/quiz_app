import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { CustomInput } from "@/components/custom/CustomInput";
import { loginFormSchema } from "@/schemas/AuthSchemas";

interface ILoginFormProps {
	hadleLoginPage: () => void;
}

const LoginForm: React.FC<ILoginFormProps> = ({ hadleLoginPage }) => {
	const form = useForm<z.infer<typeof loginFormSchema>>({
		resolver: zodResolver(loginFormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	function onSubmit(values: z.infer<typeof loginFormSchema>) {
		console.log(values);
	}

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
					onClick={hadleLoginPage}
				>
					I don't have an account
				</p>
				<Button type="submit" className="w-full">
					Submit
				</Button>
			</form>
		</Form>
	);
};

export default LoginForm;
