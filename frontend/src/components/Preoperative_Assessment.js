import React, { useState, useEffect } from 'react';
const Preoperative_Assessment = ({ data, onDataUpdate }) => {
  const [localData, setLocalData] = useState({
    Hemoglobin:'',
    WBC:'',
    Platelet:'',
    GOT:'',
    GPT:'',
    ALk:'',
    BilT:'',
    BilD:'',
    Albumin:'',
    BUN:'',
    Creatinine:'',
    Na:'',
    K:'',
    PT:'',
    APTT:'',
    INR:'',
    CEA:'',
    CA125:'',
    CA199:'',
    Other4_1:'',
    Stool_OB2:'',
    Bone_scan:'',
    MRI2:false,
    PET_scan:'',
    Scopy:'',
    Scopy_c:'',
    Up_to:'',
    Obstruction:'',
    Tumor_location:'',
    Distence_from_AV:'',
    Polyps1:false,
    CXR:'',
    Wall_thickening:false,
    Involving_adjvcent_organ:false,
    LN_enlargement:false,
    Liver_lodules:false,
    Other4_2:'',
    Barium_enema:'',
    Polyps2:false,
    Abdominal_sonography:'',
    Noudle_number:'',
    Other4_3:'',
    Other4_4:''
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
        <div>
            <table className='second-table'>
            <tr>
              <td valign="top">
                <u>CBC</u><br />
                <div class="container2">
                  <span>Hemoglobin :</span> 
                  <input type="text" name="Hemoglobin" size="8" value={localData.Hemoglobin} onChange={handleInputChange}/>
                </div>
                
                <div class="container2">
                  <span>WBC :</span>
                  <input type="text" name="WBC" size="8" value={localData.WBC} onChange={handleInputChange}/>
                </div>
                  
                <div class="container2">
                  <span>Platelet(k) :</span>
                  <input type="text" name="Platelet" size="8" value={localData.Platelet} onChange={handleInputChange}/>
                </div><br />

                <u>Liver function</u><br />
                <div class="container2">
                  <span>GOT :</span>
                  <input type="text" name="GOT" size="8" value={localData.GOT}onChange={handleInputChange}/>
                </div>
               
                <div class="container2">
                  <span>GPT :</span>
                  <input type="text" name="GPT" size="8" value={localData.GPT} onChange={handleInputChange}/>
                </div>

                <div class="container2">
                  <span>ALk-P :</span>
                  <input type="text" name="ALk" size="8" value={localData.ALk} onChange={handleInputChange}/>
                </div>

                <div class="container2">
                  <span>Bil-T :</span>
                  <input type="text" name="BilT" size="8" value={localData.BilT} onChange={handleInputChange}/>
                </div>

                <div class="container2">
                  <span>Bil-D :</span>
                  <input type="text" name="BilD" size="8" value={localData.BilD} onChange={handleInputChange}/>
                </div>

                <div class="container2">
                  <span>Albumin :</span>
                  <input type="text" name="Albumin" size="8" value={localData.Albumin} onChange={handleInputChange}/>
                </div><br />

                <u>Renal Function/electrolyte</u><br/>
                <div class="container2">
                  <span>BUN :</span>
                  <input type="text" name="BUN" size="8" value={localData.BUN} onChange={handleInputChange}/>
                </div>
               
                <div class="container2">
                  <span>Creatinine :</span> 
                  <input type="text" name="Creatinine" size="8" value={localData.Creatinine} onChange={handleInputChange}/>
                </div>

                <div class="container2">
                  <span>Na+ :</span>
                  <input type="text" name="Na" size="8" value={localData.Na} onChange={handleInputChange}/>
                </div>

                <div class="container2">
                  <span>K+ :</span>
                  <input type="text" name="K" size="8" value={localData.K} onChange={handleInputChange}/>
                </div>
              </td>

              <td valign="top">
                <u>Caugulation profile</u><br/>
                <div class="container2">
                  <span>PT :</span>
                  <input type="text" name="PT" size="8" value={localData.PT} onChange={handleInputChange}/>
                </div>

                <div class="container2">
                  <span>APTT :</span>
                  <input type="text" name="APTT" size="8" value={localData.APTT} onChange={handleInputChange}/>
                </div>

                <div class="container2">
                  <span>INR:</span>
                  <input type="text" name="INR" size="8" value={localData.INR} onChange={handleInputChange}/>
                </div><br/>

                <u>Tumor marker</u><br/>
                <div class="container2">
                  <span>CEA :</span>
                  <input type="text" name="CEA" size="8" value={localData.CEA} onChange={handleInputChange}/>
                </div>
                
                <div class="container2">
                  <span> CA-125 :</span>
                  <input type="text" name="CA125" size="8" value={localData.CA125} onChange={handleInputChange}/>
                </div>

                <div class="container2">
                  <span>CA-199 :</span>
                  <input type="text" name="CA199" size="8" value={localData.CA199} onChange={handleInputChange}/>
                </div>

                <div class="container2">
                  <span>Other :</span>
                  <textarea  name="Other4_1" value={localData.Other4_1} onChange={handleInputChange}/>
                </div><br/>

                <div class="container2">
                  <u>Stool OB :</u>
                  <input list="Stool_OB2" name="Stool_OB2" type="text" size="15" value={localData.Stool_OB2} onChange={handleInputChange}/>
                  <datalist id="Stool_OB2">
                    <select>
                      <option value="None" >None</option>
                      <option value="Positive">Positive</option>
                      <option value="Negative">Negative</option>
                  </select>
                  </datalist>
                </div>

                <div class="container2">
                  <u>Bone scan :</u>
                  <input list="Bone_scan" name="Bone_scan" type="text" size="15" value={localData.Bone_scan} onChange={handleInputChange}/>
                  <datalist id="Bone_scan">
                    <select>
                      <option value="None">None</option>
                      <option value="Positive">Positive</option>
                      <option value="Negative">Negative</option>
                    </select>
                  </datalist>
                </div><br/>

                <input type="checkbox" id="MRI2" name="MRI2" checked={localData.MRI2} onChange={handleInputChange}/>
                <label htmlFor="MRI2">MRI</label><br /><br />
                
                <div class="container2">
                  <u>PET scan :</u> 
                  <input list="PET_scan" name="PET_scan" type="text" size="15" value={localData.PET_scan} onChange={handleInputChange}/>
                  <datalist id="PET_scan">
                    <select>
                    <option value="None">None</option>
                    <option value="Positive">Positive</option>
                    <option value="Negative">Negative</option>
                  </select>
                  </datalist>
                </div>
              </td>

              <td valign="top">
                <div class="container2">
                  <u>Scopy : </u>
                  <input list="Scopy" name="Scopy" type="text" size="15" value={localData.Scopy} onChange={handleInputChange}/>
                  <datalist id="Scopy">
                    <select>
                      <option value=""></option>
                      <option value="Colono scopy">Colono scopy</option>
                      <option value="Sigmoid scopy">Sigmoid scopy</option>
                    </select>
                  </datalist>
                </div>

                <input type="radio" name="Scopy_c" checked={localData.Scopy_c === 'Complete'} onChange={handleInputChange}/>Complete<br/>
                <input type="radio" name="Scopy_c" checked={localData.Scopy_c === 'Incomplete'} onChange={handleInputChange}/>Incomplete
                <div style={{ float: 'right' }}>
                  <a> Up to : </a>
                  <input type="text" name="Up_to" size="3" value={handleInputChange}/> CM
                </div><br/><br/>

                <div class="container2">
                  <span>Obstruction :</span> 
                  <input list="Obstruction" name="Obstruction" type="text" size="15" value={localData.Obstruction} onChange={handleInputChange}/>
                    <datalist id="Obstruction">
                      <select>
                      <option value="None">None</option>
                      <option value="Partial">Partial</option>
                      <option value="Total">Total</option>
                    </select>
                    </datalist>
                </div>

                <div class="container2">
                  Tumor location : 
                    <input list="Tumor_location" name="Tumor_location" type="text" size="15" value={localData.Tumor_location} onChange={handleInputChange}/>
                    <datalist id="Tumor_location">
                      <select>
                        <option value="Appendix">Appendix</option>
                        <option value="Cecum">Cecum</option>
                        <option value="A-colon">A-colon</option>
                        <option value="Hepatic fluxure">Hepatic fluxure</option>
                        <option value="Right T-colon">Right T-colon</option>
                        <option value="Mid T-colon">Mid T-colon</option>
                        <option value="Left T-colon">Left T-colon</option>
                        <option value="Splenic flexure">Splenic flexure</option>
                        <option value="D-colon">D-colon</option>
                        <option value="DS junction">DS junction</option>
                        <option value="S-colon">S-colon</option>
                        <option value="RS junction">RS junction</option>
                        <option value="Upper rectum">Upper rectum</option>
                        <option value="Middle rectum">Middle rectum</option>
                        <option value="Lower rectum">Lower rectum</option>
                        <option value="Anal canal">Anal canal</option>
                        <option value="Anus">Anus</option>
                        <option value="2-site">2-site</option>
                      </select>
                    </datalist>
                </div>
                
                <span>Distence from AV :</span> 
                <div style={{ float: 'right' }}>
                  <input type="text" name="Distence_from_AV" size="3" value={localData.Distence_from_AV} onChange={handleInputChange}/> CM
                </div><br/><br/>

                <input type="checkbox" id="Polyps1" name="Polyps1" checked={localData.Polyps1} onChange={handleInputChange}/>
                <label htmlFor="Polyps1">Polyps</label><br /><br/>

                <u>Radiology</u><br/>
                <div class="container2">
                  <span>CXR</span>
                  <input list="CXR" name="CXR" type="text" size="10" value={localData.CXR} onChange={handleInputChange}/>
                  <datalist id="CXR">
                    <select>
                      <option value="No">No</option>
                      <option value="WNL">WNL</option>
                      <option value="Nodule">Nodule</option>
                    </select>
                  </datalist>
                </div><br/>

                <u>Abdominal CT</u><br/>
                <input type="checkbox" id="Wall_thickening" name="Wall_thickening" checked={localData.Wall_thickening} onChange={handleInputChange}/>
                <label htmlFor="Wall_thickening">Wall thickening</label><br />
                <input type="checkbox" id="Involving_adjvcent_organ" name="Involving_adjvcent_organ" checked={localData.Involving_adjvcent_organ} onChange={handleInputChange}/>
                <label htmlFor="Involving_adjvcent_organ">Involving adjvcent organ</label><br />
                <input type="checkbox" id="LN_enlargement" name="LN_enlargement" checked={localData.LN_enlargement} onChange={handleInputChange}/>
                <label htmlFor="LN_enlargement">LN enlargement</label><br />
                <input type="checkbox" id="Liver_lodules" name="Liver_lodules" checked={localData.Liver_lodules} onChange={handleInputChange}/>
                <label htmlFor="Liver_lodules">Liver lodules</label><br />

                <span>Other : </span>
                <input type="text" name="Other4_2" size="10" value={localData.Other4_2} onChange={handleInputChange}/>
              </td>

              <td valign="top">
                <div class="container2">
                  <span>Barium enema</span>
                  <input list="Barium_enema" name="Barium_enema" type="text" size="10" value={localData.Barium_enema} onChange={handleInputChange}/>
                    <datalist id="Barium_enema">
                      <select>
                      <option value="Nil">Nil</option>
                      <option value="No finding">No finding</option>
                      <option value="Tumor detect">Tumor detect</option>
                    </select>
                    </datalist>
                </div>

                <input type="checkbox" id="Polyps2" name="Polyps2" checked={localData.Polyps2} onChange={handleInputChange}/>
                <label htmlFor="Polyps2">Polyps</label><br /><br />

                <div class="container2">
                  <span>Abdominal sonography</span>
                  <input list="Abdominal_sonography" name="Abdominal_sonography" type="text" size="10" value={localData.Abdominal_sonography} onChange={handleInputChange}/>
                  <datalist id="Abdominal_sonography">
                    <select>
                    <option value="No" >No</option>
                    <option value="WNL">WNL</option>
                    <option value="Nodule">Nodule</option>
                  </select>
                  </datalist>
                </div>

                <div class="container2">
                  <span>Nodule number : </span> 
                  <input type="text" name="Noudle_number" size="5" value={localData.Noudle_number} onChange={handleInputChange}/>
                </div>
                <br/>

                <div class="container2">
                  <span>Others(1) :</span> 
                  <textarea name="Other4_3" value={localData.Other4_3} onChange={handleInputChange}/>
                </div><br/>
               
                <div class="container2">
                  <span>Others(2) : </span>
                  <textarea name="Other4_4" value={localData.Other4_4} onChange={handleInputChange}/>
                </div>
              </td>
            </tr>
          </table>
          </div>
    );
}

export default Preoperative_Assessment;