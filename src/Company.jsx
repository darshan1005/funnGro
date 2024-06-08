import React from 'react'
import HeroCompany from './components/Hero-company/Hero'
import Panel from './components/Panel/Panel'
import ProjectCards from './components/Project-cards/ProjectCard'
import CompanyWork from './components/Company-work/CompanyWork'

function App() {

  return (
    <React.Fragment>
      <main>
        <HeroCompany></HeroCompany>
        <Panel></Panel>
        <ProjectCards></ProjectCards>
        <CompanyWork />
      </main>
    </React.Fragment>
  )
}

export default App
