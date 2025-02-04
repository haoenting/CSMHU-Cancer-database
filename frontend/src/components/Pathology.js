import React, { useState, useEffect } from 'react';
const Pathology = ({ data, onDataUpdate }) => {
  const [localData, setLocalData] = useState({
    Tumor_long2:'',
    Tumor_wide2:'',
    Tumor_high2:'',
    Tumor_Type:'',
    Distal_Margin:'',
    Call_type:'',
    Differetiatnion:'',
    Lypmhatic: false,
    Vascular: false,
    Perineural: false,
    Synchronous_Polypo: false,
    Synchronous_cancer: false,
    Cut_margin_condition:'',
    LN_examed:'',
    LN_involved:'',
    Final_T:'',
    Final_N:'',
    Final_M:'',
    Final_stage:''
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

    return (
        <div >
        <table className='second-table'>
          <td valign="top">
            <u>Tumor size</u><br/>
            <div class="container">
              <span>Long :</span> 
              <input type="text" name="Tumor_long2" size="13" value={localData.Tumor_long2} onChange={handleInputChange}/>
            </div>

            <div class="container">
              <span>Wide :</span> 
              <input type="text" name="Tumor_wide2" size="13" value={localData.Tumor_wide2} onChange={handleInputChange}/>
            </div>

            <div class="container">
              <span>High :</span>
              <input type="text" name="Tumor_high2" size="13" value={localData.Tumor_high2} onChange={handleInputChange}/>
            </div>

            <div class="container">
              <span>Type :</span> 
              <input list="Tumor_Type" name="Tumor_Type" type="text" size="10" value={localData.Tumor_Type} onChange={handleInputChange}/>
              <datalist id="Tumor_Type">
                <select>
                <option value="Ulcerative">Ulcerative</option>
                <option value="Polypoid">Polypoid</option>
                <option value="Annular">Annular</option>
              </select>
              </datalist>
            </div><br/>

            <div class="container">
              <span>Distal Margin :</span>
              <span>
                <input type="text" name="Distal_Margin" size="3" value={localData.Distal_Margin} onChange={handleInputChange}/>
                CM
              </span>
            </div>

            <div class="container">
              <span>Call type :</span> 
              <input list="Call_type" name="Call_type" type="text" value={localData.Call_type} onChange={handleInputChange}/>
              <datalist id="Call_type">
                <select>
                <option value="Adenocarcinoma">Adenocarcinoma</option>
                <option value="SCC">SCC</option>
                <option value="Mucinous adenocarcinoma">Mucinous adenocarcinoma</option>
                <option value="Signet ring cell adenocarcinoma">Signet ring cell adenocarcinoma</option>
                <option value="Carcinoid tumor">Carcinoid tumor</option>
                <option value="Leiomyoscarcoma">Leiomyoscarcoma</option>
                <option value="GIST">GIST</option>
                <option value="Others">Others</option>
              </select>
              </datalist>
            </div>

            <div class="container">
              <span>Differetiatnion :</span>
              <input list="Differetiatnion" name="Differetiatnion" type="text" size="10" value={localData.Differetiatnion} onChange={handleInputChange}/>
              <datalist id="Differetiatnion">
                <select>
                <option value="Well">Well</option>
                <option value="Moderate">Moderate</option>
                <option value="Poor">Poor</option>
                <option value="Well to moderate">Well to moderate</option>
                <option value="Moderate to poor">Moderate to poor</option>
              </select>
              </datalist>
            </div>

            <input type="checkbox" id="Lypmhatic" name="Lypmhatic" checked={localData.Lypmhatic} onChange={handleInputChange}/>
            <label htmlFor="Lypmhatic">Lypmhatic</label><br />
            <input type="checkbox" id="Vascular" name="Vascular" checked={localData.Vascular} onChange={handleInputChange}/>
            <label htmlFor="Vascular">Vascular</label><br />
            <input type="checkbox" id="Perineural" name="Perineural" checked={localData.Perineural} onChange={handleInputChange}/>
            <label htmlFor="Perineural">Perineural</label><br />
           
          </td>
          <td valign="top">
            <input type="checkbox" id="Synchronous_Polypo" name="Synchronous_Polypo" checked={localData.Synchronous_Polypo} onChange={handleInputChange}/>
            <label htmlFor="Synchronous_Polypo">Synchronous polypo</label><br />
            <input type="checkbox" id="Synchronous_cancer" name="Synchronous_cancer" checked={localData.Synchronous_cancer} onChange={handleInputChange}/>
            <label htmlFor="Synchronous_cancer">Synchronous cancer</label><br />


            <div class="container">
              <span>Cut margin condition</span>
              <input list="Cut_margin_condition" name="Cut_margin_condition" type="text" size="10" value={localData.Cut_margin_condition} onChange={handleInputChange}/>
              <datalist id="Cut_margin_condition">
                <select>
                  <option value="Clear">Clear</option>
                  <option value="Involved">Involved</option>
              </select>
              </datalist>
            </div>

            <div class="container">
              <span>Number of LN examed</span>
              <input type="text" name="LN_examed" size="5"  value={localData.LN_examed} onChange={handleInputChange}/>
            </div>

            <div class="container">
              <span>Number of LN involved</span>
              <input type="text" name="LN_involved" size="5"  value={localData.LN_involved}onChange={handleInputChange}/>
            </div><br/>

            <u>Final stage</u><br/>
            <div class="container">
              <span>T : </span>
              <input type="text" name="Final_T" size="5" value={localData.Final_T} onChange={handleInputChange}/>
            </div>

           <div class="container">
              <span>N : </span>
              <input type="text" name="Final_N" size="5" value={localData.Final_N} onChange={handleInputChange}/>
            </div>
            
            <div class="container">
              <span>M : </span>
              <input type="text" name="Final_M" size="5" value={localData.Final_M} onChange={handleInputChange}/>
            </div>

            <div class="container">
              <span>Stage : </span>
              <input type="text" name="Final_stage" size="5" value={localData.Final_stage} onChange={handleInputChange}/>
            </div>
          </td>
        </table>
      </div>
    );
}
export default Pathology;