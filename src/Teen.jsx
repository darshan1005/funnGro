import React from 'react'
import Panel from './components/Panel/Panel'
import WorkTeen from './components/Work-Teen/WorkTeen'
import Categories from './components/Categories/Categories'
import Earn from './components/EarnTimeLine/Earn'
import Hero from './components/Hero/Hero';

function Teen() {

  return (
    <React.Fragment>
      <main>
        <Hero/>
        <Panel />
        <WorkTeen />
        <Categories />
        <Earn />
      </main>
    </React.Fragment>
  )
}

export default Teen
