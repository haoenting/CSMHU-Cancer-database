import React, { useState, useEffect } from 'react';
const Past_History = ({ data, onDataUpdate }) => {
  const [localData, setLocalData] = useState({
    DM:false,
    HTM:false,
    CVA:false,
    CAD:false,
    COPD:false,
    CHF:false,
    Liver_cirrhosis:false,
    Gout:false,
    MD_other:'',
    Surgical_history:'',
    Smoking:'',
    Drinking:'',
    Betal_nut:'',
    Family_CRC_1:false,
    Family_CRC_2:false,
    Family_CRC_3:false,
    Family_GI_cancer:false,
    Family_other_cancer:'',
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
        onDataUpdate(updatedData);// 將更新後的資料傳遞給父組件
        return updatedData;
      });
};

  return(
    <div >
      <table className='second-table'>
        <tr>
          <td  valign="top">
            <u>Medical history</u><br/>
            <input type="checkbox" id="DM" name="DM" checked={localData.DM} onChange={handleInputChange}/>
            <label htmlFor="DM">DM</label><br />
            <input type="checkbox" id="HTM" name="HTM" checked={localData.HTM} onChange={handleInputChange}/>
            <label htmlFor="HTM">HTM</label><br />
            <input type="checkbox" id="CVA" name="CVA" checked={localData.CVA} onChange={handleInputChange}/>
            <label htmlFor="CVA">CVA</label><br />
            <input type="checkbox" id="CAD" name="CAD" checked={localData.CAD} onChange={handleInputChange}/>
            <label htmlFor="CAD">CAD</label><br />
            <input type="checkbox" id="COPD" name="COPD" checked={localData.COPD} onChange={handleInputChange}/>
            <label htmlFor="COPD">COPD</label><br />
            <input type="checkbox" id="CHF" name="CHF" checked={localData.CHF} onChange={handleInputChange}/>
            <label htmlFor="CHF">CHF</label><br />
            <input type="checkbox" id="Liver_cirrhosis" name="Liver_cirrhosis" checked={localData.Liver_cirrhosis} onChange={handleInputChange}/>
            <label htmlFor="Liver_cirrhosis">Liver cirrhosis</label><br />
            <input type="checkbox" id="Gout" name="Gout" checked={localData.Gout} onChange={handleInputChange}/>
            <label htmlFor="Gout">Gout</label><br />
            <span>Others : </span>
            <input type="text" name="MD_other" value={localData.MD_other} onChange={handleInputChange}/>
          </td>

          <td valign="top" >
            <u>Surgical history</u><br/>
            <textarea name="Surgical_history" cols="40" rows="4" value={localData.Surgical_history|| ''} onChange={handleInputChange}></textarea>
            <br/><br/>

            <u>Personal Hx</u><br/>
            <div class="container">
              <span>Smoking : </span>
              <input list="Smoking" type="text" name="Smoking" size="10" value={localData.Smoking|| ''} onChange={handleInputChange}/>
              <datalist id="Smoking" >
                <select name="Smoking">
                  <option value="None"/>
                  <option value="1-10"/>
                  <option value="11-20"/>
                  <option value="Heavy"/>
                </select>
              </datalist>
            </div>

            <div class="container">
              <span>Drinking :</span> 
              <input list="Drinking" type="text" name="Drinking" size="10" value={localData.Drinking|| ''} onChange={handleInputChange}/>
              <datalist id="Drinking" >
                <select>
                  <option value="None"/>
                  <option value="Social"/>
                  <option value="Chronic"/>
                </select>
              </datalist>
            </div>
            
            <div class="container">
            <span>Betal nut chewing :</span> 
            <input list="Betal_nut" type="text" name="Betal_nut" size="10" value={localData.Betal_nut|| ''} onChange={handleInputChange}/>
            <datalist id="Betal_nut">
              <select>
                <option value="None"/>
                <option value="Social"/>
                <option value="Chronic"/>
              </select>
            </datalist> 
            </div>
          </td>
          
          <td valign="top">
            <u>Family Hx of CRC</u><br/>
            <input type="checkbox" id="Family_CRC_1" name="Family_CRC_1" checked={localData.Family_CRC_1} onChange={handleInputChange}/>
            <label htmlFor="Family_CRC_1">Family CRC 1</label><br />
            <input type="checkbox" id="Family_CRC_2" name="Family_CRC_2" checked={localData.Family_CRC_2} onChange={handleInputChange}/>
            <label htmlFor="Family_CRC_2">Family CRC 2</label><br />
            <input type="checkbox" id="Family_CRC_3" name="Family_CRC_3" checked={localData.Family_CRC_3} onChange={handleInputChange}/>
            <label htmlFor="Family_CRC_3">Family CRC 3</label><br /><br />

            <u>Family Hx of other cancer</u><br/>
            <input type="checkbox" id="Family_GI_cancer" name="Family_GI_cancer" checked={localData.Family_GI_cancer} onChange={handleInputChange}/>
            <label htmlFor="Family_GI_cancer">GI cancer</label><br />
            Other cancer : <br/>
            <textarea name="Family_other_cancer" value={localData.Family_other_cancer|| ''} onChange={handleInputChange}/>
          </td>
        </tr>
      </table>
    </div>
  );
}
export default Past_History;