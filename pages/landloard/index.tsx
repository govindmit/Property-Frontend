import React from 'react'
import RealState from '../welcome/realState'
import VideoContent from '../welcome/VideoContent'
import TopMainComp from './doorStep'
import HomeWorkComp from './howWorks'
import PrimiumTool from './premiumTool'

const LandloardComp = () => {
  return (
    <div className='landloard'>
        <div>
        <TopMainComp/>
    </div>
    <div>
        <HomeWorkComp/>
    </div>
    <div>
        <VideoContent/>
    </div>
    <div>
        <PrimiumTool/>
    </div>
    <div>
        <RealState/>
    </div>
    </div>
  )
}

export default LandloardComp