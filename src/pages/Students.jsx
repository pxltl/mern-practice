import studentsData from "../data/students.json";
import StudentCard from "../components/StudentCard";

export default function Students() {
    return (
        <div>
            {studentsData.map((student) => (
                <StudentCard    key={student.id}
                                student={student} />
            ))}
        </div>
    );
}