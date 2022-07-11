import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.ul`
 @media (max-width: 767px) {
  overflow-x:auto;
  white-space:nowrap;
 }
 > li{
  &.active{
    > a{
      color: #1819c8;
      font-weight: bold;
    }
  }
  > a{
    > i{
      font-size: 20px;
    }
     padding: 0.5rem 1.5rem;
  }
  &:last-of-type{
    > a{
      padding-right: 0px;
    }
  }
  &:first-of-type{
    > a{
      padding-left: 0px;
    }
  }
 }
`

const Subheader = () => {
  return(
    <Wrapper className="list-inline d-flex w-100">
      <li className="list-inline-item">
        <a>About</a>
      </li>
      <li className="list-inline-item">
        <a>Discussion</a>
      </li>
      <li className="list-inline-item">
        <a>Members</a>
      </li>
      <li className="list-inline-item active">
        <a>Course</a>
      </li>
      <li className="list-inline-item">
        <a>Board</a>
      </li>
      <li className="list-inline-item ml-auto">
        <a>
          <i className='la la-cog'></i>
        </a>
      </li>
    </Wrapper>
  )
}

export default Subheader