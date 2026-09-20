import studentsData from "../data/students.json";
import StudentCard from "../components/StudentCard";

export default function Students() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto p-4">
            {studentsData.map((student) => (
                <StudentCard    key={student.id}
                                student={student} />
            ))}
        </div>
    );
}