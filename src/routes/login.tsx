import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useAppForm } from "@/hooks/demo.form";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const loginSchema = z.object({
	email: z
		.string({ message: "Ingrese un correo válido" })
		.email({ message: "Ingrese un correo válido" }),
	password: z.string().min(1, { message: "Contraseña requerida" }),
});

export const Route = createFileRoute("/login")({
	component: RouteComponent,
});

function RouteComponent() {
	const form = useAppForm({
		defaultValues: {
			email: "",
			password: "",
		},
		validators: {
			onSubmit: loginSchema,
		},
		onSubmit: ({ value }) => {
			console.log(value);
		},
	});

	return (
		<div className="h-screen w-full flex items-center justify-center ">
			<form
				className="w-1/2"
				onSubmit={(e) => {
					e.preventDefault();
					e.stopPropagation();
					form.handleSubmit();
				}}
			>
				<Card>
					<CardHeader>
						<CardTitle>Login</CardTitle>

						<CardDescription>
							Ingrese su email y contraseña para iniciar sesión
						</CardDescription>
					</CardHeader>

					<CardContent className="space-y-2">
						<form.AppField name="email">
							{(field) => <field.TextField label="Email" />}
						</form.AppField>

						<form.AppField name="password">
							{(field) => <field.PasswordTextField label="Contraseña" />}
						</form.AppField>
					</CardContent>

					<CardFooter>
						<form.AppForm>
							<form.SubscribeButton className="w-full" label="Ingresar" />
						</form.AppForm>
					</CardFooter>
				</Card>
			</form>
		</div>
	);
}
