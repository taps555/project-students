import { useEffect, useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import FacultyMapping from "./components/FacultyMapping";

const App = () => {
  // TODO: answer here
  const apiStudents = "http://localhost:3001/student";
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      try {
        const response = await fetch(apiStudents);
        const result = await response.json();
        setStudents(result);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const addStudent = async (students) => {
    try {
      const response = await fetch(apiStudents, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(students),
      });

      const result = await response.json();
      return result;
    } catch (err) {
      console.log(err);
      console.log(`Terjadi kesalahan ketika menambahkan data siswa`);
    }
  };

  const handleAddStudents = async (studentData) => {
    setLoading(true);
    try {
      const faculty = FacultyMapping[studentData.programStudy];

      const newStudentData = {
        ...studentData,
        faculty,
      };

      setStudents((prevStudents) => [...prevStudents, newStudentData]);

      await addStudent(newStudentData);

      setLoading(false);
    } catch (err) {
      console.log(err);
      console.log(`Terjadi kesalahan ketika menambahkan data siswa`);
      setLoading(false);
    }
  };

  const handleDeleteStudents = async (studentId) => {
    try {
      await deleteStudent(studentId);
      setStudents(students.filter((student) => student.id !== studentId));
      setLoading(false);
    } catch (err) {
      console.log(err);
      console.log(`terjadi kesalah ketika menghapus data student ${studentId}`);
    }
  };

  const deleteStudent = async (studentId) => {
    try {
      await fetch(`http://localhost:3001/student/${studentId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      console.log(err);
      console.log(`terjadi kesalah ketika menghapus data student ${studentId}`);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Form onSubmit={handleAddStudents} />
      <Table students={students} onDeleteStudent={handleDeleteStudents} />
    </>
  );
};

export default App;
