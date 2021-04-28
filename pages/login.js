import styled from 'styled-components'
import { auth, provider } from '../firebase'

function login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert)
  }

  return (
    <Container>
      <LoginContainer>
        <Logo
          src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png'
          alt='Whatsapp logo'
        />
        <GoogleBtn onClick={signIn}>
          <div>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
              alt='Google logo'
            />
          </div>
          <p>Sign in with Google</p>
        </GoogleBtn>
      </LoginContainer>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: whitesmoke;
`

const LoginContainer = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`

const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 50px;
`

const GoogleBtn = styled.div`
  width: 250px;
  height: 42px;
  background-color: #4285f4;
  border-radius: 2px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;

  div {
    position: absolute;
    margin-top: 1px;
    margin-left: 1px;
    width: 40px;
    height: 40px;
    border-radius: 2px;
    background-color: white;

    img {
      position: absolute;
      margin-top: 11px;
      margin-left: 11px;
      width: 18px;
      height: 18px;
    }
  }

  p {
    width: 100%;
    padding-left: 70px;
    float: right;
    margin: 11px 11px 0 0;
    color: white;
    font-size: 14px;
    letter-spacing: 0.2px;
    font-family: 'Roboto', sans-serif;
  }

  :hover {
    box-shadow: 0 0 6px #4285f4;
  }

  :active {
    background: #1669f2;
  }
`

export default login
