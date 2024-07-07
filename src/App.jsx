import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import SidebarRight from "./components/SidebarRight"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"



function App() {
  return (
    <main>
      <Sidebar />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" exact element={ <Home />} />
        </Routes>
      </div>
      <SidebarRight />
    </main>
  )
}

export default App
