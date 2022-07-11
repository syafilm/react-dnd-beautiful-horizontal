import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.nav`
  > div{
    > div.navbar-collapse {
      > form{
        input{
          height: 35px;
          background: #e9ecef;
          border-left: 0px;
          border: 0px;
          font-size: 14px;
          border-top-right-radius: 30px;
          border-bottom-right-radius: 30px;
        }
        .input-group-prepend{
          height: 35px;
          > .input-group-text{
            border-top-left-radius: 30px;
            border-bottom-left-radius: 30px;
            border: 0px;
            border-right: 0px;
            i{
              transform: scale(-1, 1);
              font-size: 20px;
            }
          }
        }
      }
      > ul.navbar-nav-left {
        > li{
          > a.nav-link{
            color: rgba(0, 0, 0, 0.9);
            padding: 0.5rem 1.5rem;
          }
          &.active{
            > a.nav-link{
              padding: 0.25rem 1.5rem;
              background: #000;
              color: #fff;
              border-radius: 30px;
            }
          }
        }
      }
      > ul.navbar-nav-right {
        > li{
          > a.nav-link{
            > span{
              &.user{
                background: #000;
                width: 30px;
                height: 30px;
                color: #fff;
                display: inline-flex;
                align-items:center;
                justify-content: center;
                border-radius: 50%;
              }
              > i{
                font-size: 20px;
              }
            }
            > i{
              font-size: 20px;
            }
          }
        }
      }
    }
  }
`

const Header = () => {
  return(
    <Wrapper className="navbar navbar-expand-lg navbar-light bg-white mb-3">
      <div className="container">
        <a className="navbar-brand mr-5 font-weight-bold" href="#">Logo</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav navbar-nav-left mr-auto align-items-center">
            <li className="nav-item mr-3">
              <a className="nav-link" href="#">Explore <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item mr-3">
              <a className="nav-link" href="#">Classrooms</a>
            </li>
            <li className="nav-item active mr-3">
              <a className="nav-link">Create</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <div class="input-group align-items-center mr-4">
              <div class="input-group-prepend">
                <span class="input-group-text" id="search-here">
                  <i className='la la-search'></i>
                </span>
              </div>
              <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="search-here"/>
            </div>
          </form>
          <ul className="navbar-nav navbar-nav-right align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="la la-bell"></i>
              </a>
            </li>
            <li className="nav-item active ml-0">
              <a className="nav-link">
                <span className='user'><i className="la la-user"></i></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  )
}

export default Header