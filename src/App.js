import React, { useEffect } from 'react';
import {observer} from 'mobx-react';
import {useStore} from 'context';
import Routes from './Web';

const App = observer(() => {
  const store = useStore()
  
  return (<Routes/>)
})

export default App