import React from 'react'
//import Header from './components/Header'
import Home from './components/home/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
//import Course from './pages/Course'
import Doubt from './pages/Doubt'
import ExpertSession from './pages/ExpertSession'
import LeaderBoard from './pages/LeaderBoard'
import Milestone from './pages/Milestone'
import MyTarget from './pages/MyTarget'
import MyTimeline from './pages/MyTimeline'
import LoginPage from './LoginPage'
import Loginsecond from './Loginsecond'
import DataProvider from './context/DataProvider'
import Homework from './homework/Homework'


function App() {
  return (
    <DataProvider>
       
      <BrowserRouter>
       
      
      <Routes>
      <Route path='/home' element={<Home/>}/>
        {/* <Route path='/course' element={<Course/>}/> */}
        <Route path='/doubt' element={<Doubt/>}/>
        <Route path='/expert' element={<ExpertSession/>}/>
        <Route path='/leader' element={<LeaderBoard/>}/>
        <Route path='/milestone' element={<Milestone/>}/>
        <Route path='/target' element={<MyTarget/>}/>
        <Route path='/timeline' element={<MyTimeline/>}/>
        <Route path='/second' element={<Loginsecond/>}/>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/work' element={<Homework/>}/>
        
      </Routes>
      
      </BrowserRouter>
      
    </DataProvider>
  )
}

export default App