import SideNav from "./Components/SideNav"
import People from "./Components/People"
import Stat from "./Components/Stat"

function App() {

  return (
    <>
      <div className="flex overflow-hidden">
        <SideNav></SideNav>
        <People></People>
        <Stat></Stat>
      </div>
    </>
  )
}

export default App
