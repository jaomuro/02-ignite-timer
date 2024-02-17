import { z } from 'zod'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const newCycleFormValidationSchema = z.object({
  task: z.string().min(1, 'Informe a tarefa'),
  minutesAmount: z
    .number()
    .min(1, 'O ciclo precisa ter no mínimo 5 minutos')
    .max(60, 'O ciclo precisa ser no máximo 60 minutos'),
})

type NewCicleFormData = z.infer<typeof newCycleFormValidationSchema>

export function NewCycleForm() {
  const { register, handleSubmit, watch, reset } = useForm<NewCicleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        placeholder="Dê um nome para seu projeto"
        list="task-suggestions"
        disabled={!!activeCycle}
        {...register('task')}
      />
      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 3" />
        <option value="Projeto 2" />
        <option value="Banana" />
      </datalist>
      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        disabled={!!activeCycle}
        step={5}
        min={1}
        max={60}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </FormContainer>
  )
}
