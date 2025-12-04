import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Check() {
  const navigate = useNavigate();
  const [PatientData, setPatientData] = useState([]);

  useEffect(() => {
    const fetchActions = async () => {
      try {
        const response = await axios.get('/api/getPatient');
        setPatientData(response.data);
      } catch (error) {
        console.error('Error fetching', error);
      }
    };
    fetchActions();
  }, []);

  return (
    <div>  
      <h2>Recent Actions</h2>
      <table>
        <thead>
          <tr>
            <th>Chart</th>
            <th>ID</th>
            <th>Name</th>
            <th>Creator</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {PatientData.map((setPatient) => (
            <tr key={setPatient.Chart}>
              <td>{setPatient.Chart}</td>
              <td>{setPatient.ID}</td>
              <td>{setPatient.Name}</td>
              <td>{setPatient.created_by}</td>
              <td>{new Date(setPatient.created_at).toLocaleString()}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Check;
