import { HeaderContainer } from './styles'

import LogoInite from '../../assets/LogoIgnite.svg'
import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoInite} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          {<Timer size={24} />}
        </NavLink>
        <NavLink to="/history" title="Histórico">
          {<Scroll size={24} />}
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
