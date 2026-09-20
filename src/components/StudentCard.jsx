export default function StudentCard({ student }) {
    return (
        <div className="w-fit p-5 flex flex-col justify-center items-center gap-2 text-md bg-blue-100 border-1 rounded-lg border-blue-950">
            <table className="text-md">
                <tbody>
                    <tr>
                        <td className="pr-4 font-semibold">Name:</td>
                        <td>{student.name}</td>
                    </tr>
                    <tr>
                        <td className="pr-4 font-semibold">Student Number:</td>
                        <td>{student.studentNumber}</td>
                    </tr>
                    <tr>
                        <td className="pr-4 font-semibold">Course:</td>
                        <td>{student.course}</td>
                    </tr>
                    <tr>
                        <td className="pr-4 font-semibold">Section:</td>
                        <td>{student.section}</td>
                    </tr>
                    <tr>
                        <td className="pr-4 font-semibold">Sex:</td>
                        <td>{student.sex}</td>
                    </tr>
                    <tr>
                        <td className="pr-4 font-semibold">Age:</td>
                        <td>{student.age}</td>
                    </tr>
                    <tr>
                        <td className="pr-4 font-semibold">Birthday:</td>
                        <td>{student.birthday}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}