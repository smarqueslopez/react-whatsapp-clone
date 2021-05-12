import { Menu, MenuItem } from '@material-ui/core'
import React, { useState } from 'react'
import styled from 'styled-components'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'

function Message({ typeChat, title, content, timestamp }) {
  const [user] = useAuthState(auth)

  const reciever = title === user.displayName

  const [showOptions, setShowOptions] = useState(false)

  const [anchorMenu, setAnchorMenu] = useState(null)
  const openMenu = (event) => setAnchorMenu(event.currentTarget)
  const closeMenu = () => setAnchorMenu(null)

  return (
    <Container reciever={reciever}>
      <ContainerMessage
        reciever={reciever}
        onMouseEnter={() => setShowOptions(true)}
        onMouseLeave={() => setShowOptions(false)}
      >
        <TitleContainer>
          <User reciever={reciever}>{reciever ? user.displayName : title}</User>
          {showOptions ? (
            <>
              <ExpandMoreIcon onClick={openMenu} />
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
                <MenuItem onClick={closeMenu}>Reply</MenuItem>
                <MenuItem onClick={closeMenu}>Resend message</MenuItem>
                <MenuItem onClick={closeMenu}>Highlight message</MenuItem>
                <MenuItem onClick={closeMenu}>Delete message</MenuItem>
              </Menu>
            </>
          ) : (
            <></>
          )}
        </TitleContainer>
        <ContentContainer>{content}</ContentContainer>
        <TimeContainer>{timestamp}</TimeContainer>
      </ContainerMessage>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) => (props.reciever ? 'flex-end' : 'flex-start')};
`

const ContainerMessage = styled.div`
  max-width: 60%;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  border-radius: ${(props) =>
    props.reciever ? '5px 0px 5px 5px' : '0px 5px 5px 5px'};
  background: ${(props) => (props.reciever ? '#e1ffc7' : '#ffffff')};
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);
`

const TitleContainer = styled.div`
  width: 100%;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const User = styled.div`
  width: 100%;
  padding: 2px 0;
  display: flex;
  font-weight: 600;
  font-size: 16px;
  justify-content: flex-start;
  color: ${(props) => (props.reciever ? '#6bcbef' : '#e542a3')};
  cursor: pointer;
`

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 0 12px;
  margin-bottom: 12px;
  font-weight: 400;
  font-size: 14px;
  justify-content: flex-start;
`

const TimeContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 0 12px;
  margin-bottom: 12px;
  font-weight: 500;
  font-size: 12px;
  justify-content: flex-end;
  color: rgba(0, 0, 0, 0.6);
`

export default Message
