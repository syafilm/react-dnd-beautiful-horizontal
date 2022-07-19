import React, { useState } from "react";
import styled from '@emotion/styled';
import adsImage from 'assets/images/google-ads-2.svg';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`

const Sidebar = styled.div`
  width: 240px;
  height:100vh;
  background: #fff;
  display: inline-flex;
`

const Content = styled.div`
  width: calc(100% - 240px);
  background: #f2f2f2;
  display: inline-flex;
  padding-top: 15px;
  .table{
    th{
      border-bottom: 0px;
      border-top: 0px;
      font-weight: normal;
      font-size: 14px;
    }
    tr{
      &:first-of-type{
        td{
          border-top: 0px;
        }
      }
    }
    td{
      .dimensions{
        b{
          font-weight: 500;
        }
        span{
          display: block;
        }
      }
    }
  }
`

const Scard = styled.div`
  box-shadow:0 3px 5px rgb(0 0 0 / 0.02);
  width: 100%;
  background: #fff;
  border-radius: 5px;
  display: flex;
  padding: 10px;
  flex-direction: column;
  margin-bottom: 1rem;
  h6{
    display: flex;
    align-items: center;
    width: 100%;
    > img{
      margin-left: auto;
      width: 20px;
    }
  }
  .conversion{
    display: flex;
    align-items: center;
    h4{
      font-weight:bold;
    }
    > div{
      &:nth-of-type(1){
        span{
          color: #a5a3ad;
          font-size: 14px;
        }
      }
      &:nth-of-type(2){
        margin-left: auto;
        span.green-icon{
          width: 50px;
          height: 50px;
          border-radius: 50%;
          font-size: 30px;
          color: #60c478;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(96, 196, 120, 0.2);
        }
      }
    }
  }
  &.duration{
    b{
      > span{
        font-weight: normal;
      }
    }
    > div{
      > div{
        display: flex;
        align-items: flex-end;
        img.duration-image{
          width: calc(100% - 50px);
          height: 150px;
          background: #ebf2f8;
          border:0px;
          box-shadow: none;
          border-radius: 5px;
          outline: 0;
        }
        img.ads-image{
          width: 20px;
          margin-left: auto;
        }
      }
    }
  }
