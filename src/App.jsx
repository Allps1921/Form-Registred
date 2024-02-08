// import { Alunos } from "./views/Alunos"
// import { Professor } from "./views/Professor"
import { Header } from "./Components/header"
import { Outlet } from "react-router-dom"

function App() {

    return (
        <div>
            <Header />
            <div className="container">
                <Outlet />
            </div>

        </div>
    )
}

export default App