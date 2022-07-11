import React from 'react';
import { Header, Sidebar, Subheader } from 'components';
import styled from '@emotion/styled';

const Content = styled.div`
 width: 100%;
 .btn-outline-dark{
   margin-left: 15px;
   padding: 0.375rem 1.5rem;
   border-radius: 30px;
 }
 .main{
  padding: 10px 15px;
  margin-bottom: 0.5rem;
  &:last-of-type{
    margin-bottom: 0;
  }
  &.active{
    background: #f9f6f6;
  }
  border-radius: 5px;
  > div{
    &.video{
      margin-top: 1rem;
      .thumbnail{
        width: 300px;
        height: 150px;
        border-radius: 5px;
        .overlay{
          position: absolute;
          border-radius: 5px;
          right: 0;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          > span{
            width: 45px;
            height: 45px;
            border: 2px solid #000;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            > i{
              font-size: 30px;
            }
          }
        }
      }
    }
    > ul{
      > li{
        > span{
          > i{
            font-size: 20px;
          }
        }
      }
    }
  }
 }
 .title{
  border-bottom: 1px solid #000;
  padding: 10px 15px;
  margin-bottom: 15px;
  > div{
    &.option{
      display:flex;
      flex-direction: column;
      span{
        width: 5px;
        height: 5px;
        background: #000;
        border-radius: 50%;
        margin-bottom: 3px;
        &:last-of-type{
          margin-bottom: 0px;
        }
      }
    }
    i{
      font-weight: bold;
      font-size: 20px;
    }
  }
 }
`

const Home = () =>{
  return(
    <>
      <Header/>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <Subheader />
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-3'>
            <Sidebar />
          </div>
          <div className='col-md-9'>
            <Content>
              <div className='title d-flex align-items-center w-100'>
                <div>
                  <h3 className='d-inline-flex'>Week One</h3>
                  <i className='las la-angle-up ml-3'></i>
                </div>
                <div className='option ml-auto'>
                  <span/>
                  <span/>
                  <span/>
                </div>
              </div>

              <div className='main active'>
                <div className='d-flex align-items-center'>
                  <b>1. Lecture</b>
                  <ul className='list-inline mb-0 ml-auto'>
                    <li className="list-inline-item mr-3">
                      <span>
                        <i className='las la-lock mr-2'></i>
                        Locked
                      </span>
                    </li>
                    <li className="list-inline-item mr-3">
                      <span>
                        <i className='las la-pen'></i>
                      </span>
                    </li>
                    <li className="list-inline-item mr-3">
                      <span>
                        <i className='las la-trash'></i>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className='video d-flex align-items-start'>
                  <div className='thumbnail position-relative'>
                    <div className='overlay'>
                      <span>
                        <i className='las la-play'></i>
                      </span>
                    </div>
                  </div>
                  <div className='ml-3'>
                    <b className='d-block'>Past Lecture</b>
                    <span>Ricciwawa</span>
                  </div>
                </div>
              </div>

              <div className='main'>
                <div className='d-flex align-items-center'>
                  <b>2. Quizzes</b>
                  <ul className='list-inline mb-0 ml-auto'>
                    <li className="list-inline-item mr-3">
                      <span>
                        <i className='las la-lock mr-2'></i>
                        Open for preview
                      </span>
                    </li>
                    <li className="list-inline-item mr-3">
                      <span>
                        <i className='las la-pen'></i>
                      </span>
                    </li>
                    <li className="list-inline-item mr-3">
                      <span>
                        <i className='las la-trash'></i>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='main'>
                <div className='d-flex align-items-center'>
                  <b>3. Discussion</b>
                  <ul className='list-inline mb-0 ml-auto'>
                    <li className="list-inline-item mr-3">
                      <span>
                        <i className='las la-pen'></i>
                      </span>
                    </li>
                    <li className="list-inline-item mr-3">
                      <span>
                        <i className='las la-trash'></i>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <button className='btn mt-4 mb-5 btn-outline-dark'>
                Add tasks
              </button>

              <div className='title d-flex align-items-center w-100'>
                <div>
                  <h3 className='d-inline-flex'>Add Topic</h3>
                  <i className='las la-angle-up ml-3'></i>
                </div>
                <div className='option ml-auto'>
                  <span/>
                  <span/>
                  <span/>
                </div>
              </div>
              <button className='btn mt-3 mb-5 btn-outline-dark'>
                Add tasks
              </button>
            </Content>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home