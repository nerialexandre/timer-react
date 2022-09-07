import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    justify-content: center;
    overflow: hidden;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    width: 100%;
    height: 4rem;
    background: ${(props) => props.theme['green-500']};
    border: none;
    border-radius: 8px;
    color: ${(props) => props.theme['gray-100']};
  }
`
export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1rem;
  font-weight: bold;

  div {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  input {
    background-color: ${(props) => props.theme['gray-800']};
    box-shadow: none;
    border-right: none;
    border-bottom: 3px solid ${(props) => props.theme['gray-500']};
    color: ${(props) => props.theme['gray-500']};
    padding: 0 0.2rem 0.2rem;
  }

  #task {
    width: 18rem;
  }
  #minutesAmount {
    width: 5rem;
  }

  input {
    font-size: 0.9rem;
    font-weight: bolder;
  }
`

export const TimerDownContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 1rem;
  font-family: 'Roboto Mono', monospace;
  font-size: clamp(2rem, 10vw, 10rem);

  span {
    padding: 1rem;
    background: ${(props) => props.theme['gray-700']};
    border-radius: 8px;
  }

  div {
    height: 100%;
    padding: 1rem;
    width: 5.5rem;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme['green-500']};
    overflow: hidden;
  }
`
