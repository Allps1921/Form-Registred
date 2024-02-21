// import { Alunos } from "./views/Alunos"
// import { Professor } from "./views/Professor"
import { Header } from "./Components/header"
import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

    return (
        <>
            <ToastContainer />
            <div>
                <Header />
                <div className="container">
                    <Outlet />
                </div>

            </div>
        </>
    )
}

export default App