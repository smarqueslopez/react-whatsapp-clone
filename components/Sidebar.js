import { Avatar, TextField, InputAdornment } from '@material-ui/core'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search'
import { useEffect, useState } from 'react'
import { auth, db } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import ProfileDrawer from './ProfileDrawer'
import MenuSidebar from './MenuSidebar'
import ChatSidebar from './ChatSidebar'

function Sidebar() {
  const [user] = useAuthState(auth)

  const [rooms, setRooms] = useState([])
  useEffect(() => {
    db.collection('rooms')
      .orderBy('date', 'desc')
      .onSnapshot((snapshot) =>
        setRooms(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data()
          }))
        )
      )
  }, [])

  const [anchorDrawer, setAnchorDrawer] = useState(false)
  const openDrawer = () => setAnchorDrawer(true)
  const closeDrawer = () => setAnchorDrawer(false)

  return (
    <Container>
      <Header>
        <UserAvatar src={user.photoURL} onClick={openDrawer} />
        <IconsContainer>
          <MenuSidebar />
        </IconsContainer>
      </Header>
      <Search>
        <SearchInput
          placeholder='Search or start a new chat'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
      </Search>
      <Rooms>
        {rooms.map((room) => (
          <ChatSidebar
            key={room.id}
            id={room.id}
            title={room.data.title}
            date={room.data.date}
            avatar={room.data.avatar}
          />
        ))}
      </Rooms>
      <ProfileDrawer
        open={anchorDrawer}
        openDrawer={openDrawer}
        closeDrawer={closeDrawer}
      />
    </Container>
  )
}

const Container = styled.aside``

const Header = styled.section`
  height: 80px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #ededed;
  border-bottom: 1px solid whitesmoke;
`
const UserAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`

const IconsContainer = styled.div`
  &&& {
    .MuiSvgIcon-root {
      color: rgb(145, 145, 145);
    }
  }
`

const Search = styled.section`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 2px;
  background-color: #f6f6f6;
  border-bottom: 1px solid whitesmoke;
`

const SearchInput = styled(TextField)`
  outline-width: 0;
  border: none;
  flex: 1;

  &&& {
    padding: 0 10px;
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

const Rooms = styled.section`
  max-height: calc(100vh - 143px);
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

  @media only screen and (min-width: 1441px) {
    max-height: calc(96vh - 143px);
  }
`

export default Sidebar
