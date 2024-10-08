import logo from '../../images/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
	display: flex;
	font-size: 30px;

	.logo-img {
		margin-right: 10px;
	}

`

function Logo() {
  return (
    <LogoContainer>
      <img src={logo} alt="logo" className="logo-img"></img>
      <p>
        <strong>My</strong>Books
      </p>
    </LogoContainer>
  )
}

export default Logo
