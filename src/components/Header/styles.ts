import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4.5rem;
  nav {
    display: flex;
    gap: 1rem;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3rem;
      height: 3rem;
      color: ${(props) => props.theme['gray-100']};
      border-top: 4px solid transparent;
      border-bottom: 4px solid transparent;
    }

    a:hover {
      border-bottom: 4px solid ${(props) => props.theme['green-500']};
      transition: 200ms;
    }
    a:focus {
      outline: none;
    }

    a.active {
      color: ${(props) => props.theme['green-500']};
    }
  }
`
