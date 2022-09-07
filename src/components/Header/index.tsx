import logo from '../../assets/Logo.png'
import { Timer, Scroll } from 'phosphor-react'
import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <NavLink to="/">
          <Timer size={32} />
        </NavLink>
        <NavLink to="/history">
          <Scroll size={32} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
