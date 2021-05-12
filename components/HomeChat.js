import React from 'react'
import styled from 'styled-components'
import ComputerIcon from '@material-ui/icons/Computer'

function HomeChat() {
  return (
    <Container>
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
    </Container>
  )
}

const Container = styled.section`
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

export default HomeChat
