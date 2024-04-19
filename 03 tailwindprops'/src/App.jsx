import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'
function App() {
return(
<>
  <h1 className='bg-green-400 rounded-xl'>
    Tailwind Test
  </h1>
  <Card userName="Emilano Dibu Martinez" baseUrl='https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/437858669_998189458337674_853362142356463188_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=mPxM0yfAYi8Ab6Yy0aN&_nc_ht=scontent.fktm3-1.fna&oh=00_AfAoNwrbJ8w3i4b-9eOy6EjipLHenQJRS3zp6PfecS4hXg&oe=66282382'info='dibu vs brench team' />
  <Card userName="Sharad Shrestha" baseUrl='https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/277105800_117853090847425_3509310930695187126_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=SKcwT5wUztYAb4LkTl4&_nc_ht=scontent.fktm3-1.fna&oh=00_AfC7Asp-LCCrTR_rzSDk5xCXRCvFOhmxuhObaXIylll0Yw&oe=66284186' info='No relationship info to show' btnText='Whats up shawty'/>

</>
)
}

export default App
