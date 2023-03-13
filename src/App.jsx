import { useState } from "react"
import Home from "./components/pages/Home"
import { Projects } from "./components/pages/Projects"

const stages = [
    {id: 0, name: 'home'},
    {id: 1, name: 'projects'}
]

function App() {

    const [stagePage, setStagePage] = useState(stages[0].name)

    const homePage = () => {
        setStagePage(stages[1].name)
    }

    const projectPage = () => {
        setStagePage(stages[0].name)
    }

  return (

    <div>
        {stagePage === 'home' && <Home homePage={homePage}/>}
        {stagePage === 'projects' && <Projects projectPage={projectPage}/>}
    </div>

  )
}

export default App
