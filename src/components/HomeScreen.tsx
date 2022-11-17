import { inject, observer } from 'mobx-react'
import React, { useEffect } from 'react'
import StateStore from '../state/stateStore'
import FlowerList from './flowerComponents/FlowerList'
import SearchFlowers from '../components/flowerComponents/SearchFlowers'
 interface IHomeProps {
  StateStore?: StateStore
}
const HomeScreen: React.FC<IHomeProps> = props => {
  const { StateStore } = props
  useEffect(() => {
    StateStore?.fetchFlowerData();
  }, [])
 
  return (
    <>
      <div className="home_header">
        <h1>Discover flowers around you</h1>
        <p>Explore between more than 8.427 sightings</p>
        <div style={{display: 'flex', justifyContent:'center' }}> <SearchFlowers /></div>
      </div>

      <FlowerList />   </>
  )
}

export default inject("StateStore")(observer(HomeScreen))