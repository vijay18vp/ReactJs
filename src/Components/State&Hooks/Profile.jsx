import React , {useState} from "react";

function Profile() {
  const [name, setName] = useState("Vijay");
  const [age, setAge] = useState(22);
  const [isStudent, setIsStudent] = useState(true);

  return (
    <div>
      <h2>{name}, {age}</h2>
      <p>Status: {isStudent ? "Student" : "Professional"}</p>
      <button onClick={() => setIsStudent(!isStudent)}>Toggle</button>
    </div>
  );
}

export default Profile ;
