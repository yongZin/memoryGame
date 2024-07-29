import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing:border-box;
  }
  input{
    padding:0;
    border:0;
    outline:none;
  }
  button{
    padding:0;
    border:0;
  }
  @media ${props => props.theme.M} {
		body{
      font-size:14px;
    }
	}
  @media ${props => props.theme.S} {
		body{
      font-size:12px;
    }
	}
  @media ${props => props.theme.XS} {
		body{
      font-size:10px;
    }
	}
`

export default GlobalStyle