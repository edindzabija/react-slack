import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { db } from '../firebase'
import firebase from 'firebase'

const ChatInput = ({ channelName, channelId, chatRef }) => {
  const [input, setInput] = useState('')
  console.log(channelId)

  const sendMessage = (e) => {
    e.preventDefault()

    if (!channelId) {
      return false
    }

    db.collection('rooms').doc(channelId).collection('messages').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: 'Beniz',
      userImage:
        'https://www.flaticon.com/svg/vstatic/svg/3135/3135715.svg?token=exp=1614099790~hmac=2df7511ef14e56ebc1f91a55c342b8db',
    })

    chatRef.current.scrollIntoView({
      behavior: 'smooth',
    })

    setInput('')
  }

  return (
    <ChatInputContainer>
      <form>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type='submit' onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  )
}

export default ChatInput

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none;
  }
`
