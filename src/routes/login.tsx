import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useAppForm } from "@/hooks/demo.form";
import { login } from "@/queries/auth/login";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute, useRouter } from "@tanstack/react-router";
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
	const router = useRouter();
	const { mutate, error, isError } = useMutation({
		mutationFn: async ({
			email,
			password,
		}: { email: string; password: string }) => login(email, password),
		onSuccess: ({ token }) => {
			console.assert(token !== undefined, token);
			router.navigate({
				to: "/",
			});
		},
	});
	const form = useAppForm({
		defaultValues: {
			email: "",
			password: "",
		},
		validators: {
			onSubmit: loginSchema,
		},
		onSubmit: ({ value }) => {
			mutate(value);
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
							{isError && <p className="text-destructive">{error.message}</p>}
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
