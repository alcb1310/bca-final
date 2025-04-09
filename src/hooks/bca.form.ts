import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import { TextField } from "../componets/form/input";
import { SubscribeButton } from "../componets/form/subscribe-button";

export const { fieldContext, useFieldContext, formContext, useFormContext } = createFormHookContexts()

export const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    TextField
  },
  formComponents: {
    SubscribeButton
  }
})
