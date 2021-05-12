import '../styles/globals.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../firebase'
import Login from './login'
import { useEffect } from 'react'
import firebase from 'firebase'

function MyApp({ Component, pageProps }) {
  const [user] = useAuthState(auth)

  useEffect(() => {
    if (user) {
      db.collection('users').doc(user.uid).set(
        {
          email: user.email,
          lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
          photoURL: user.photoURL
        },
        { merge: true }
      )
    }
  }, [user])

  if (!user) return <Login />

  return <Component {...pageProps} />
}

export default MyApp
