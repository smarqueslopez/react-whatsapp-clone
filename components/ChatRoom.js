import { Avatar, IconButton, TextField } from '@material-ui/core'
import styled from 'styled-components'
import RoomMenu from './RoomMenu'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { db } from '../firebase'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import MicIcon from '@material-ui/icons/Mic'

function ChatRoom() {
  const { id } = useParams()

  const [title, setTitle] = useState('')
  const [type, setType] = useState('')
  const [avatar, setAvatar] = useState('')
  const [lastSeen, setLastSeen] = useState('')
  const [chatUsers, setChatUsers] = useState([])

  const getLastSeen = () => {
    return new Date(lastSeen.seconds * 1000).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    })
  }

  useEffect(() => {
    if (id) {
      db.collection('rooms')
        .doc(id)
        .onSnapshot((snapshot) => {
          setTitle(snapshot.data().title)
          setType(snapshot.data().type)
          setAvatar(snapshot.data().avatar)
          setLastSeen(snapshot.data().lastSeen)
          if (snapshot.data().type === 'group') {
            db.collection('rooms')
              .doc(id)
              .collection('chatUsers')
              .onSnapshot((snapshot) => {
                setChatUsers([
                  ...snapshot?.docs?.map((doc) => doc?.data()?.name)
                ])
              })
          }
        })
    }
  }, [id])

  const getChatUsers = () => {
    return chatUsers.map((user, index) => {
      if (index !== chatUsers.length - 1) {
        return `${user}, `
      }
      return user
    })
  }

  return (
    <Container>
      <HeaderContainer>
        <TitleContainer>
          <Avatar title={title} src={avatar} />
          <InfoRoom>
            <TitleRoom title={title}>{title}</TitleRoom>
            {type !== 'chat' ? (
              <UserRoom title={getChatUsers()}>{getChatUsers()}</UserRoom>
            ) : lastSeen ? (
              <Status>{`Last seen ${getLastSeen(lastSeen)}`}</Status>
            ) : (
              <></>
            )}
          </InfoRoom>
        </TitleContainer>
        <IconsContainer>
          <RoomMenu type={type} />
        </IconsContainer>
      </HeaderContainer>
      <ChatContainer>
      </ChatContainer>
      <InputContainer>
        <IconsContainer>
          <IconButton>
            <InsertEmoticonIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
        </IconsContainer>
        <MessageInputContainer>
          <MessageInput placeholder='Write a message here' />
        </MessageInputContainer>
        <IconsContainer>
          <IconButton>
            <MicIcon />
          </IconButton>
        </IconsContainer>
      </InputContainer>
    </Container>
  )
}

const HeaderContainer = styled.section`
  height: 80px;
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  background-color: #ededed;
  border-bottom: 1px solid whitesmoke;
`

const TitleContainer = styled.div`
  width: calc(100% - 48px - 48px);
  display: flex;
  align-items: center;
  justify-content: center;
`

const InfoRoom = styled.div`
  height: 100%;
  width: calc(100% - 40px);
  padding: 5px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const TitleRoom = styled.h4`
  font-weight: 500;
`

const UserRoom = styled.div`
  padding-top: 5px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const Status = styled.div`
  padding-top: 5px;
  font-size: 14px;
`

const IconsContainer = styled.div`
  &&& {
    .MuiSvgIcon-root {
      color: rgb(145, 145, 145);
    }
  }
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const ChatContainer = styled.section`
  width: 100%;
  height: calc(100% - 80px - 80px);
  max-height: calc(100% - 80px - 80px);
  padding: 15px;
  background-image: url('/images/background-chat.png');
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(255, 255, 255, 0.08);
  }
`

const InputContainer = styled.section`
  width: 100%;
  height: 80px;
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ededed;
  border-top: 1px solid whitesmoke;
`

const MessageInputContainer = styled.div`
  width: calc(100% - 96px - 48px);
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const MessageInput = styled(TextField)`
  outline-width: 0;
  border: none;
  flex: 1;

  &&& {
    padding: 0 15px;
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

export default ChatRoom
