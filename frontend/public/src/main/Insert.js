// src/pages/Insert.js
import React,  { useEffect, useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import {
Basic_information,
Past_History,
Initial_Symptoms,
Preoperative_Assessment,
Preoperative_Treatment,
CCRT,
Surgery,
Postoperative_Condition,
Pathology,
Tracking
} from '../components';
const FormPage = ({mode}) => {
  // 顯示&換顏色
  const [currentDiv, setCurrentDiv] = useState('div1');
  const [tabColors, setTabColors] = useState({
    div1: 'grey',
    div2: 'none',
    div3: 'none',
    div4: 'none',
    div5: 'none',
    div6: 'none',
    div7: 'none',
    div8: 'none',
    div9: 'none',
    div10: 'none'
  });
  const handleTabClick = (divId) => {
    setCurrentDiv(divId);
    setTabColors(prevColors => ({
      [divId]: prevColors[divId] === 'grey' ? 'none' : 'grey'
    }));
  };

  const username = Cookies.get('username');

  // 初始化資料
  const [formData, setFormData] = useState({
    basicInfo: {},
    pastHistory: {},
    initialSymptoms: {},
    preoperativeAssessment: {},
    preoperativeTreatment: {},
    ccrt: {},
    surgery: {},
    postoperativeCondition: {},
    pathology: {},
    tracking: {
      Chemotherapy: {},
      Adjuvant_Radiotherapy: {},
      Tumor_maker: {},
      Colonoscopy: {},
      PET: {},
    },
  });

  // 如果是修資料
  const location = useLocation();
  const { recordData } = location.state || {};
  useEffect(() => {
    if (mode === 'modify' ) {
      // alert(JSON.stringify(formData.tracking)); 
      setFormData({
        basicInfo: recordData.basicInfo || {},
        pastHistory: recordData.pastHistory || {},
        initialSymptoms: recordData.initialSymptoms || {},
        preoperativeAssessment: recordData.preoperativeAssessment || {},
        preoperativeTreatment: recordData.preoperativeTreatment || {},
        ccrt: recordData.ccrt || {},
        surgery: recordData.surgery || {},
        postoperativeCondition: recordData.postoperativeCondition || {},
        pathology: recordData.pathology || {},
        tracking: recordData.tracking || {},
      });
    }
  }, [mode, recordData]);

  // 合併資料
  const handleDataUpdate = (section, data) => {
    setFormData(prevData => ({
      ...prevData,
      [section]: data,
    }));
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    try {
      if (mode === 'insert') {
        await axios.post('/api/insert', { ...formData, username });
        alert('資料新增成功!');
      } 
      else if (mode === 'modify') {
        await axios.put(`/api/modify`, { ...formData, username});
      }
        navigate('/Catalog');
    } 
    catch (error) {
      alert(JSON.stringify(error.response.data)); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <input type="submit" value="儲存紀錄" />
          <p style={{ paddingRight: '20px', margin: 0 }}>Chart : {formData.basicInfo['Chart']}</p>
      </div>


      <table className="main-table">
        <tr>
            <th onClick={() => handleTabClick('div1')} style={{ cursor: 'pointer', backgroundColor: tabColors['div1'] }}>基本資料</th>
            <th onClick={() => handleTabClick('div2')} style={{ cursor: 'pointer', backgroundColor: tabColors['div2'] }}>過去病史</th>
            <th onClick={() => handleTabClick('div3')} style={{ cursor: 'pointer', backgroundColor: tabColors['div3'] }}>初始症狀</th>
            <th onClick={() => handleTabClick('div4')} style={{ cursor: 'pointer', backgroundColor: tabColors['div4'] }}>術前評估</th>
            <th onClick={() => handleTabClick('div5')} style={{ cursor: 'pointer', backgroundColor: tabColors['div5'] }}>術前處置</th>
            <th onClick={() => handleTabClick('div6')} style={{ cursor: 'pointer', backgroundColor: tabColors['div6'] }}>CCRT</th>
            <th onClick={() => handleTabClick('div7')} style={{ cursor: 'pointer', backgroundColor: tabColors['div7'] }}>手術</th>
            <th onClick={() => handleTabClick('div8')} style={{ cursor: 'pointer', backgroundColor: tabColors['div8'] }}>術後狀況</th>
            <th onClick={() => handleTabClick('div9')} style={{ cursor: 'pointer', backgroundColor: tabColors['div9'] }}>病理</th>
            <th onClick={() => handleTabClick('div10')} style={{ cursor: 'pointer', backgroundColor: tabColors['div10'] }}>追加追蹤</th>
        </tr>

        <tr>
        <td colSpan="10">
            <div id="div1" style={{ display: currentDiv === 'div1' ? 'block' : 'none' }}>
              <Basic_information 
                data={formData.basicInfo}
                onDataUpdate={(data) => handleDataUpdate('basicInfo', data)} />
            </div>
            <div id="div2" style={{ display: currentDiv === 'div2' ? 'block' : 'none' }}>
              <Past_History 
                data={formData.pastHistory}
                onDataUpdate={(data) => handleDataUpdate('pastHistory', data)} />
            </div>
            <div id="div3" style={{ display: currentDiv === 'div3' ? 'block' : 'none' }}>
              <Initial_Symptoms 
                data={formData.initialSymptoms}
                onDataUpdate={(data) => handleDataUpdate('initialSymptoms', data)} />
            </div>
            <div id="div4" style={{ display: currentDiv === 'div4' ? 'block' : 'none' }}>
              <Preoperative_Assessment 
                data={formData.preoperativeAssessment}
                onDataUpdate={(data) => handleDataUpdate('preoperativeAssessment', data)} />
            </div>
            <div id="div5" style={{ display: currentDiv === 'div5' ? 'block' : 'none' }}>
              <Preoperative_Treatment 
                data={formData.preoperativeTreatment}
                onDataUpdate={(data) => handleDataUpdate('preoperativeTreatment', data)} />
            </div>
            <div id="div6" style={{ display: currentDiv === 'div6' ? 'block' : 'none' }}>
              <CCRT 
                data={formData.ccrt}
                onDataUpdate={(data) => handleDataUpdate('ccrt', data)} />
            </div>
            <div id="div7" style={{ display: currentDiv === 'div7' ? 'block' : 'none' }}>
                <Surgery 
                  data={formData.surgery}
                  onDataUpdate={(data) => handleDataUpdate('surgery', data)} />
            </div>
            <div id="div8" style={{ display: currentDiv === 'div8' ? 'block' : 'none' }}>
              <Postoperative_Condition 
                data={formData.postoperativeCondition}
                onDataUpdate={(data) => handleDataUpdate('postoperativeCondition', data)} />
            </div>
            <div id="div9" style={{ display: currentDiv === 'div9' ? 'block' : 'none' }}>
                <Pathology 
                  data={formData.pathology}
                  onDataUpdate={(data) => handleDataUpdate('pathology', data)} />
            </div>
            <div id="div10" style={{ display: currentDiv === 'div10' ? 'block' : 'none' }}>
                <Tracking 
                  data={formData.tracking}
                  onDataUpdate={(data) => handleDataUpdate('tracking', data)} />
            </div>
          </td>
        </tr>
       
        
      </table>
    </form>
  );
};

export default FormPage;
