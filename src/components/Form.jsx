import { useState } from "react";

const Form = ({ onSubmit }) => {
  // State untuk menyimpan input
  const [fullname, setFullname] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("Male");
  const [programStudy, setProgramStudy] = useState("Ekonomi");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case "input-name":
        setFullname(value);
        break;
      case "input-date":
        setBirthDate(value);
        break;
      case "input-gender":
        setGender(value);
        break;
      case "input-prody":
        setProgramStudy(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ fullname, birthDate, gender, programStudy });
    setFullname("");
    setBirthDate("");
    setGender("Male");
    setProgramStudy("Ekonomi");
  };

  return (
    <form id="form-student" data-testid="form" onSubmit={handleSubmit}>
      <label htmlFor="input-name">Fullname</label>
      <input
        required
        id="input-name"
        type="text"
        data-testid="name"
        value={fullname}
        onChange={handleInputChange}
      />

      <label htmlFor="input-date">Birth Date</label>
      <input
        id="input-date"
        type="date"
        data-testid="date"
        value={birthDate}
        onChange={handleInputChange}
      />

      <label htmlFor="input-gender">Gender</label>
      <select
        id="input-gender"
        data-testid="gender"
        value={gender}
        onChange={handleInputChange}
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <label htmlFor="input-prody">Program Study</label>
      <select
        id="input-prody"
        data-testid="prody"
        value={programStudy}
        onChange={handleInputChange}
      >
        <option value="Ekonomi">Ekonomi</option>
        <option value="Manajemen">Manajemen</option>
        <option value="Akuntansi">Akuntansi</option>
        <option value="Administrasi Publik">Administrasi Publik</option>
        <option value="Administrasi Bisnis">Administrasi Bisnis</option>
        <option value="Hubungan Internasional">Hubungan Internasional</option>
        <option value="Teknik Sipil">Teknik Sipil</option>
        <option value="Arsitektur">Arsitektur</option>
        <option value="Matematika">Matematika</option>
        <option value="Fisika">Fisika</option>
        <option value="Informatika">Informatika</option>
      </select>

      <input
        id="add-btn"
        type="submit"
        value="Add student"
        data-testid="submit"
      />
    </form>
  );
};

export default Form;
