import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import Navbar from "./components/Navbar";

export default function App(){
    return(
        <div className="w-screen h-screen">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/students" element={<Students />} />
                    <Route path="/add-student" element={<AddStudent />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}