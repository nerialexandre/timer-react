import { FormContainer, HomeContainer, TimerDownContainer } from './styles'
import { Play } from 'phosphor-react'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <div>
            <label htmlFor="task">Vou trabalhar em</label>
            <input
              id="task"
              type="text"
              placeholder="Dê um nome para o seu projeto"
            />
          </div>
          <div>
            <label htmlFor="minutesAmount">durante</label>
            <input id="minutesAmount" type="number" />
            <span>minutos.</span>
          </div>
        </FormContainer>
        <TimerDownContainer>
          <span>0</span>
          <span>0</span>
          <div>:</div>
          <span>0</span>
          <span>0</span>
        </TimerDownContainer>
        <button type="submit">
          <Play size={26} /> Começar
        </button>
      </form>
    </HomeContainer>
  )
}
