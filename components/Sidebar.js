import {
  Avatar,
  TextField,
  InputAdornment
} from '@material-ui/core'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search'
import { useState } from 'react'
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import ProfileDrawer from './ProfileDrawer'
import MenuSidebar from './MenuSidebar'

function Sidebar() {
  const [user] = useAuthState(auth)

  const [anchorDrawer, setAnchorDrawer] = useState(false)
  const openDrawer = () => setAnchorDrawer(true)
  const closeDrawer = () => setAnchorDrawer(false)

  return (
    <Container>
      <Header>
        <UserAvatar src={user.photoURL} onClick={openDrawer} />
        <IconsContainer>
          <MenuSidebar />
        </IconsContainer>
      </Header>
      <Search>
        <SearchInput
          placeholder='Search or start a new chat'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
      </Search>
      <ProfileDrawer
        open={anchorDrawer}
        openDrawer={openDrawer}
        closeDrawer={closeDrawer}
      />
    </Container>
  )
}

const Container = styled.div``

const Header = styled.div`
  height: 80;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #ededed;
  border-bottom: 1px solid whitesmoke;
`
const UserAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`

const IconsContainer = styled.div`
  &&& {
    .MuiSvgIcon-root {
      color: rgb(145, 145, 145);
    }
  }
`

const Search = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 2px;
  background-color: #f6f6f6;
`

const SearchInput = styled(TextField)`
  outline-width: 0;
  border: none;
  flex: 1;

  &&& {
    padding: 0 10px;
    border-radius: 25px;
    background-color: white;

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

const Chats = styled.div`
`

export default Sidebar
