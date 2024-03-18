import { ReactNode } from "react"

import Menu from "./Menu"


interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      {children}
      <Menu />
    </div>
  )
}

export default Layout