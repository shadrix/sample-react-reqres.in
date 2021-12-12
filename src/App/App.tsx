import React from 'react'
import { IoCProvider } from '../ioc/ioc.react'
import { container } from '../ioc/ioc';
import HomePage from '../pages/Home';

const App = () => {
  return (
    <IoCProvider container={container}>
      <HomePage/>
    </IoCProvider>
  )
}

export default App
