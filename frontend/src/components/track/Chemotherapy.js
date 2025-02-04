import React, { useState, useEffect } from 'react';
const Chemotherapy = ({ data, onDataUpdate }) => {
  const [localData, setLocalData] = useState({
    start_1:'', end_1:'',
    start_2:'', end_2:'',
    start_3:'', end_3:'',
    start_4:'', end_4:'',
    start_5:'', end_5:'',
    start_6:'', end_6:'',
    start_7:'', end_7:'',
    start_8:'', end_8:'',
    start_9:'', end_9:'',
    start_10:'', end_10:'',
  });

  useEffect(() => {
    if (data) {
      // alert(JSON.stringify(data)); 
      setLocalData(data);
    }
  }, [data]);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setLocalData(prevState => {
          const updatedData = {
              ...prevState,
              [name]: value
          };
          onDataUpdate(updatedData);// 將更新後的資料傳遞給父組件
          return updatedData;
        });
  };

  return(
      <div >
        <table className="third-table">
          <tr>
           <th style={{ width: '5%' }}>次數</th>
            <th style={{ width: '47%' }}>Start time</th>
            <th style={{ width: '48%' }}>End time</th>
          </tr>
         <tr>
            <td>1</td>
            <td><input type="date" name="start_1" value={localData.start_1} onChange={handleChange} /></td>
            <td><input type="date" name="end_1" value={localData.end_1} onChange={handleChange}/></td>
          </tr>
          <tr>
            <td>2</td>
            <td><input type="date" name="start_2" value={localData.start_2} onChange={handleChange}/></td>
            <td><input type="date" name="end_2" value={localData.end_2} onChange={handleChange}/></td>
          </tr>
          <tr>
            <td>3</td>
            <td><input type="date" name="start_3" value={localData.start_3} onChange={handleChange}/></td>
            <td><input type="date" name="end_3" value={localData.end_3} onChange={handleChange}/></td>
          </tr>
          <tr>
            <td>4</td>
            <td><input type="date" name="start_4" value={localData.start_4} onChange={handleChange}/></td>
            <td><input type="date" name="end_4"value={localData.end_4}  onChange={handleChange}/></td>
          </tr>
          <tr>
            <td>5</td>
            <td><input type="date" name="start_5" value={localData.start_5} onChange={handleChange}/></td>
            <td><input type="date" name="end_5" value={localData.end_5} onChange={handleChange}/></td>
          </tr>
          <tr>
            <td>6</td>
            <td><input type="date" name="start_6" value={localData.start_6} onChange={handleChange}/></td>
            <td><input type="date" name="end_6" value={localData.end_6} onChange={handleChange}/></td>
          </tr>
          <tr>
            <td>7</td>
            <td><input type="date" name="start_7" value={localData.start_7} onChange={handleChange}/></td>
            <td><input type="date" name="end_7" value={localData.end_7} onChange={handleChange}/></td>
          </tr>
          <tr>
            <td>8</td>
            <td><input type="date" name="start_8" value={localData.start_8} onChange={handleChange}/></td>
            <td><input type="date" name="end_8" value={localData.end_8} onChange={handleChange}/></td>
          </tr>
          <tr>
            <td>9</td>
            <td><input type="date" name="start_9" value={localData.start_9} onChange={handleChange}/></td>
            <td><input type="date" name="end_9" value={localData.end_9} onChange={handleChange}/></td>
          </tr>
          <tr>
            <td>10</td>
            <td><input type="date" name="start_10" value={localData.start_10} onChange={handleChange}/></td>
            <td><input type="date" name="end_10" value={localData.end_10} onChange={handleChange}/></td>
          </tr>
        </table>
      </div>
  );
}
export default Chemotherapy;
