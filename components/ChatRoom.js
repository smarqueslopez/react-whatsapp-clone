import { Avatar, IconButton, TextField } from '@material-ui/core'
import styled from 'styled-components'
import RoomMenu from './RoomMenu'
import ComputerIcon from '@material-ui/icons/Computer'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { db } from '../firebase'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import MicIcon from '@material-ui/icons/Mic'

function ChatRoom() {
  const { id } = useParams()

  const [title, setTitle] = useState('')
  const [avatar, setAvatar] = useState('')

  useEffect(() => {
    if (id) {
      db.collection('rooms')
        .doc(id)
        .onSnapshot((snapshot) => {
          setTitle(snapshot.data().title)
          setAvatar(snapshot.data().avatar)
        })
    }
  }, [id])

  return (
    <>
      {id ? (
        <Container>
          <HeaderContainer>
            <TitleContainer>
              <AvatarContainer src={avatar} />
              <InfoRoom>
                <TitleRoom>{title}</TitleRoom>
                <UserRoom>Users</UserRoom>
              </InfoRoom>
            </TitleContainer>
            <IconsContainer>
              <RoomMenu />
            </IconsContainer>
          </HeaderContainer>
          <ChatContainer></ChatContainer>
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
      ) : (
        <EmptyContainer>
          <Image />
          <Intro>Keep your phone connected</Intro>
          <IntroSecondary>
            WhatsApp Web connects to your phone to sync messages. To reduce data
            usage, connect your phone to Wi-Fi.
          </IntroSecondary>
          <GetAppMsg>
            <ComputerIcon />
            <span>WhatsApp is available for Windows.</span>
            <a href='' target='_blank'>
              Get it here
            </a>
            .
          </GetAppMsg>
        </EmptyContainer>
      )}
    </>
  )
}

const EmptyContainer = styled.section`
  width: 100%;
  height: 100%;
  padding-top: 28px;
  padding-bottom: 28px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  cursor: default;
  background-color: #f8f9fa;
  border-bottom: 6px solid #4adf83;
`

const Image = styled.div`
  width: 355px;
  height: 355px;
  margin: 0 auto;
  border-radius: 50%;
  background-image: url('/images/intro-connection-light.jpg');
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
`
const Intro = styled.div`
  margin-top: 38px;
  font-size: 36px;
  font-weight: 300;
  color: #525252;
  text-align: center;
`
const IntroSecondary = styled.div`
  margin-top: 24px;
  font-size: 14px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.45);
  text-align: center;
`
const GetAppMsg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 34px;
  margin-left: 5px;
  text-align: unset;
  color: rgba(0, 0, 0, 0.45);

  span {
    margin: 0 5px;
  }

  a {
    color: #07bc4c;
  }
`

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
  display: flex;
  align-items: center;
  justify-content: center;
`

const InfoRoom = styled.div`
  padding: 5px 15px;
  display: flex;
  flex-direction: column;
`

const AvatarContainer = styled(Avatar)``

const TitleRoom = styled.div``

const UserRoom = styled.div``

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

const ChatContainer = styled.div`
  width: 100%;
  height: calc(100% - 80px - 80px);
  max-height: calc(100% - 80px - 80px);
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

const InputContainer = styled.div`
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
