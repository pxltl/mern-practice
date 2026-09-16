function Subjects({subjectId, subjectName, instructor}) {
  return (
    <div>
      <p>Subject Code: {subjectId}</p>
      <p>Subject Name: {subjectName}</p>
      <p>Instructor: {instructor}</p>
    </div>
  );
}

export default Subjects;