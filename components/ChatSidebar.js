import { Avatar } from '@material-ui/core'
import styled from 'styled-components'

function ChatSidebar({ id, title, avatar, date }) {
  return (
    <Container>
      <AvatarContainer>
        <Avatar src={avatar} />
      </AvatarContainer>
      <RoomContainer>
        <Title>
          <h2>{title}</h2>
          <p>{new Date(date.seconds * 1000).toLocaleDateString('es-ES')}</p>
        </Title>
        <p>Last message...</p>
      </RoomContainer>
    </Container>
  )
}

const Container = styled.div`
  padding: 10px;
  display: flex;

  :hover,
  :active {
    background-color: #ebebeb;
  }

&&& {
    .MuiAvatar-root {
      width: 65px;
      height: 65px;
    }

`

const AvatarContainer = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
`

const RoomContainer = styled.div`
  width: 100%;
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

export default ChatSidebar
