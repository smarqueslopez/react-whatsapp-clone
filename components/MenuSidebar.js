import { IconButton, Menu, MenuItem } from '@material-ui/core'
import ChatIcon from '@material-ui/icons/Chat'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import React, { useState } from 'react'
import { auth, db } from '../firebase'
import * as EmailValidator from 'email-validator'

function MenuSidebar() {
  const signOut = () => auth.signOut()

  const [anchorMenu, setAnchorMenu] = useState(false)
  const openMenu = () => setAnchorMenu(true)
  const closeMenu = () => setAnchorMenu(false)

  const createChat = () => {
    const input = prompt(
      'Please enter an email address for the user you whish to chat with'
    )

    if (!input && !EmailValidator.validate(input)) {
      return null
    } else {
      db.collection('chats').add({})
    }
  }

  return (
    <>
      <IconButton>
        <DonutLargeIcon />
      </IconButton>
      <IconButton onClick={createChat}>
        <ChatIcon />
      </IconButton>
      <IconButton onClick={openMenu}>
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
        open={anchorMenu}
        onClose={closeMenu}
      >
        <MenuItem onClick={closeMenu}>New Group</MenuItem>
        <MenuItem onClick={closeMenu}>New Broadcast</MenuItem>
        <MenuItem onClick={closeMenu}>Profile</MenuItem>
        <MenuItem onClick={closeMenu}>Archived messges</MenuItem>
        <MenuItem onClick={closeMenu}>Starred messages</MenuItem>
        <MenuItem onClick={closeMenu}>Configuration</MenuItem>
        <MenuItem onClick={signOut}>Logout</MenuItem>
      </Menu>
    </>
  )
}

export default MenuSidebar
