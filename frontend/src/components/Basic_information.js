import React, { useState, useEffect } from 'react';
const Basic_information = ({ data, onDataUpdate }) => {
    const [localData, setLocalData] = useState({
        Chart: '',
        ID: '',
        Name: '',
        Birthday: '',
        Gender: '',
        Native: '',
        Dx: '',
        Visiting_staff: '',
        Operator: '',
        Source: '',
        HNPCC: false,
        FAP: false,
        Date_of_initial_diagnosis: '',
        Metastases: false,
        Date_of_metastases_noted: '',
        Time_of_last_follow: '',
        Date_of_mortality: '',
        Survival_time: '',
        DT_summary: ''
    });

    useEffect(() => {
        if (data) {
          setLocalData(data);
        }
      }, [data]);

    // 將更新後的資料傳遞給父組件
    const handleInputChange = (event) => {
        const { name, type, checked, value } = event.target;

        const newValue = type === 'checkbox' ? checked : value;
        const regex = /^[A-Za-z0-9]*$/; // 只允許英文和數字
        if(name === 'Chart' || name === 'ID'){
            if (!regex.test(newValue)) {
                return; // 如果不符合條件，則不更新狀態
            }
        }   

        setLocalData(prevState => {
            const updatedData = {
                ...prevState,
                [name]: newValue
            };
            onDataUpdate(updatedData); // 将更新后的数据传递给父组件
            return updatedData;
        });
    };
      

    return (
        <div>
            <table className="second-table">
                <tr>
                    <td valign="top">
                        <div className="container">
                            <span>Chart No :</span>
                            <input 
                                type="text" 
                                size="12" 
                                name="Chart" 
                                autoComplete="off" 
                                required
                                maxLength={13}
                                value={localData.Chart}
                                onChange={handleInputChange}/>
                        </div>

                        <div className="container">
                            <span>ID No :</span>
                            <input 
                                type="text" 
                                size="12" 
                                name="ID"
                                value={localData.ID}
                                maxLength={13}
                                onChange={handleInputChange}/>
                        </div>

                        <div className="container">
                            <span>Name :</span>
                            <input 
                                type="text" 
                                size="12" 
                                name="Name"
                                maxLength={10}
                                value={localData.Name}
                                onChange={handleInputChange} />
                        </div>

                        <div className="container">
                            <span>Birthday :</span>
                            <input 
                                type="date" 
                                name="Birthday" 
                                value={localData.Birthday}
                                onChange={handleInputChange}/>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ marginRight: '10px' }}>Gender :</span>
                            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                                <input 
                                    type="radio" 
                                    name="Gender" 
                                    value="Male" 
                                    id="male" 
                                    checked={localData.Gender === 'Male'}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="male" style={{ marginRight: '5px' }}>Male</label>
                            </div>
                            <div style={{ marginLeft: '10px', display: 'flex', alignItems: 'center' }}>
                                <input 
                                    type="radio" 
                                    name="Gender" 
                                    value="Female" 
                                    id="female" 
                                    checked={localData.Gender === 'Female'}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="female" style={{ marginRight: '5px' }}>Female</label>
                            </div>
                        </div><br/>


                        <div className="container">
                            <span>Native :</span>
                            <input 
                                list="city" 
                                name="Native" 
                                type="text" 
                                size="15" 
                                value={localData.Native}
                                onChange={handleInputChange}
                            />
                            <datalist id="city">
                                <option value="Taiwan" />
                                <option value="PRC" />
                                <option value="Hakka" />
                                <option value="Original" />
                                <option value="Aboriginal" />
                            </datalist>
                        </div>
                    </td>

                    <td valign="top">
                        <div className="container">
                            <span>Dx :</span>
                            <input 
                                list="Dx" 
                                name="Dx" 
                                type="text" 
                                size="10" 
                                value={localData.Dx}
                                onChange={handleInputChange}
                            />
                            <datalist id="Dx">
                                <option value="Appendix">Appendix</option>
                                <option value="Cecum">Cecum</option>
                                <option value="A-colon">A-colon</option>
                                <option value="Hepatic flexure">Hepatic flexure</option>
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
                            </datalist>
                        </div>

                        <div className="container">
                            <span>Visiting staff : </span>
                            <input 
                                type="text" 
                                name="Visiting_staff" 
                                size="10"  
                                value={localData.Visiting_staff}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="container">
                            <span>Operator : </span>
                            <input 
                                type="text" 
                                name="Operator" 
                                size="10"  
                                value={localData.Operator}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="container">
                            <span>Source :</span>
                            <input 
                                list="Source" 
                                name="Source" 
                                type="text" 
                                size="10" 
                                autoComplete="off" 
                                value={localData.Source}
                                onChange={handleInputChange}
                            />
                            <datalist id="Source">
                                <option value="OPD" />
                                <option value="Other hospital" />
                                <option value="Conclusion" />
                                <option value="ER" />
                            </datalist>
                        </div>


                        <input 
                            type="checkbox" 
                            id="HNPCC" 
                            name="HNPCC" 
                            checked={localData.HNPCC} 
                            onChange={handleInputChange}
                        />
                        <label htmlFor="HNPCC">HNPCC</label><br />

                        <input 
                            type="checkbox" 
                            id="FAP" 
                            name="FAP" 
                            checked={localData.FAP}  
                            onChange={handleInputChange}
                        />
                        <label htmlFor="FAP">FAP</label><br />
                    </td>

                    <td valign="top">
                        <div className="container">
                            <span>Date of initial diagnosis : </span>
                            <input
                                type="date"
                                id="Date_of_initial_diagnosis"
                                name="Date_of_initial_diagnosis"
                                value={localData.Date_of_initial_diagnosis}
                                onChange={handleInputChange}
                            />
                        </div>
                        <input 
                            type="checkbox" 
                            id="Metastases" 
                            name="Metastases" 
                            checked={localData.Metastases} 
                            onChange={handleInputChange}
                        />
                        <label htmlFor="Metastases">Metastases</label><br /><br />

                        <div className="container">
                            <span>Date of metastases noted :</span>
                            <input
                                type="date"
                                id="Date_of_metastases_noted"
                                name="Date_of_metastases_noted"
                                value={localData.Date_of_metastases_noted}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="container">
                            <span>Time of last follow-up :</span>
                            <input
                                type="date"
                                id="Time_of_last_follow"
                                name="Time_of_last_follow"
                                value={localData.Time_of_last_follow}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="container">
                            <span>Date of mortality :</span>
                            <input
                                type="date"
                                id="Date_of_mortality"
                                name="Date_of_mortality"
                                value={localData.Date_of_mortality}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="container">
                            <span>Survival time (M) :</span>
                            <input
                                type="text"
                                id="Survival_time"
                                name="Survival_time"
                                size="10"
                                value={localData.Survival_time}
                                onChange={handleInputChange}
                            />
                        </div>
                    </td>
                </tr>

                <tr>
                    <td colSpan="3" style={{ textAlign: 'center' }}>
                        <span>Dx/Tx summary : </span>
                        <textarea 
                            name="DT_summary" 
                            cols="60" rows="8" 
                            style={{ verticalAlign: 'middle' }} 
                            value={localData.DT_summary}
                            onChange={handleInputChange}
                        />
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default Basic_information;
