import React, { useEffect, useState} from 'react'

function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('http://localhost:8081/department')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err));
  }, [])
  return(
    <div style = {{padding: "100px"}}>
      <table>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Status</th>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key ={i}>
              <td>{d.department_ID}</td>
              <td>{d.departmentName}</td>
              <td>{d.status}</td>
            </tr>
          ) )}
        </tbody>
      </table>
    </div>
  )
}

export default App