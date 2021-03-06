import React from 'react'

import Header from './Header'
import Dashboard from './Dashboard'
import Sidebar from 'react-sidebar'

// We are using bootstrap as the UI library
import 'bootstrap/dist/css/bootstrap.css'

// styles
import '../styles/main.less'
import '../styles/nav.less'
import '../styles/frame.less'

class App extends React.Component {
  render () {
    return (
      <Sidebar
        styles={{
          sidebar: {
            background: 'rgba(174, 179, 184, 0.7)'
          }
        }}
        sidebar={
          <ul className='nav nav-pills flex-column'>
            <li className='nav-item mt-auto p-2'>
              <img src={require('../assets/nahal-logo.png')} height='60px' />
            </li>
            <li className='nav-item'>
              <a className='nav-link text-white bg-warning' href='/'>Home</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-warning' href='#'>Alarms</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-warning' href='/about'>About</a>
            </li>
          </ul>
        }
        docked
      >
        <Header />
        <Dashboard />
      </Sidebar>
    )
  }
}

export default App
