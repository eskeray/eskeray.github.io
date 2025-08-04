import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const Layout = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      <div className="px-6 sm:px-12 md:px-24 lg:px-40 xl:px-64 2xl:px-72 flex flex-col min-h-screen max-w-[2000px] mx-auto">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
