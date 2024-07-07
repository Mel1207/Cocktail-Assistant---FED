import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import SidebarRight from "./components/SidebarRight"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
// import DuplicateList from "./pages/DuplicateList"
// import UniqueList from "./pages/UniqueList"


function App() {
  return (
    <main>
      <Sidebar />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" exact element={ <Home />} />
          {/* <Route path="/dp" element={ <DuplicateList /> } />
          <Route path="/un" element={ <UniqueList /> } /> */}
        </Routes>
      </div>
      <SidebarRight />
    </main>
  )
}

export default App
