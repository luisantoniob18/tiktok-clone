import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VideoPlayer from './components/VideoPlayer'
import FeedVideos from './components/FeedVideos/index.jsx'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <main>
        <FeedVideos />
      </main>      
    </div>
  )
}

export default App
