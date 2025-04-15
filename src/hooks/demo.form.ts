import { createFormHook } from "@tanstack/react-form";

import {
	PasswordTextField,
	Select,
	SubscribeButton,
	TextArea,
	TextField,
} from "../components/demo.FormComponents";
import { fieldContext, formContext } from "./demo.form-context";

export const { useAppForm } = createFormHook({
	fieldComponents: {
		TextField,
		Select,
		TextArea,
		PasswordTextField,
	},
	formComponents: {
		SubscribeButton,
	},
	fieldContext,
	formContext,
});
