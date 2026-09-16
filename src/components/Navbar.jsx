import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="w-full flex justify-center gap-4 p-4 bg-sky-900 text-amber-50">
            <Link to="/">Home</Link>
            <Link to="/students">Students</Link>
            <Link to="/add-student">Add Student</Link>
        </nav>
    );
}