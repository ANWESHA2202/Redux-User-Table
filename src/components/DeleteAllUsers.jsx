// eslint-disable-next-line no-unused-vars
import React from 'react'
import {useDispatch} from 'react-redux'
import styled from 'styled-components'
import {deleteUsers} from '../store/slices/UserSlice'

const DeleteAllUsers = () => {
  const dispatch=useDispatch();
  const deleteAllUsers=()=>{
    dispatch(deleteUsers())
  }
  return (
    <Wrapper>
      <button className='btn clear-btn' onClick={()=>deleteAllUsers()}>Delete All Users</button>
    </Wrapper>
  )
}

const Wrapper=styled.section`
.btn{
  background-color: red;
  margin-top:2rem;
}
`

export default DeleteAllUsers