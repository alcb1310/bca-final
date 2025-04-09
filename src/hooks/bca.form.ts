import { TextField } from '@/components/form/input';
import { SubscribeButton } from '@/components/form/subscribe-button';
import { createFormHook, createFormHookContexts } from '@tanstack/react-form';

export const { fieldContext, useFieldContext, formContext, useFormContext } =
  createFormHookContexts();

export const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    TextField,
  },
  formComponents: {
    SubscribeButton,
  },
});
