import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { useAppForm } from '@/hooks/bca.form'
import { useRouter } from '@tanstack/react-router'

export default function Login() {
  const router = useRouter()
  const form = useAppForm({
    defaultValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values)

      router.navigate({ to: '/' })
    }
  })

  return (
    <form className='w-1/2' onSubmit={(e) => {
      e.preventDefault()
      e.stopPropagation()
      form.handleSubmit()
    }}>
      <Card className='w-2/3 ms-auto me-auto'>
        <CardHeader>
          <CardTitle className='text-xl' data-testid='login-title'>
            Iniciar sesión
          </CardTitle>

          <CardDescription data-testid='login-description'>
            Ingrese su correo y contraseña para ingresar
          </CardDescription>
        </CardHeader>

        <CardContent className='flex flex-col gap-4'>
          <form.AppField name='email'>
            {(field) => <field.TextField
              label='Email'
              testId='login-email'
              placeholder='test@test.com'
            />}
          </form.AppField>

          <form.AppField name='password' data-testid='login-password'>
            {(field) => <field.TextField
              label='Contraseña'
              testId='login-password'
              placeholder='su contraseña'
            />}
          </form.AppField>
        </CardContent>

        <CardFooter>
          <form.AppForm>
            <form.SubscribeButton
              label='Ingresar'
              className='uppercase tracking-wide font-bold'
              testId='login-submit'
            />
          </form.AppForm>
        </CardFooter>
      </Card>
    </form>
  )
}
