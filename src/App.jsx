import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import SidebarRight from "./components/SidebarRight"

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
