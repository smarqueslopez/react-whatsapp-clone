import { IconButton, Menu, MenuItem } from '@material-ui/core'
import { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import MoreVertIcon from '@material-ui/icons/MoreVert'

function RoomMenu({ type }) {
  const [anchorMenu, setAnchorMenu] = useState(null)
  const openMenu = (event) => setAnchorMenu(event.currentTarget)
  const closeMenu = () => setAnchorMenu(null)

  return (
    <>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <IconButton onClick={openMenu}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorMenu}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        keepMounted
        getContentAnchorEl={null}
        open={Boolean(anchorMenu)}
        onClose={closeMenu}
      >
        {type === 'chat' ? (
          <MenuItem onClick={closeMenu}>Contact Info</MenuItem>
        ) : (
          <MenuItem onClick={closeMenu}>Group Info</MenuItem>
        )}
        <MenuItem onClick={closeMenu}>Select Messages</MenuItem>
        <MenuItem onClick={closeMenu}>Silent Notifications</MenuItem>
        <MenuItem onClick={closeMenu}>Empty Messages</MenuItem>
        {type === 'chat' ? (
          <MenuItem onClick={closeMenu}>Remove Chat</MenuItem>
        ) : (
          <MenuItem onClick={closeMenu}>Remove Group</MenuItem>
        )}
      </Menu>
    </>
  )
}

export default RoomMenu
