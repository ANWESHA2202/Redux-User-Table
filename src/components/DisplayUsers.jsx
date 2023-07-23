// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const DisplayUsers = () => {

    const data=useSelector((state)=>{
        return state.users;
    })
  return (
    <Wrapper>
    {data.map((user,idx)=>{
        return(
            <>
            <li key={idx} className='user'>
                {user}
            </li>
            <div className='line'></div>
            </>
        )
    })}
    </Wrapper>
  )
}


const Wrapper = styled.section`
    margin: 1rem 3.2rem;
    .user{
        font-size: 2rem;
        margin: 1rem 0;
        text-align:left;
    }
    .line{
        width: 90%;
        border:1px dashed lightgray;
        
    }

`
export default DisplayUsers