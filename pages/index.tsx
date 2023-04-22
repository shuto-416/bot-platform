import React, { useState } from 'react'
import styles from './alpha.module.scss'
import { sampleUserData } from "../utils/sample-data";
import { FaUser } from "react-icons/fa";
import {ChatType} from "../interfaces";
import {MdSend} from "react-icons/all";

const IndexPage = () => {
  const [selectedId, setSelectedId] = useState<number>(0)
  const selectedUser = sampleUserData.find((user) => user.id === selectedId)
  const [message, setMessage] = useState('')

  const handleInputChange = (event) => {
    setMessage(event.target.value)
  }

  const handleSubmit = () => {
    console.log('送信:', message)
    setMessage('')
  }

  return (
    <div className={styles.chatWrap}>
      <div className={styles.chatRoomList}>
        <div className={styles.chatRoomListInnerWrap}>
          {sampleUserData.map((user, index) => (
            <div key={index} className={`${styles.chatRoomListInner} ${selectedId === user.id && styles.active}`} onClick={() => setSelectedId(user.id)}>
              <FaUser className={styles.userIcon} size={25} />
              <p className={styles.userName}>{user.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.chatContent}>
        {selectedUser ? (
          <div>
            {selectedUser.chats.map((chat, index) => (
              <div key={index} className={styles.chatHistoryWrap}>
                {chat.text}
              </div>
            ))}
            <div className={styles.textAreaWrap}>
              <textarea className={styles.textArea} value={message} onChange={handleInputChange} rows={1} />
              <button className={styles.sendButton} onClick={handleSubmit}>
                <MdSend />
              </button>
            </div>
          </div>
        ) : (
          <div>Please Select User.</div>
        )}
      </div>
    </div>
  )
}

export default IndexPage
