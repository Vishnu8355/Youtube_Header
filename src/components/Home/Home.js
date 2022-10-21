import React, { useState } from 'react'
import './Home.css'
import { AdBanner, logo } from '../../Assets/ImageIndex'
import Video from './Video'
import VideoData from './Video.json'
// import Card from '../card/Card'

const Home = () => {

  const categoryData = ["All", "Gaming", "Tranding", "Python", "Music", "Mixes", "Lives", "Comedy", "Programming", "old Songs", "Couples", "Bollywood", "Arijit Singh", "T-Series"]

  const [cateogry, setCateogry] = useState("All")
  const {videos} = VideoData
  // const [onDisplay, setonDisplay] = useState(videos)

  // const handleCategory = (tag)=>{
  //   setCateogry(tag)
  //   if (tag === "All") {
  //     setonDisplay(videos)
  //     return
  //   }
  //   setonDisplay(videos.filter((video)=> video.category === tag))
  // }
  

  return (
    <>
      <div className="homeContainer" id='homeContainer'>
        <div className="categoryContainer">
          {categoryData.map((tab) => {
            return <h3 className={`categoryTab ${cateogry === tab && 'active'}`} key={tab} >{tab}</h3>
          })}
        </div>
        {/* <div className="homeBanner">
          <img src={AdBanner} alt="Ad Banner" className='youtubeAdBanner' />
          <div className="infoBox">
            <div>
              <img src={logo} alt="Youtube Logo" />
              <h2>Alien Premium</h2>
            </div>
            <h1>Watch Everything you love</h1>
            <button>GET IT NOW</button>
          </div>
        </div> */}
        {/* <div className="videoContainer">
          {onDisplay.map((video)=>{
            return <Video video={video} key={video.image}/>
          })}
        </div> */}
      </div>
      {/* <Card/> */}
    </>
  )
}

export default Home