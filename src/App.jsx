import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import SidebarRight from "./components/SidebarRight"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Modal from "./components/Modal"
import { useGlobalStore } from "./store/globalStore"



function App() {
  const { isModalOpen } = useGlobalStore()

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
      {isModalOpen ? (<Modal />) : null}
    </main>
  )
}

export default App
