import { useHistory } from "react-router-dom"

const Header = () => {
  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  return (
    <header className="flex justify-center w-screen items-center p-6">
    </header>
  )
}

export default Header
