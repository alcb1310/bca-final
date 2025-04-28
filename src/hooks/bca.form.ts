import { TextField } from '@/components/form/input'
import { PasswordTextField } from '@/components/form/password'
import { SubscribeButton } from '@/components/form/subscribe-button'
import { SwitchField } from '@/components/form/switch'
import { createFormHook, createFormHookContexts } from '@tanstack/react-form'

export const { fieldContext, useFieldContext, formContext, useFormContext } =
  createFormHookContexts()

export const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    TextField,
    PasswordTextField,
    SwitchField,
  },
  formComponents: {
    SubscribeButton,
  },
})
