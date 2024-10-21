const Table = (props) => {
  return (
    <table id="table-student">
      <thead>
        <tr>
          <th>No</th>
          <th>Full Name</th>
          <th>Birth Date</th>
          <th>Gender</th>
          <th>Faculty</th>
          <th>Program Study</th>
          <th>Option</th>
        </tr>
      </thead>
      <tbody>
        {props.students.length > 0 ? (
          props.students.map((student, index) => (
            <tr className="student-data-row" key={student.id || index}>
              <td>{index + 1}</td>
              <td>{student.fullname}</td>
              <td>{student.birthDate}</td>
              <td>{student.gender}</td>
              <td>{student.faculty}</td>
              <td>{student.programStudy}</td>
              <td>
                {/*  */}
                <button
                  data-testid={`delete-${student.id}`}
                  onClick={() => props.onDeleteStudent(student.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td>No data available</td>
            <td>No data available</td>
            <td>No data available</td>
            <td>No data available</td>
            <td>No data available</td>
            <td>No data available</td>
            <td>No data available</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
