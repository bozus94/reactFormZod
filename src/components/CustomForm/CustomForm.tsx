import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { type formValues, schema } from "./models";
import { InputForm } from "./components";
import "./CustomForm.css";

export const CustomForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors /* isDirty, dirtyFields */ },
	} = useForm<formValues>({
		resolver: zodResolver(schema),
		mode: "onBlur",
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	const onSubmit: SubmitHandler<formValues> = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<InputForm control={control} label="Name" type="text" name="name" error={errors.name} />
			<InputForm control={control} label="Email" type="email" name="email" error={errors.email} />
			<InputForm control={control} label="Password" type="password" name="password" error={errors.password} />
			<InputForm
				control={control}
				label="Confirm Password "
				type="password"
				name="confirmPassword"
				error={errors.confirmPassword}
			/>
			<button type="submit">Send</button>
		</form>
	);
};
