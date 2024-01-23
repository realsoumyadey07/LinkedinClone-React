import React from 'react'
import styled from 'styled-components'
import { HiMiniPhoto } from "react-icons/hi2";
import { PiVideoFill } from "react-icons/pi";
import { MdArticle } from "react-icons/md";

function Main() {
  return (
    <Container>
      <ShareBox>Share</ShareBox>
      <div>
        <img src="/images/user.svg" alt="" />
        <button>Start post</button>
      </div>
      <div>
        <button>
          <HiMiniPhoto className='text-sky-600'/>
          <span>Photo</span>
        </button>
        <button>
          <PiVideoFill className='text-green-500'/>
          <span>Video</span>
        </button>
        <button>
          <HiMiniPhoto className='text-orange-500'/>
          <span>Event</span>
        </button>
        <button>
          <MdArticle className='text-red-600'/>
          <span>Write article</span>
        </button>
      </div>
    </Container>
  )
}

export default Main
const Container = styled.div`
    grid-area: main;
`
const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0/15%), 0 0 0 rgb(0 0 0/ 20%);
`
const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div{
    button{
      outline: none;
      color: rgba(0,0,0,0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
    }
  }
`