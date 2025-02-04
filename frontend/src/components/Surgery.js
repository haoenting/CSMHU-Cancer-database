import React, { useState, useEffect } from 'react';
const Surgery = ({ data, onDataUpdate }) => {
  const [localData, setLocalData] = useState({
    Operatin_date:'',
    OP_method1:'',
    OP_method2:'',
    Extent_of_sugery:'',
    Anesthesia_type:'',
    OP_time:'',
    Blood_loss:'',
    P_RBC2:'',
    Whole_blood2:'',
    FFP2:'',
    Platelet2:'',
    Type_of_incision:'',
    Ascitis_color:'',
    Synchronous_colonic_tumor_site:'',
    Peritoneal_seeding:false,
    Tumor_site:'',
    Type_of_Anastomosis:'',
    Anastomosis_to_anal_verge:'',
    Distal_distence:'',
    Tumor_long:'',
    Tumor_wide:'',
    Tumor_High:'',
    Type_of_tumor:'',
    Perforation:false,
    Obstruction2:false,
    Invasion_other:'',
    Combined_resection:false,
    Palpable_LNs:'',
    Liver_nodule:'',
    Management:'',
    Protective_stoma:'',
    Intracolonic:false,
    Reason_of_palliative_TX:''
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
          <tr >
            <td >
              <div class="container2">
                <u>Operatin date : </u>
                <input type="date" name="Operatin_date" value={localData.Operatin_date} onChange={handleInputChange}/>
              </div>
            </td>
            <td colspan="2">
              <div class="container2">
                <u>OP method : </u>
                <input list="OP_method1" name="OP_method1" type="text" size="15" value={localData.OP_method1} onChange={handleInputChange}/>
                <datalist id="OP_method1">
                  <select>
                    <option value="Scope">Scope</option>
                    <option value="Open">Open</option>
                    <option value="Scope to open">Scope to open</option>
                  </select>
                </datalist>
              </div>

              <div style={{ float: 'right' }}>
                <input list="OP_method2" name="OP_method2" type="text" size="15" value={localData.OP_method2} onChange={handleInputChange}/>
                <datalist id="OP_method2">
                  <select>
                    <option value="Hartmanns procedure">Hartmanns procedure</option>
                    <option value="APR">APR</option>
                    <option value="CAA(staple)">CAA(staple)</option>
                    <option value="CAA(hand sewing)">CAA(hand sewing)</option>
                    <option value="LAR">LAR</option>
                    <option value="AR">AR</option>
                    <option value="Left colectomy">Left colectomy</option>
                    <option value="T-colectomy">T-colectomy</option>
                    <option value="Extended right hemicolectomy">Extended right hemicolectomy</option>
                    <option value="Right hemicolectomy">Right hemicolectomy</option>
                    <option value="Limited right hemicolectomy">Limited right hemicolectomy</option>
                    <option value="Total colectomy with IRA">Total colectomy with IRA</option>
                    <option value="Total proctocolectomy with ileostomy">Total proctocolectomy with ileostomy</option>
                    <option value="Total proctocolectomy with pouch">Total proctocolectomy with pouch</option>
                    <option value="Diversion">Diversion</option>
                    <option value="Bypass">Bypass</option>
                  </select>
                </datalist>
              </div>
            </td>
          </tr>
          <tr>
            <td valign="top">
              <div class="container2">
                <span>Extent of surgery :</span>
                <input list="Extent_of_sugery" name="Extent_of_sugery" type="text" size="15" value={localData.Extent_of_sugery} onChange={handleInputChange}/>
                <datalist id="Extent_of_sugery">
                  <select>
                    <option value="Curative">Curative</option>
                    <option value="Palliative">Palliative</option>
                    <option value="Uncertain">Uncertain</option>
                  </select>
                </datalist>
              </div>

              <div class="container2">
                <span>Anesthesia type :</span> 
                <input list="Anesthesia_type" name="Anesthesia_type" type="text" size="15" value={localData.Anesthesia_type} onChange={handleInputChange}/>
                <datalist id="Anesthesia_type">
                  <select>
                    <option value="GA">GA</option>
                    <option value="SA">SA</option>
                    <option value="EA">EA</option>
                    <option value="IVG">IVG</option>
                    <option value="LA">LA</option>
                  </select>
                </datalist>
              </div>

              <div class="container2">
                <span>OP time(min) : </span>
              <input type="text" name="OP_time" size="5" value={localData.OP_time} onChange={handleInputChange}/>
              </div>

              <div class="container2">
                <span>Blood loss(cc) :</span>
                <input type="text" name="Blood_loss" size="5" value={localData.Blood_loss} onChange={handleInputChange}/>
              </div><br/>

              <u>Blood transfusion</u><br/>
              <div class="container2">
                <span>P-RBC :</span>
                <input type="text" name="P_RBC2" size="5" value={localData.P_RBC2} onChange={handleInputChange}/>
              </div>
              <div class="container2">
                <span>Whole blood :</span>
                <input type="text" name="Whole_blood2" size="5" value={localData.Whole_blood2} onChange={handleInputChange}/>
              </div>
              <div class="container2">
                <span>FFP :</span>
                <input type="text" name="FFP2" size="5" value={localData.FFP2} onChange={handleInputChange}/>
              </div>
              <div class="container2">
                <span>Platelet :</span>
                <input type="text" name="Platelet2" size="5" value={localData.Platelet2} onChange={handleInputChange}/>
              </div><br/>

              <div class="container2">
                <u>Type of incision :</u>
                <input list="Type_of_incision" name="Type_of_incision" type="text" size="15" value={localData.Type_of_incision} onChange={handleInputChange}/>
                <datalist id="Type_of_incision">
                  <select>
                    <option value="Lower midline">Lower midline</option>
                    <option value="Upper midline">Upper midline</option>
                    <option value="Transverse">Transverse</option>
                    <option value="RUQ oblique">RUQ oblique</option>
                    <option value="LLQ oblique">LLQ oblique</option>
                    <option value="Laparoscopy">Laparoscopy</option>
                    <option value="Long midline">Long midline</option>
                  </select>
                </datalist>
              </div>

              <div class="container2">
                <span>Ascitis color : </span>
                <input list="Ascitis_color" name="Ascitis_color" type="text" size="15"  value={localData.Ascitis_color} onChange={handleInputChange}/>
                <datalist id="Ascitis_color">
                  <select>
                    <option value="None">None</option>
                    <option value="Clear">Clear</option>
                    <option value="Turbid">Turbid</option>
                  </select>
                </datalist>
              </div>

              <div class="container2">
                <span>Synchronous colonic tumor site :</span>
                <input list="Synchronous_colonic_tumor_site" name="Synchronous_colonic_tumor_site" type="text" size="10"  value={localData.Synchronous_colonic_tumor_site} onChange={handleInputChange}/>
                <datalist id="Synchronous_colonic_tumor_site">
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
              <input type="checkbox" name="Peritoneal_seeding" checked={localData.Peritoneal_seeding} onChange={handleInputChange}/>
              <span>Peritoneal seeding</span>
            </td>

            <td valign="top">
              <div class="container2">
                <u>Tumor site : </u>
                <input list="Tumor_site" name="Tumor_site" type="text" size="10" value={localData.Tumor_site} onChange={handleInputChange}/>
                <datalist id="Tumor_site">
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

              <div class="container">
                <span>Type of anastomosis :</span>
                <input list="Type_of_Anastomosis" name="Type_of_Anastomosis" type="text" size="10" value={localData.Type_of_Anastomosis} onChange={handleInputChange}/>
                <datalist id="Type_of_Anastomosis">
                  <select>
                  <option value="Stapled">Stapled</option>
                  <option value="Hand-sewing">Hand-sewing</option>
                  <option value="None">None</option>
                </select>
                </datalist>
              </div>
              
              <div class="container2">
                <span>Anastomosis to anal verge :</span>
                <input type="text" name="Anastomosis_to_anal_verge" size="5" value={localData.Anastomosis_to_anal_verge} onChange={handleInputChange}/>
              </div>

              <div class="container2">
                <span>Distal distence (cm) :</span>
                <input type="text" name="Distal_distence" size="5" value={localData.Distal_distence} onChange={handleInputChange}/>
              </div><br/>

              <u>Tumor size</u><br/>
              <div class="container2">
                <span>Long :</span>
                <input type="text" name="Tumor_long" size="13" value={localData.Tumor_long} onChange={handleInputChange}/>
              </div>

              <div class="container2">
                <span>Wide :</span>
                <input type="text" name="Tumor_wide" size="13" value={localData.Tumor_wide} onChange={handleInputChange}/>
              </div>

              <div class="container2">
                <span>High :</span>
                <input type="text" name="Tumor_High" size="13" value={localData.Tumor_High} onChange={handleInputChange}/>
              </div><br/>

              <div class="container2">
                <u>Type of tumor : </u>
                <input list="Type_of_tumor" name="Type_of_tumor" type="text" size="10" value={localData.Type_of_tumor} onChange={handleInputChange}/>
                <datalist id="Type_of_tumor">
                  <select>
                  <option value="Ulcrative">Ulcrative</option>
                  <option value="Polypoid">Polypoid</option>
                  <option value="Annular">Annular</option>
                  <option value="other">other</option>
                </select>
                </datalist>
              </div>

              <input type="checkbox" id="Perforation" name="Perforation" checked={localData.Perforation} onChange={handleInputChange}/>
              <label htmlFor="Perforation">Perforation</label><br />
              <input type="checkbox" id="Obstruction2" name="Obstruction2" checked={localData.Obstruction2} onChange={handleInputChange}/>
              <label htmlFor="Obstruction2">Obstruction</label><br />
            </td>

            <td valign="top">
              <u>Invasion to other structure :</u><br/>
              <textarea name="Invasion_other" cols="30" rows="3" value={localData.Invasion_other} onChange={handleInputChange}/>
              <br/>
              <input type="checkbox" id="Combined_resection" name="Combined_resection" checked={localData.Combined_resection} onChange={handleInputChange}/>
              <label htmlFor="Combined_resection">Combined resection</label><br />
              <br/>

              <div class="container2">
                <u>Palpable LNs : </u>
                <input list="Palpable_LNs" name="Palpable_LNs" type="text" size="10" value={localData.Palpable_LNs} onChange={handleInputChange}/>
                <datalist id="Palpable_LNs">
                  <select>
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                  <option value="Uncertain">Uncertain</option>
                </select>
                </datalist>
              </div>

              <div class="container2">
                <u>Liver nodule : </u>
                <input list="Liver_nodule" name="Liver_nodule" type="text" size="10"  value={localData.Liver_nodule} onChange={handleInputChange}/>
                <datalist id="Liver_nodule">
                  <select>
                  <option value="None">None</option>
                  <option value="Right lobe single">Right lobe single</option>
                  <option value="Right lobe multiple">Right lobe multiple</option>
                  <option value="Left lobe single">Left lobe single</option>
                  <option value="Left lobe multiple">Left lobe multiple</option>
                  <option value="Bilateral">Bilateral</option>
                </select>
                </datalist>
              </div>

              <div class="container2">
                <span>Management :</span>
                <input list="Management" name="Management" type="text" size="10" value={localData.Management} onChange={handleInputChange}/>
                <datalist id="Management">
                  <select>
                    <option value=""></option>
                    <option value="None">None</option>
                    <option value="BX">BX</option>
                    <option value="Resection">Resection</option>
                  </select>
                </datalist>
              </div><br/>
              
              <div class="container2">
                <u>Protective stoma :</u>
                <input list="Protective_stoma" name="Protective_stoma" type="text" size="10" value={localData.Protective_stoma} onChange={handleInputChange}/>
                <datalist id="Protective_stoma">
                  <select>
                    <option value="No">No</option>
                    <option value="Ileostomy">Ileostomy</option>
                    <option value="Colostomy">Colostomy</option>
                  </select>
                </datalist>
              </div>

              <input type="checkbox" id="Intracolonic" name="Intracolonic" size="10" checked={localData.Intracolonic} onChange={handleInputChange}/>
              <label htmlFor="Intracolonic">Intracolonic irrigation</label><br /><br />
              
              <u>Reason of palliative TX : </u><br/>
              <textarea name="Reason_of_palliative_TX" cols="30" rows="3" size="10" value={localData.Reason_of_palliative_TX} onChange={handleInputChange}/>
            </td>
          </tr>
        </table>
      </div>
    );
}
export default Surgery;