`

const Pagination = styled.ul`
  margin-left: auto;
  margin-right: 10px;
  li{
    margin-left: 0px;
    &:not(:last-child){
      margin-right: 0px;
    }
    &.active{
      > a{
        > span{
          color: #fff;
        }
        &:before{
          display: flex;
          
        }
      }
    }
    &.first{
      > a{
        border-top-left-radius: 50%;
        border-bottom-left-radius: 50%;
      }
    }
    &.last{
      > a{
        border-top-right-radius: 50%;
        border-bottom-right-radius: 50%;
      }
    }
    > a{
      
      cursor: pointer;
      font-size: 14px;
      > span{
        position: relative;
        z-index: 11;
      }
      &:before{
        display: none;
        align-items: center;
        content: '';
        width: 100%;
        height: 100%;
        border-radius: 50%;
        justify-content: center;
        background: #706be7;
        position:absolute;
      }
      &:hover{
        &:before{
          display: flex;
        }
        > span{
          color: #fff;
        }
      }
      position: relative;
      background: #f3f2f8;
      width: 30px;
      height: 30px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    &:first-of-type{
      > a{
        border-radius: 50%;
      }
      margin-right: 1rem;
    }
    &:last-of-type{
      > a{
        border-radius: 50%;
      }
      margin-left: 1rem;
    }
  }
`


const DraggableElement = ({prefix, elements}) => {
  let className = `col-lg-12`
  if(prefix === `period`){
    className = `col-lg-4`
  }else if(prefix === `conversation`){
    className = `col-lg-8`
  }

  return(
    <div className={className}>
      <Droppable droppableId={`${prefix}`} 
        direction={prefix === `card` ? `horizontal` : `vertical`}>
        {(provided) => (
          <div 
            className="row"
            {...provided.droppableProps} 
            ref={provided.innerRef}>
            {elements.map((item, index) => {
              return (
                  <ListItem 
                    key={item.id}
                    prefix={prefix}
                    item={item} 
                    index={index} />
                )
              }
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

const ListItem = ({ item, index, prefix }) => {
  let className = `col-lg-12`
  if(prefix === `card` && 
  item.id !== `9`){
    className = `col-lg-3`
  }else if(prefix === `card` && 
    item.id === `9`){
    className = `col-lg-6`
  }

  let content = (
    <Scard>
      <h6 className="mb-0">Cost Per conversion
        <img src={adsImage}/>
      </h6>
      <div className="conversion mt-3">
        <div>
          <h4 className="mb-0">$32.95</h4>
          <span>Per conversion</span>
        </div>
        <div>
          <span className="green-icon">$</span>
        </div>
      </div>
    </Scard>
  )

  if((prefix === `period` && 
    item.id === `9`) || 
    (prefix === `card` && 
    item.id === `9`) ||
    (prefix === `conversation` && 
    item.id === `9`)){
      
    content = (
      <Scard className="duration">
        <b className="mb-3">Data Period</b>
        <h4>
          <b>
            15-06-2022
          </b>
          &nbsp;
          <span>to</span>
          &nbsp;
          <b>
            14-07-2022
          </b>
        </h4>
        <div>
          <span>Duration 30 days</span>
          <div>
            <img className="duration-image" />
            <img className="ads-image" src={adsImage}/>
          </div>
        </div>
      </Scard>
    )
  }else if(prefix === `conversation` && 
    item.id === `8`){
    content = null
  }

  return (
    <Draggable 
      draggableId={item.id} 
      index={index}>
      {(provided, snapshot) => {
        return (
          <div 
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps} 
            className={className}>
            {content}
          </div>
        );
      }}
    </Draggable>
  );
}

const Home = () => {

  const [items, setItems] = useState({
    conversation: [
      {
        id: `8`,
        prefix: 'conversation',
        content: `1`
      }
    ],
    period: [
      {
        id: `9`,
        prefix: 'period',
        content: `1`
      }
    ],
    card: [
      {
        id: `10`,
        prefix: 'card',
        content: `1`
      },
      {
        id: `11`,
        prefix: 'card',
        content: `2`
      },
      {
        id: `12`,
        prefix: 'card',
        content: `3`
      },
      {
        id: `13`,
        prefix: 'card',
        content: `4`
      },
      {
        id: `14`,
        prefix: 'card',
        content: `5`
      },
      {
        id: `15`,
        prefix: 'card',
        content: `6`
      },
      {
        id: `16`,
        prefix: 'card',
        content: `7`
      },
      {
        id: `17`,
        prefix: 'card',
        content: `8`
      }
    ]
  })

  const removeFromList = (list, index) => {
    const result = Array.from(list);
    const [removed] = result.splice(index, 1);
    return [removed, result];
  };
  
  const addToList = (list, index, element) => {
    const result = Array.from(list);
    result.splice(index, 0, element);
    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const listCopy = { ...items };

    const sourceList = listCopy[result.source.droppableId];
    const [removedElement, newSourceList] = removeFromList(
      sourceList,
      result.source.index
    );
    listCopy[result.source.droppableId] = newSourceList;
    const destinationList = listCopy[result.destination.droppableId];
    listCopy[result.destination.droppableId] = addToList(
      destinationList,
      result.destination.index,
      removedElement
    );

    setItems(listCopy);
  };

  return(
    <Wrapper>
      <Sidebar />
      <Content>
        <div className="container-fluid">
          
          <div className="row mb-4">
            <div className="col-md-12">
              <h4>Google Ads Performance Report</h4>
            </div>
          </div>

          <div className="row">
            <DragDropContext onDragEnd={onDragEnd}>
              {Object.keys(items).map((listKey) => (
                <DraggableElement
                  elements={items[listKey]}
                  key={listKey}
                  prefix={listKey}
                />
              ))}
            </DragDropContext>
          </div>

          <div className="row mt-4">
            <div className="col-md-12">
              <Scard style={{padding: 0}}>
                <div style={{padding: '20px 10px'}}>
                  <h6 className="mb-0">Clicks Through Rate<img src={adsImage}/></h6>
                </div>
                <table class="table">
                  <thead class="thead-light">
                    <tr>
                      <th scope="col">Multiple Dimensions</th>
                      <th scope="col">Clicks</th>
                      <th scope="col">Impression</th>
                      <th scope="col">Ctr</th>
                      <th scope="col">Cost</th>
                      <th scope="col">Conversions</th>
                      <th scope="col">All conversions value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="dimensions">
                          <span><b>Name: </b> Product Launch Campaig..... </span>
                          <span><b>Device: </b> Iphone </span>
                          <span><b>Ad network type: </b> Google Display .... </span>
                        </div>
                      </td>
                      <td>97</td>
                      <td>7,788</td>
                      <td>1.52%</td>
                      <td>$85.30</td>
                      <td>8.14</td>
                      <td>207.76</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="dimensions">
                          <span><b>Name: </b> Product Launch Campaig..... </span>
                          <span><b>Device: </b> Iphone </span>
                          <span><b>Ad network type: </b> Google Display .... </span>
                        </div>
                      </td>
                      <td>97</td>
                      <td>7,788</td>
                      <td>1.52%</td>
                      <td>$85.30</td>
                      <td>8.14</td>
                      <td>207.76</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="dimensions">
                          <span><b>Name: </b> Product Launch Campaig..... </span>
                          <span><b>Device: </b> Iphone </span>
                          <span><b>Ad network type: </b> Google Display .... </span>
                        </div>
                      </td>
                      <td>97</td>
                      <td>7,788</td>
                      <td>1.52%</td>
                      <td>$85.30</td>
                      <td>8.14</td>
                      <td>207.76</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="dimensions">
                          <span><b>Name: </b> Product Launch Campaig..... </span>
                          <span><b>Device: </b> Iphone </span>
                          <span><b>Ad network type: </b> Google Display .... </span>
                        </div>
                      </td>
                      <td>97</td>
                      <td>7,788</td>
                      <td>1.52%</td>
                      <td>$85.30</td>
                      <td>8.14</td>
                      <td>207.76</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="dimensions">
                          <span><b>Name: </b> Product Launch Campaig..... </span>
                          <span><b>Device: </b> Iphone </span>
                          <span><b>Ad network type: </b> Google Display .... </span>
                        </div>
                      </td>
                      <td>97</td>
                      <td>7,788</td>
                      <td>1.52%</td>
                      <td>$85.30</td>
                      <td>8.14</td>
                      <td>207.76</td>
                    </tr>
                  </tbody>
                </table>
                <Pagination className="list-inline">
                  <li className="list-inline-item">
                    <a><i className="las la-angle-left"></i></a>
                  </li>
                  <li className="list-inline-item active first">
                    <a>
                      <span>
                        1
                      </span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a>
                      <span>
                        2
                      </span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a>
                      <span>
                        3
                      </span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a>
                      <span>
                        14
                      </span>
                    </a>
                  </li>
                  <li className="list-inline-item last">
                    <a>
                      <span>
                        15
                      </span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a><i className="las la-angle-right"></i></a>
                  </li>
                </Pagination>
              </Scard>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-12">
              <Scard style={{padding: 0}}>
                <div style={{padding: '20px 10px'}}>
                  <h6 className="mb-0">Top Ad Group<img src={adsImage}/></h6>
                </div>
                <table class="table">
                  <thead class="thead-light">
                    <tr>
                      <th scope="col">Multiple Dimensions</th>
                      <th scope="col">Clicks</th>
                      <th scope="col">Impression</th>
                      <th scope="col">Conversions</th>
                      <th scope="col">Conversions Value</th>
                      <th scope="col">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="dimensions">
                          <span><b>Base Ad group: </b> E </span>
                          <span><b>Campaign: </b> IGB Core campaign </span>
                          <span><b>Device: </b> Iphone </span>
                          <span><b>Ad network type: </b> None </span>
                        </div>
                      </td>
                      <td>97</td>
                      <td>7,788</td>
                      <td>14.34</td>
                      <td>42.84</td>
                      <td>85.30</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="dimensions">
                          <span><b>Base Ad group: </b> E </span>
                          <span><b>Campaign: </b> IGB Core campaign </span>
                          <span><b>Device: </b> Iphone </span>
                          <span><b>Ad network type: </b> None </span>
                        </div>
                      </td>
                      <td>97</td>
                      <td>7,788</td>
                      <td>14.34</td>
                      <td>42.84</td>
                      <td>85.30</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="dimensions">
                          <span><b>Base Ad group: </b> E </span>
                          <span><b>Campaign: </b> IGB Core campaign </span>
                          <span><b>Device: </b> Iphone </span>
                          <span><b>Ad network type: </b> None </span>
                        </div>
                      </td>
                      <td>97</td>
                      <td>7,788</td>
                      <td>14.34</td>
                      <td>42.84</td>
                      <td>85.30</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="dimensions">
                          <span><b>Base Ad group: </b> E </span>
                          <span><b>Campaign: </b> IGB Core campaign </span>
                          <span><b>Device: </b> Iphone </span>
                          <span><b>Ad network type: </b> None </span>
                        </div>
                      </td>
                      <td>97</td>
                      <td>7,788</td>
                      <td>14.34</td>
                      <td>42.84</td>
                      <td>85.30</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="dimensions">
                          <span><b>Base Ad group: </b> E </span>
                          <span><b>Campaign: </b> IGB Core campaign </span>
                          <span><b>Device: </b> Iphone </span>
                          <span><b>Ad network type: </b> None </span>
                        </div>
                      </td>
                      <td>97</td>
                      <td>7,788</td>
                      <td>14.34</td>
                      <td>42.84</td>
                      <td>85.30</td>
                    </tr>
                  </tbody>
                </table>
                <Pagination className="list-inline">
                  <li className="list-inline-item">
                    <a><i className="las la-angle-left"></i></a>
                  </li>
                  <li className="list-inline-item active first">
                    <a>
                      <span>
                        1
                      </span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a>
                      <span>
                        2
                      </span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a>
                      <span>
                        3
                      </span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a>
                      <span>
                        14
                      </span>
                    </a>
                  </li>
                  <li className="list-inline-item last">
                    <a>
                      <span>
                        15
                      </span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a><i className="las la-angle-right"></i></a>
                  </li>
                </Pagination>
              </Scard>
            </div>
          </div>

        </div>
      </Content>
    </Wrapper>
  )
}

export default Home
