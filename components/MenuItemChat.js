import { Menu, MenuItem } from '@material-ui/core'
import { useState } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

function MenuItemChat({ type }) {
  const [anchorMenu, setAnchorMenu] = useState(null)
  const openMenu = (event) => setAnchorMenu(event.currentTarget)
  const closeMenu = () => setAnchorMenu(null)

  return (
    <>
      <ExpandMoreIcon onClick={openMenu} />
      <Menu
        anchorEl={anchorMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        keepMounted
        getContentAnchorEl={null}
        open={Boolean(anchorMenu)}
        onClose={closeMenu}
      >
        {type === 'chat' ? (
          <MenuItem onClick={closeMenu}>Archive chat</MenuItem>
        ) : (
          <MenuItem onClick={closeMenu}>Archive group</MenuItem>
        )}
        <MenuItem onClick={closeMenu}>Mute Notifications</MenuItem>
        {type === 'chat' ? (
          <div>
            <MenuItem onClick={closeMenu}>Delete chat</MenuItem>
            <MenuItem onClick={closeMenu}>Fix chat</MenuItem>
          </div>
        ) : (
          <div>
            <MenuItem onClick={closeMenu}>Delete group</MenuItem>
            <MenuItem onClick={closeMenu}>Fix group</MenuItem>
          </div>
        )}
        <MenuItem onClick={closeMenu}>Mark as unread</MenuItem>
      </Menu>
    </>
  )
}

export default MenuItemChat
