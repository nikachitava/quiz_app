import React from "react";

import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";

interface CustomInputProps {
	control: Control<any>;
	name: string;
	label?: string;
	placeholder: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
	control,
	name,
	label,
	placeholder,
}) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<Input placeholder={placeholder} {...field} />
					</FormControl>

					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default CustomInput;
