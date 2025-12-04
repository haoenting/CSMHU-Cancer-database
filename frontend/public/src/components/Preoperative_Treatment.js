import React, { useState, useEffect } from 'react';
const Rreoperative_Treament = ({ data, onDataUpdate }) => {
  const [localData, setLocalData] = useState({
    Albumin2:false,
    PPN:false,
    TPN:false,
    days:'',
    P_RBC:'',
    Whole_blood:'',
    FFP:'',
    Platelet:'',
    Colon_preparation_Type:'',
    Laxativs:'',
    Oral_antibiotics:false,
    Retention_enema:false,
    Cafazolin:false,
    Gentamicin:false,
    Metronidazole:false,
    Pre_OP_Other:''
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
            <u>Nutrition support</u><br/>
            <input type="checkbox" id="Albumin2" name="Albumin2" checked={localData.Albumin2} onChange={handleInputChange}/>
            <label htmlFor="Albumin2">Albumin</label><br />
            <input type="checkbox" id="PPN" name="PPN" checked={localData.PPN} onChange={handleInputChange}/>
            <label htmlFor="PPN">PPN</label><br />
            <input type="checkbox" id="TPN" name="TPN" checked={localData.TPN} onChange={handleInputChange}/>
            <label htmlFor="TPN">TPN</label><br />
            
            <span>days : </span> 
            <input type="text" name="days" size="3" value={localData.days} onChange={handleInputChange}/><br/><br/>

            <u>Blood transfusion</u><br/>
            <div class="container">
              <span>P-RBC :</span> 
              <input list="P_RBC" name="P_RBC" type="text" size="10" value={localData.P_RBC} onChange={handleInputChange}/>
              <datalist id="P_RBC">
                <select>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value=">6">{'>'}6</option>
              </select>  
              </datalist>
            </div>

            <div class="container">
              <span>Whole blood :</span>
              <input list="Whole_blood" name="Whole_blood" type="text" size="10" value={localData.Whole_blood} onChange={handleInputChange}/>
              <datalist id="Whole_blood">
                <select>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value=">4">{'>'}4</option>
                </select>
              </datalist>
            </div>

            <div class="container">
              <span>FFP :</span>
              <input list="FFP" name="FFP" type="text" size="10" value={localData.FFP} onChange={handleInputChange}/>
              <datalist id="FFP">
                <select>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value=">6">{'>'}6</option>
              </select>
              </datalist>
            </div>

            <div class="container">
              <span>Platelet :</span> 
              <input type="text" name="Platelet" size="8" value={localData.Platelet} onChange={handleInputChange}/>
            </div>
          </td>
          
          <td valign="top">
            <u>Colon preparation</u><br/>
            <div class="container">
              <span>Type : </span>
              <input list="Colon_preparation_Type" name="Colon_preparation_Type" type="text" size="15" value={localData.Colon_preparation_Type} onChange={handleInputChange}/>
              <datalist id="Colon_preparation_Type">
                <select>
                  <option value="One day prepare"/>
                  <option value="Two day prepare"/>
                  <option value="Three day prepare"/>
                </select>
              </datalist>
            </div>
            
            <div class="container">
              <span>Laxativs :</span>
              <input list="Laxativs" name="Laxativs" type="text" size="15" value={localData.Laxativs} onChange={handleInputChange}/>
              <datalist id="Laxativs">
                <select>
                  <option value="None">None</option>
                  <option value="Klean Prep power">Klean Prep power</option>
                  <option value="Phosphosoda">Phosphosoda</option>
                  <option value="Dulcolax">Dulcolax</option>
                  <option value="Caster Oil">Caster Oil</option>
                </select>
              </datalist>
            </div>

            <input type="checkbox" id="Oral_antibiotics" name="Oral_antibiotics" checked={localData.Oral_antibiotics} onChange={handleInputChange}/>
            <label htmlFor="Oral_antibiotics">Oral antibiotics</label><br />
            <input type="checkbox" id="Retention_enema" name="Retention_enema" checked={localData.Retention_enema} onChange={handleInputChange}/>
            <label htmlFor="Retention_enema">Retention enem</label><br /><br />
            
            <u>Pre-OP Antibiotics</u><br/>
            <input type="checkbox" id="Cafazolin" name="Cafazolin" checked={localData.Cafazolin} onChange={handleInputChange}/>
            <label htmlFor="Cafazolin">Cafazolin (1 g)</label><br />
            <input type="checkbox" id="Gentamicin" name="Gentamicin" checked={localData.Gentamicin} onChange={handleInputChange}/>
            <label htmlFor="Gentamicin">Gentamicin (80 mg)</label><br />
            <input type="checkbox" id="Metronidazole" name="Metronidazole" checked={localData.Metronidazole} onChange={handleInputChange}/>
            <label htmlFor="Metronidazole">Metronidazole (500 mg)</label><br />
            <div class="container">
              <span>Other :</span>
              <textarea name="Pre_OP_Other" value={localData.Pre_OP_Other}  onChange={handleInputChange}/>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );

}
export default Rreoperative_Treament;