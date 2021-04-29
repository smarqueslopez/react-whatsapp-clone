import styled from 'styled-components'
import {
  Avatar,
  Drawer,
  IconButton,
  Input,
  InputAdornment,
  InputLabel
} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
import EditIcon from '@material-ui/icons/Edit'

function ProfileDrawer(props) {
  const [user] = useAuthState(auth)

  return (
    <Container>
      <ContainerDrawer
        anchor='left'
        open={props.open}
        onClose={props.closeDrawer}
      >
        <Header>
          <Wrapper>
            <IconButton onClick={props.closeDrawer}>
              <ArrowBackIcon color='inherit' />
            </IconButton>
            <p>Profile</p>
          </Wrapper>
        </Header>
        <UserInfo>
          <Avatar src={user.photoURL} alt={user.displayName} />
          <NameContainer>
            <Label>Your name</Label>
            <Input
              value={user.displayName}
              fullWidth
              readOnly
              endAdornment={
                <InputAdornment position='end'>
                  <EditIcon />
                </InputAdornment>
              }
            />
          </NameContainer>
          <Paragraph>
            This is not your username or pin. This name will be visible to your
            WhatsApp contacts.
          </Paragraph>
          <StateContainer>
            <Label>Info</Label>
            <Input
              value={'Hey there! I am using WhatsApp.'}
              fullWidth
              readOnly
              endAdornment={
                <InputAdornment position='end'>
                  <EditIcon />
                </InputAdornment>
              }
            />
          </StateContainer>
        </UserInfo>
      </ContainerDrawer>
    </Container>
  )
}

const Container = styled.div``

const ContainerDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    background-color: #ededed;
    width: 100%;
  }
`

const Header = styled.div`
  height: 140px;
  width: 100%;
  display: flex;
  color: #fff;
  background-color: #00bfa5;

  &&& {
    .MuiSvgIcon-root {
      color: #fff;
    }
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 70px;
  p {
    margin-left: 10px;
    font-weight: 500;
  }
`

const UserInfo = styled.div`
  width: 100%;
  height: calc(100vh - 140px);
  display: flex;
  flex-direction: column;
  align-items: center;

  &&& {
    .MuiAvatar-root {
      width: 200px;
      height: 200px;
      margin: 32px;
    }

    .MuiInputBase-root {
      border-bottom: none;

      &::before {
        border-bottom: none;
      }

      &.MuiInput-underline:after {
        border-bottom: none;
      }

      .MuiInputAdornment-root {
        color: rgb(145, 145, 145);
      }
    }
  }
`

const NameContainer = styled.div`
  width: 100%;
  padding: 14px 30px 10px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);

  &&& {
    .MuiFormLabel-root {
      color: #009688;
    }
  }
`

const Label = styled(InputLabel)`
  margin-bottom: 20px;
`

const StateContainer = styled.div`
  width: 100%;
  padding: 14px 30px 10px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);

  &&& {
    .MuiFormLabel-root {
      color: #009688;
    }
  }
`

const Paragraph = styled.p`
padding: 15px 30px;
`

export default ProfileDrawer
