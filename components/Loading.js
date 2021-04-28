import styled from 'styled-components'
import { Circle } from 'better-react-spinkit'
function Loading() {
  return (
    <Container>
      <Circle color='#3CBC28' size={60} />
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: whitesmoke;
`

export default Loading
