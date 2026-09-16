function StudentCard({student}) {
    return (
        <div>  
            <h1>Student #{student.id}</h1>
            <p>Name:            {student.name}</p>
            <p>Student Number:  {student.studentNumber}</p>
            <p>Course:          {student.course}</p>
            <p>Section:         {student.section}</p>
            <p>Sex:             {student.sex}</p>
            <p>Age:             {student.age}</p>
            <p>Birthday:        {student.birthday}</p>
        </div>
    );
}

export default StudentCard;