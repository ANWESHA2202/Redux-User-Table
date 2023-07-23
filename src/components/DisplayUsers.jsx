// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import styled from 'styled-components'
import { MdDeleteForever } from 'react-icons/md'
import { removeUser } from '../store/slices/UserSlice'

const DisplayUsers = () => {
    const dispatch=useDispatch();
    const data=useSelector((state)=>{
        return state.users;
    })

    const deleteUser=(idx)=>{
        dispatch(removeUser(idx))
    }
  return (
    <Wrapper>
    {data.map((user,idx)=>{
        return(
            <>
            <div className='user-row' key={idx}>
                <li  className='user'>
                    {user}
                </li>
                <button className="delete-btn" onClick={()=>deleteUser(idx)}>
                    <MdDeleteForever className="delete-icon" />
                </button>
            </div>
            
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
    .content ul {
        list-style-type: none !important;
        display: flex;
        flex-direction: column;
    }
    
    h3 {
    margin: 0;
    }

    .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
    }

    .admin-subtitle {
    font-size: 3.2rem;
    }

    .delete-btn {
    background-color: transparent;
    border: none;
    }

    .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
    }

    .user-row{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
    }
    @media screen and (max-width: 998px) {
    .admin-subtitle {
        margin-bottom: 1.6rem;
        }
    }

`
export default DisplayUsers