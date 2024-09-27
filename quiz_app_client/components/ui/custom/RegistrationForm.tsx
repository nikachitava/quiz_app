"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomInput from "@/components/ui/custom/CustomInput";
import { RegistrationFormSchema } from "@/schemas/RegistrationFormSchema";
import bg from "../../../assets/images/background.jpeg";
import Image from "next/image";

const RegistrationForm: React.FC<{ toogleLoginPage: () => void }> = ({
	toogleLoginPage,
}) => {
	const form = useForm<z.infer<typeof RegistrationFormSchema>>({
		resolver: zodResolver(RegistrationFormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = (values: z.infer<typeof RegistrationFormSchema>) => {
		console.log(values);
	};

	return (
		<div className="flex justify-between items-center">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-8 max-w-2xl w-full mx-auto"
				>
					<h2 className="text-text font-bold text-4xl">
						REGISTRATION
					</h2>
					<CustomInput
						control={form.control}
						name="name"
						placeholder="Name"
					/>
					<CustomInput
						control={form.control}
						name="surname"
						placeholder="Surname"
					/>
					<CustomInput
						control={form.control}
						name="email"
						placeholder="Email"
					/>
					<CustomInput
						control={form.control}
						name="password"
						placeholder="Password"
					/>
					<p
						className="text-sm text-text cursor-pointer"
						onClick={toogleLoginPage}
					>
						I already have an account
					</p>
					<Button type="submit" className="w-full">
						Submit
					</Button>
				</form>
			</Form>
			<Image
				src={bg}
				width={1000}
				height={1000}
				alt="background"
				className="h-screen"
			/>
		</div>
	);
};

export default RegistrationForm;
