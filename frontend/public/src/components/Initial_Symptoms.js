import React, { useState, useEffect } from 'react';
const Initial_Symptoms = ({ data, onDataUpdate }) => {
  const [localData, setLocalData] = useState({
    Stool_OB:false,
    Colonoscocopy:false,
    CEA:false,
    CT:false,
    MRI:false,
    PET:false,
    Fresh_blood:false,
    Bloody_stool:false,
    Melanoma:false,
    Small_caliber_of_stool:false,
    Tenesmus:false,
    Constipation:false,
    Diarrhea:false,
    Mucus_passage:false,
    Abdomen_pain:false,
    Abdomen_distention:false,
    Abdomen_fullness:false,
    Abdomen_mass:false,
    Vomiting:false,
    Loss_appetite:false,
    Anemia:false,
    weight_loss:'',
    Peritonitis:false,
    Distal_metastasis:'',
    Other_SS:'',
    Duration_Initial_symptom:''
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
              <u>Asymptomatic</u><br/>
              <input type="checkbox" id="Stool_OB" name="Stool_OB" checked={localData.Stool_OB} onChange={handleInputChange}/>
              <label htmlFor="Stool_OB">Stool OB</label><br />
              <input type="checkbox" id="Colonoscocopy" name="Colonoscocopy" checked={localData.Colonoscocopy}  onChange={handleInputChange}/>
              <label htmlFor="Colonoscocopy">Colonoscocopy</label><br />
              <input type="checkbox" id="CEA" name="CEA" checked={localData.CEA} onChange={handleInputChange}/>
              <label htmlFor="CEA">CEA</label><br />
              <input type="checkbox" id="CT" name="CT" checked={localData.CT}  onChange={handleInputChange}/>
              <label htmlFor="CT">CT</label><br />
              <input type="checkbox" id="MRI" name="MRI" checked={localData.MRI}  onChange={handleInputChange}/>
              <label htmlFor="MRI">MRI</label><br />
              <input type="checkbox" id="PET" name="PET" checked={localData.PET}  onChange={handleInputChange}/>
              <label htmlFor="PET">PET</label><br /><br />

              <u>Blood passage from anv</u><br/>
              <input type="checkbox" id="Fresh_blood" name="Fresh_blood" checked={localData.Fresh_blood} onChange={handleInputChange}/>
              <label htmlFor="Fresh_blood">Fresh blood</label><br />
              <input type="checkbox" id="Bloody_stool" name="Bloody_stool" checked={localData.Bloody_stool} onChange={handleInputChange}/>
              <label htmlFor="Bloody_stool">Bloody stool</label><br />
              <input type="checkbox" id="Melanoma" name="Melanoma" checked={localData.Melanoma} onChange={handleInputChange}/>
              <label htmlFor="Melanoma">Melanoma</label><br />
            </td>
            
            <td valign="top">
              <u>Changing in bowel habit</u><br/>
              <input type="checkbox" id="Small_caliber_of_stool" name="Small_caliber_of_stool" checked={localData.Small_caliber_of_stool} onChange={handleInputChange}/>
              <label htmlFor="Small_caliber_of_stool">Small caliber of stool</label><br />
              <input type="checkbox" id="Tenesmus" name="Tenesmus" checked={localData.Tenesmus} onChange={handleInputChange}/>
              <label htmlFor="Tenesmus">Tenesmus</label><br />
              <input type="checkbox" id="Constipation" name="Constipation" checked={localData.Constipation} onChange={handleInputChange}/>
              <label htmlFor="Constipation">Constipation</label><br />
              <input type="checkbox" id="Diarrhea" name="Diarrhea" checked={localData.Diarrhea} onChange={handleInputChange}/>
              <label htmlFor="Diarrhea">Diarrhea</label><br />
              <input type="checkbox" id="Mucus_passage" name="Mucus_passage" checked={localData.Mucus_passage} onChange={handleInputChange}/>
              <label htmlFor="Mucus_passage">Mucus passage</label><br />
              <br/><br />

              <u>Abdomen discomfort</u><br/>
              <input type="checkbox" id="Abdomen_pain" name="Abdomen_pain" checked={localData.Abdomen_pain} onChange={handleInputChange}/>
              <label htmlFor="Abdomen_pain">Abdomen pain</label><br />
              <input type="checkbox" id="Abdomen_distention" name="Abdomen_distention" checked={localData.Abdomen_distention} onChange={handleInputChange}/>
              <label htmlFor="Abdomen_distention">Abdomen distention</label><br />
              <input type="checkbox" id="Abdomen_fullness" name="Abdomen_fullness" checked={localData.Abdomen_fullness} onChange={handleInputChange}/>
              <label htmlFor="Abdomen_fullness">Abdomen fullness</label><br />
              <input type="checkbox" id="Abdomen_mass" name="Abdomen_mass" checked={localData.Abdomen_mass} onChange={handleInputChange}/>
              <label htmlFor="Abdomen_mass">Abdomen mass</label><br />
            </td>

            <td valign="top">
              <u>Generalized condition change</u><br/>
              <input type="checkbox" id="Vomiting" name="Vomiting" checked={localData.Vomiting} onChange={handleInputChange}/>
              <label htmlFor="Vomiting">Vomiting</label><br />
              <input type="checkbox" id="Loss_appetite" name="Loss_appetite" checked={localData.Loss_appetite} onChange={handleInputChange}/>
              <label htmlFor="Loss_appetite">Loss appetite</label><br />
              <input type="checkbox" id="Anemia" name="Anemia" checked={localData.Anemia} onChange={handleInputChange}/>
              <label htmlFor="Anemia">Anemia</label><br /><br />
              Body weight loss : <input type="text" name="weight_loss" size="1" value={localData.weight_loss} onChange={handleInputChange}/> KG<br/>
              <br/>

              <input type="checkbox" id="Peritonitis" name="Peritonitis" checked={localData.Peritonitis} onChange={handleInputChange}/>
              <label htmlFor="Peritonitis">Peritonitis</label>
              <br/><br/>

              <u>Distal metastasis</u><br/>
              <textarea name="Distal_metastasis" cols="20" rows="3" value={localData.Distal_metastasis} onChange={handleInputChange}/>
              <br/><br/>

              <u>Other S/S</u><br/>
              <textarea name="Other_SS" cols="20" rows="3" value={localData.Other_SS} onChange={handleInputChange}/>

            </td>
          </tr>

          <tr>
            <td colspan="3" align="center">
              <u>Duration of Initial symptom : </u>
              <input type="text" name="Duration_Initial_symptom" value={localData.Duration_Initial_symptom} onChange={handleInputChange}/>
            </td>
          </tr>
        </table>
      </div>
    );
}
export default Initial_Symptoms;