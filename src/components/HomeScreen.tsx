import { inject, observer } from 'mobx-react'
import React, { useEffect } from 'react'
import StateStore from '../state/stateStore'
import FlowerList from './flowerComponents/FlowerList'
interface IHomeProps {
  StateStore?: StateStore
}
const HomeScreen: React.FC<IHomeProps> = props => {
  const { StateStore } = props
  useEffect(() => {
    StateStore?.getFlowerData()
  }, [])
  const store = StateStore?.values

  return (
    <>
      <div>MainContent</div>
      <FlowerList />   </>
  )
}

export default inject("StateStore")(observer(HomeScreen))