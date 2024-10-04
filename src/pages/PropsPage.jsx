import React from 'react'
import Hello from '../components/Hello'

const PropsPage = () => {
  return (
    // prettier-ignore
    // 파라미터를 만들어서 넘길 수 있음: 왜? 함수니까
    <>
    <Hello name="홍길동" color="red" age="15">
    </Hello>
    <Hello name="홍길순" color="blue" age="13">
    </Hello>
    </>
  )
}

export default PropsPage
