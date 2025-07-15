import SideNav from "./Components/SideNav"
import People from "./Components/People"

function App() {

  return (
    <>
      <div className="flex overflow-hidden">
        <SideNav></SideNav>
        <People></People>
      </div>
    </>
  )
}

export default App
