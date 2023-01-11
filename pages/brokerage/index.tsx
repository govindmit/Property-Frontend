import React from 'react'
import HomeWorkComp from '../landloard/howWorks'
import PrimiumTool from '../landloard/premiumTool'
import RealState from '../welcome/realState'
import VideoContent from '../welcome/VideoContent'
import BorkerHowworks from './borkerHowworks'
import BrokerTopContent from './doorSteps'
import PrimiumManagmentTool from './premiumManagmentTool'

const BrokerageComp = () => {
  return (
    <div className='brokerIndexPage'>
      <div>
        <BrokerTopContent/>
      </div>
      <div>
        <BorkerHowworks/>
      </div>
      <div>
        <VideoContent/>
    </div>
    <div>
      <PrimiumManagmentTool/>
      {/* <PrimiumTool/> */}
    </div>
    <div>
        <RealState/>
    </div>
    </div>
  )
}

export default BrokerageComp