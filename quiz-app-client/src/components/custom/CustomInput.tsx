import { Input } from "@/components/ui/input";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Control } from "react-hook-form";

interface ICustomInputProps {
	control: Control<any>;
	name: string;
	label: string;
	placeholder: string;
	description?: string;
	type?: string;
	styles?: string;
}

export const CustomInput: React.FC<ICustomInputProps> = ({
	control,
	name,
	label,
	placeholder,
	description,
	type,
	styles,
}) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<Input
							placeholder={placeholder}
							type={type}
							className={styles}
							{...field}
						/>
					</FormControl>
					<FormDescription>{description}</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};
