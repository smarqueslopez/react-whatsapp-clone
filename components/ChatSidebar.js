import { Avatar } from '@material-ui/core'
import { useState } from 'react'
import styled from 'styled-components'
import MenuItemChat from './MenuItemChat'

function ChatSidebar({ id, title, avatar, date }) {

    const [showOptions, setShowOptions] = useState(false)

  const mouseEnter = () => {
    showOptions = true
  }

  return (
    <Container
      onMouseEnter={() => setShowOptions(true)}
      onMouseLeave={() => setShowOptions(false)}
    >
      <AvatarContainer>
        <Avatar src={avatar} />
      </AvatarContainer>
      <RoomContainer>
        <Title>
          <span title={title}>{title}</span>
          <span>
            {new Date(date.seconds * 1000).toLocaleDateString('es-ES')}
          </span>
        </Title>
        <LastMessage>
          <User>User:</User>
          <Message>Last message sending in chatroom</Message>
          {showOptions ? <MenuItemChat /> : <></>}
        </LastMessage>
      </RoomContainer>
    </Container>
  )
}

const Container = styled.div`
  max-width: 350px;
  padding: 5px;
  display: flex;
  overflow: hidden;
  border-bottom: 1px solid whitesmoke;

  :hover,
  :active {
    background-color: #ebebeb;
    cursor: pointer;
  }

  .MuiAvatar-root {
    width: 50px;
    height: 50px;
  }
`

const AvatarContainer = styled.div`
  width: 60px;
  padding: 5px;
  display: flex;
  align-items: center;
`

const RoomContainer = styled.div`
  width: 270px;
  padding: 5px 5px 5px 10px;
  h2,
  p {
    padding: 0;
    margin: 0;
  }
`

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LastMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const User = styled.div``

const Message = styled.div`
  display: block;
  padding: 0 5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export default ChatSidebar
