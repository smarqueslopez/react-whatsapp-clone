import {
  Avatar,
  TextField,
  IconButton,
  Menu,
  MenuItem,
  InputAdornment
} from '@material-ui/core'
import styled from 'styled-components'
import ChatIcon from '@material-ui/icons/Chat'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchIcon from '@material-ui/icons/Search'
import { useState } from 'react'
import * as EmailValidator from 'email-validator'
import { auth } from '../firebase'

function Sidebar() {
  const [anchorEl, setAnchorEl] = useState(false)

  const createChat = () => {
    const input = prompt(
      'Please enter an email address for the user you whish to chat with'
    )

    if (!input && !EmailValidator.validate(input)) {
      return null
    } else {

    }
  }

  return (
    <Container>
      <Header>
        <UserAvatar />
        <IconsContainer>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton onClick={createChat}>
            <ChatIcon />
          </IconButton>
          <IconButton onClick={() => setAnchorEl(true)}>
            <MoreVertIcon />
          </IconButton>
          <Menu
            id='simple-menu'
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            keepMounted
            getContentAnchorEl={null}
            open={anchorEl}
            onClose={() => setAnchorEl(false)}
          >
            <MenuItem onClick={() => setAnchorEl(false)}>New Group</MenuItem>
            <MenuItem onClick={() => setAnchorEl(false)}>
              New Broadcast
            </MenuItem>
            <MenuItem onClick={() => setAnchorEl(false)}>Profile</MenuItem>
            <MenuItem onClick={() => setAnchorEl(false)}>
              Archived messges
            </MenuItem>
            <MenuItem onClick={() => setAnchorEl(false)}>
              Starred messages
            </MenuItem>
            <MenuItem onClick={() => setAnchorEl(false)}>
              Configuration
            </MenuItem>
            <MenuItem onClick={() => auth.signOut()}>Logout</MenuItem>
          </Menu>
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

const IconsContainer = styled.div``

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
        color: rgba(0, 0, 0, 0.54);
      }
    }
  }
`

export default Sidebar
