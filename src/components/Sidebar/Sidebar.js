import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.ul`
 > li{
   margin-bottom: 15px;
   &.active{
     > a{
        color: #1819c8;
      }
    }
    > span{
     font-weight: bold;
     display: inline-flex;
     align-items: center;
     color: #808080;
     > i{
        margin-right: 0.75rem;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        border: 1px solid #808080;
        width : 25px;
        height: 25px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        padding-bottom: 3px;
     }
    }
    > a{
     font-weight: bold;
     font-size: 18px;
   }
 }
`

const Sidebar = () => {
  return(
    <Wrapper className='list-unstyled'>
      <li>
        <a>Week 1</a>
      </li>
      <li className='active'>
        <a>Week 2</a>
      </li>
      <li>
        <span>
          <i>+</i>
          New Topic
        </span>
      </li>
    </Wrapper>
  )
}

export default Sidebar