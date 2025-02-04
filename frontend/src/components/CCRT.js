import React, { useState, useEffect } from 'react';
const CCRT = ({ data, onDataUpdate }) => {
  const [localData, setLocalData] = useState({
    UFT: false,
    Xeloda: false,
    Neoadjavent_dose: '',
    Side_effect: '',
    Time_to_surgery: ''
  });

  useEffect(() => {
    if (data) {
      setLocalData(data);
    }
  }, [data]);

const handleInputChange = (event) => {
  const { name, type, checked, value } = event.target;
  const newValue = type === 'checkbox' ? checked : value;

  setLocalData(prevState => {
      const updatedData = {
          ...prevState,
          [name]: newValue
      };
      onDataUpdate(updatedData); // 將更新後的資料傳遞給父組件
      return updatedData;
  });
};

  return(
      <div >  
          <table className='second-table'>
            <tr>
              <td valign="top">
                <u>Neoadjavent C/T</u><br/>
                <input 
                  type="checkbox" 
                  id="UFT"
                  name="UFT" 
                  checked={localData.UFT}
                  onChange={handleInputChange}
                />
                <label htmlFor="UFT">UFT</label><br />

                <input 
                  type="checkbox" 
                  id="Xeloda" 
                  name="Xeloda" 
                  checked={localData.Xeloda}
                  onChange={handleInputChange}
                />
                <label htmlFor="Xeloda">Xeloda</label><br /><br />

                <u>Neoadjavent R/T</u><br/>
                <span>Total dose (Gy) : </span>
                <input 
                  type="text" 
                  name="Neoadjavent_dose" 
                  value={localData.Neoadjavent_dose}
                  onChange={handleInputChange}
                />
                <br/><br/>

                <span>Side effect : </span> 
                <input 
                  type="text" 
                  name="Side_effect" 
                  size="13" 
                  value={localData.Side_effect}
                  onChange={handleInputChange}
                />
                <br/><br/>

                <span>Time to surgery(wks) : </span>
                <input 
                  list="Time_to_surgery" 
                  name="Time_to_surgery" 
                  type="text" size="15" 
                  value={localData.Time_to_surgery}
                  onChange={handleInputChange}
                />
                <datalist id="Time_to_surgery">
                  <select>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value=">8">{'>'}8</option>
                  </select>
                </datalist>
              </td>
            </tr>
          </table>
        </div>

  );
}

export default CCRT;