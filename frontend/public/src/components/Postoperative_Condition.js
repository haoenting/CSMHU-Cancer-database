import React, { useState, useEffect } from 'react';
const Postoperative_Condition = ({ data, onDataUpdate }) => {
  const [localData, setLocalData] = useState({
    Cefazoline2:'',
    Gentamicin2:'',
    Metronidazole2:'',
    Antiobitics_other:'',
    DC4:'',
    NG:'',
    POD1:'',
    PCA:'',
    POD2:'',
    Flatus:'',
    Defecation:'',
    Try_water:'',
    Soft_diet:'',
    Surgical:'',
    Medical:'',
    Complication_other:'',
    Length_of_hospitalization:'',
    Discharge:'',
    Re_amission:false,
    Motality:false,
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
            <td valign="top">
              <u>Antiobitics</u><br/>
              <div class="container">
                <span>Cefazoline</span>
                <span>
                  DC on POD (1) : 
                  <input type="text" name="Cefazoline2" size="5" value={localData.Cefazoline2} onChange={handleInputChange}/>
                </span>
              </div><br/>
              
              <div class="container">
                <span>Gentamicin</span>
                <span>
                  DC on POD (2) :
                  <input type="text" name="Gentamicin2" size="5" value={localData.Gentamicin2} onChange={handleInputChange}/>
                </span>
                </div><br/>

              <div class="container">
                <span>Metronidazole</span>
                <span>
                  DC on POD (3) :
                  <input type="text" name="Metronidazole2" size="5" value={localData.Metronidazole2} onChange={handleInputChange}/>
                </span>
                </div><br/>
              
              <div class="container">
                <span>
                  Others : 
                  <input type="text" name="Antiobitics_other" size="5" value={localData.Antiobitics_other} onChange={handleInputChange}/>
                </span>
                <span>
                  DC on POD (4) :
                  <input type="text" name="DC4" size="5" value={localData.DC4} onChange={handleInputChange}/>
                </span>
              </div><br/><br/>

              <div class="container">
                <span>NG :</span>
                <input list="NG" name="NG" type="text" size="10" value={localData.NG} onChange={handleInputChange}/>
                <datalist id="NG">
                  <select>
                    <option value="None">None</option>
                    <option value="Free drain">Free drain</option>
                    <option value="Decompression">Decompression</option>
                  </select>
                </datalist>
              </div>

              <div style={{ float: 'right' }}>
                <span>Removed on POD (1) :</span>
                <input type="text" name="POD1" size="5" value={localData.POD1} onChange={handleInputChange}/>
              </div><br/><br/>

              <div class="container">
                <span>PCA :</span> 
                <input list="PCA" name="PCA" type="text" size="10" value={localData.PCA} onChange={handleInputChange}/>
                <datalist id="PCA">
                  <select>
                    <option value="None">None</option>
                    <option value="Epidura">Epidura</option>
                    <option value="IV">IV</option>
                  </select>
                </datalist>
              </div>
              <div style={{ float: 'right' }}>
                <span>Removed on POD (2) :</span>
                <input type="text" name="POD2" size="5" value={localData.POD2} onChange={handleInputChange}/>
              </div>
            </td>

            <td valign="top">
              <div class="container">
                <span>Flatus on POD :</span> 
                <input type="text" name="Flatus" size="5" value={localData.Flatus} onChange={handleInputChange}/>
              </div>

              <div class="container">
                <span>Defecation on POD :</span>
                <input type="text" name="Defecation" size="5" value={localData.Defecation} onChange={handleInputChange}/>
              </div>

              <div class="container">
                <span>Try water on POD :</span>
                <input type="text" name="Try_water" size="5" value={localData.Try_water} onChange={handleInputChange}/>
              </div>

              <div class="container">
                <span>Soft diet on POD :</span>
                <input type="text" name="Soft_diet" size="5" value={localData.Soft_diet} onChange={handleInputChange}/>
              </div><br/>

              <u>Complication</u><br/>
              <div class="container">
                <span>Surgical :</span>
                <input list="Surgical" name="Surgical" type="text" size="10" value={localData.Surgical} onChange={handleInputChange}/>
                <datalist id="Surgical">
                  <select>
                    <option value="None">None</option>
                    <option value="Wound infection">Wound infection</option>
                    <option value="Leakage">Leakage</option>
                    <option value="Intrabdominal bbscess">Intrabdominal bbscess</option>
                    <option value="Hemonrrhage">Hemonrrhage</option>
                    <option value="Intestinal obstruction">Intestinal obstruction</option>
                  </select>
                </datalist>
              </div>

              <div class="container">
                <span>Medical :</span>
                <input list="Medical" name="Medical" type="text" size="10" value={localData.Medical} onChange={handleInputChange}/>
                <datalist id="Medical">
                  <select>
                    <option value="None">None</option>
                    <option value="Proloned ileus">Proloned ileus</option>
                    <option value="Pneumonia">Pneumonia</option>
                    <option value="CVA">CVA</option>
                    <option value="MI">MI</option>
                    <option value="UTI">UTI</option>
                    <option value="Urinary retention">Urinary retention</option>
                    <option value="Renal failure">Renal failure</option>
                    <option value="Respiratory failure">Respiratory failure</option>
                  </select>
                </datalist>
              </div>
              
              <div class="container">
                <span>Other :</span>
                <textarea name="Complication_other" value={localData.Complication_other} onChange={handleInputChange}/>
              </div>

              <div class="container">
                <span>Length of hospitalization</span>
                <input type="text" name="Length_of_hospitalization" size="5" value={localData.Length_of_hospitalization} onChange={handleInputChange}/>
              </div>

              <div class="container">
                <span>Discharge on POD :</span>
                <input type="text" name="Discharge" size="5" value={localData.Discharge} onChange={handleInputChange}/>
              </div>
              
              <input type="checkbox" id="Re_amission" name="Re_amission" checked={localData.Re_amission} onChange={handleInputChange}/>
              <label htmlFor="Re_amission">Re-admission within 14 days</label><br />
              <input type="checkbox" id="Motality" name="Motality" checked={localData.Motality} onChange={handleInputChange}/>
              <label htmlFor="Motality">Motality  within 30 days</label>
            </td>
            </tr>
        </table>
      </div>
    );
}
export default Postoperative_Condition;