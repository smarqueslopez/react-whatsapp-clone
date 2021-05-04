import { Avatar } from '@material-ui/core'
import { useState } from 'react'
import styled from 'styled-components'
import MenuItemChat from './MenuItemChat'
import { Link, useLocation } from 'react-router-dom'

function ChatSidebar({ id, title, avatar, date, type }) {
  const [showOptions, setShowOptions] = useState(false)

  const routeTo = `/chat/${id}`
  const location = useLocation()
  const className = location?.pathname === routeTo ? 'active' : ''

  return (
    <LinkContainer to={routeTo}>
      <Container
        className={className}
        onMouseEnter={() => setShowOptions(true)}
        onMouseLeave={() => setShowOptions(false)}
      >
        <AvatarContainer>
          <Avatar src={avatar} />
        </AvatarContainer>
        <RoomContainer>
          <Title>
            <h4 title={title}>{title}</h4>
            <span>
              {new Date(date.seconds * 1000).toLocaleDateString('es-ES')}
            </span>
          </Title>
          <LastMessage>
            {type === 'chat' ? <></> : <User>User:</User>}
            <Message>Last message sending in chatroom</Message>
            {showOptions ? <MenuItemChat /> : <></>}
          </LastMessage>
        </RoomContainer>
      </Container>
    </LinkContainer>
  )
}

const LinkContainer = styled(Link)`
  .active {
    background-color: #ebebeb;
    cursor: pointer;
  }
`

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
  padding: 0 5px;

  h4 {
    font-weight: 500;
  }

  span {
    font-size: 12px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.6);
  }
`

const LastMessage = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.6);
`

const User = styled.div`
  padding-right: 5px;
`

const Message = styled.div`
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export default ChatSidebar
