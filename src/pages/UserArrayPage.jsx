import React, { useRef } from 'react'
import CreateUser from './../components/CreateUser'

const UserArrayPage = () => {
  const users = [
    {
      id: 1,
      username: '홍길동',
      email: 'abcd@gmail.com',
    },
    {
      id: 2,
      username: '홍길순',
      email: 'abcd@daum.com',
    },
    {
      id: 3,
      username: '바둑이',
      email: 'abcd@naver.com',
    },
  ]

  const nextId = useRef(users.length + 1)

  const onCreate = () => {
    // 배열에 항목을 추가하는 로직

    nextId.current += 1
  }

  // prettier-ignore
  return (
  <div>
    <CreateUser></CreateUser>
  </div>
  )
}

export default UserArrayPage
