import { Avatar, Button, IconButton, Menu, MenuItem } from '@material-ui/core'
import styled from 'styled-components'
import ChatIcon from '@material-ui/icons/Chat'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchIcon from '@material-ui/icons/Search'
import { useState } from 'react'
import * as EmailValidator from 'email-validator'

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
          <IconButton>
            <ChatIcon onClick={createChat} />
          </IconButton>
          <IconButton>
            <MoreVertIcon onClick={() => setAnchorEl(true)} />
          </IconButton>
          <Menu
            id='simple-menu'
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            keepMounted
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
            <MenuItem onClick={() => setAnchorEl(false)}>Logout</MenuItem>
          </Menu>
        </IconsContainer>
      </Header>
      <Search>
        <SearchIcon />
        <SearchInput placeholder='Search in chats' />
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
  background-color: white;
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
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 2px;
`

const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
`

export default Sidebar
