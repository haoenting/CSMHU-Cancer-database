import React, { useState, useEffect } from 'react';
import{
    Chemotherapy,
    Adjuvant_Radiotherapy,
    Tumor_maker,
    Colonoscopy,
    PET
} from './track';


const Tracking = ({data, onDataUpdate }) => {
    const [currentDiv, setCurrentDiv] = useState('TH1');
    const [tabColors, setTabColors] = useState({
        TH1: 'grey',
        TH2: 'none',
        TH3: 'none',
        TH4: 'none',
        TH5: 'none',
    });
  
    const handleTabClick = (divId) => {
      setCurrentDiv(divId); 
      setTabColors(prevColors => ({
        [divId]: prevColors[divId] === 'grey' ? 'none' : 'grey'
      }));
    };

    // 初始化資料
    const [trackingData, setTrackingData] = useState({
        Chemotherapy: {},
        Adjuvant_Radiotherapy: {},
        Tumor_maker: {},
        Colonoscopy: {},
        PET: {},
    });
    
    // 如果是修資料
    useEffect(() => {
        if (data) {
            // alert(JSON.stringify(data.Adjuvant_Radiotherapy));
            setTrackingData({
                Chemotherapy: data.Chemotherapy|| {},
                Adjuvant_Radiotherapy: data.Adjuvant_Radiotherapy|| {},
                Tumor_maker: data.Tumor_maker|| {},
                Colonoscopy: data.Colonoscopy|| {},
                PET: data.PET|| {},
            });
        }
    }, [data]);

    const handleDataUpdate = (section, newData) => {
        const updatedTrackingData = {
            ...trackingData,
            [section]: newData,
        };
        setTrackingData(updatedTrackingData);
        onDataUpdate(updatedTrackingData);  // 傳回更新後的數據
        
    };

    return(
        <div >
            <table className='third-table'>
                <tr>
                    <th onClick={() => handleTabClick('TH1')} style={{ cursor: 'pointer', backgroundColor: tabColors['TH1'] }}>Chemotherapy (adjavent)</th>
                    <th onClick={() => handleTabClick('TH2')} style={{ cursor: 'pointer', backgroundColor: tabColors['TH2'] }}>Adjavent radiotherapy</th>
                    <th onClick={() => handleTabClick('TH3')} style={{ cursor: 'pointer', backgroundColor: tabColors['TH3'] }}>Tumor marker</th>
                    <th onClick={() => handleTabClick('TH4')} style={{ cursor: 'pointer', backgroundColor: tabColors['TH4'] }}>Colonoscopy</th>
                    <th onClick={() => handleTabClick('TH5')} style={{ cursor: 'pointer', backgroundColor: tabColors['TH5'] }}>PET</th>
                </tr>
                <tr>
                    <td colspan="5">
                        <div id="TH1" style={{ display: currentDiv === 'TH1' ? 'block' : 'none' }}>
                            <Chemotherapy  data={trackingData.Chemotherapy}
                            onDataUpdate={(data) => handleDataUpdate('Chemotherapy', data)} /> 
                        </div>
                        <div id="TH2" style={{ display: currentDiv === 'TH2' ? 'block' : 'none' }}>
                            <Adjuvant_Radiotherapy  data={trackingData.Adjuvant_Radiotherapy}
                            onDataUpdate={(data) => handleDataUpdate('Adjuvant_Radiotherapy', data)} /> 
                        </div>
                        <div id="TH3" style={{ display: currentDiv === 'TH3' ? 'block' : 'none' }}>
                            <Tumor_maker  data={trackingData.Tumor_maker}
                            onDataUpdate={(data) => handleDataUpdate('Tumor_maker', data)} /> 
                        </div>
                        <div id="TH4" style={{ display: currentDiv === 'TH4' ? 'block' : 'none' }}>
                            <Colonoscopy  data={trackingData.Colonoscopy}
                            onDataUpdate={(data) => handleDataUpdate('Colonoscopy', data)} /> 
                        </div>
                        <div id="TH5" style={{ display: currentDiv === 'TH5' ? 'block' : 'none' }}>
                            <PET  data={trackingData.PET}
                            onDataUpdate={(data) => handleDataUpdate('PET', data)} /> 
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default Tracking;
