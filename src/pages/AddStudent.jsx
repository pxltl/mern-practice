import { useState } from "react";

export default function AddStudent() {
    const [student, setStudent] = useState({
        name: "",
        studentNumber: "",
        course: "",
        section: "",
        sex: "",
        age: "",
        birthday: ""
    });

    function handleSubmit(e) {
        e.preventDefault();
        
        setStudent({
            name: e.target.name.value,
            studentNumber: e.target.studentNumber.value,
            course: e.target.course.value,
            section: e.target.section.value,
            sex: e.target.sex.value,
            age: e.target.age.value,
            birthday: e.target.birthday.value
        });
    }

    return (
        <div className="m-21 flex flex-col justify-center items-center gap-1 text-lg">
            <h1>Add Student</h1>
            <form className="flex flex-col gap-4 w-1/3" onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" />
                <input name="studentNumber" placeholder="Student Number" />
                <select name="course">
                    <option value="">Select Course</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Information Technology">Information Technology</option>
                </select>
                <select name="section">
                    <option value="">Select Section</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                </select>
                <select name="sex">
                    <option value="">Select Sex</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <input name="age" placeholder="Age" />
                <input type="date" name="birthday" placeholder="Birthday" />
                <button type="submit" className="bg-sky-900 text-amber-50 p-2 rounded">Add Student</button>
            </form>
            <p className="mt-4">{student.name}</p>
        </div>
    );
}
