import React, { useState, useEffect } from 'react';
const Adjuvant_Radiotherapy = ({ data, onDataUpdate }) => {
    const [localData, setLocalData] = useState({
        s_1:'', e_1:'', d_1:'',
        s_2:'', e_2:'', d_2:'',
        s_3:'', e_3:'', d_3:'',
        s_4:'', e_4:'', d_4:'',
        s_5:'', e_5:'', d_5:'',
        s_6:'', e_6:'', d_6:'',
        s_7:'', e_7:'', d_7:'',
        s_8:'', e_8:'', d_8:'',
        s_9:'', e_9:'', d_9:'',
        s_10:'', e_10:'', d_10:'',
    });

    useEffect(() => {
        if (data) {
            // alert(JSON.stringify(data)); 
            setLocalData(data);
        }
    }, [data]);
    
    const handleChange = (event) => {
    const { name, value } = event.target;
    setLocalData(prevState => {
        const updatedData = {
            ...prevState,
            [name]: value
        };
        onDataUpdate(updatedData);// 將更新後的資料傳遞給父組件
        return updatedData;
        });
    };
    
    return(
        <div>
            <table className="third-table">
                <tr>
                    <th style={{ width: '5%' }}>次數</th>
                    <th style={{ width: '30%' }}>Start time</th>
                    <th style={{ width: '30%' }}>End time</th>
                    <th style={{ width: '35%' }}>Dose</th>
                </tr>

                <tr>
                    <td>1</td>
                    <td><input type="date" name="s_1" value={localData.s_1} onChange={handleChange}/></td>
                    <td><input type="date" name="e_1" value={localData.e_1} onChange={handleChange}/></td>
                    <td><input type="text" size="5" name="d_1" value={localData.d_1} onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td><input type="date" name="s_2" value={localData.s_2} onChange={handleChange}/></td>
                    <td><input type="date" name="e_2" value={localData.e_2} onChange={handleChange}/></td>
                    <td><input type="text" size="5" name="d_2" value={localData.d_2} onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td><input type="date" name="s_3" value={localData.s_3} onChange={handleChange}/></td>
                    <td><input type="date" name="e_3" value={localData.e_3} onChange={handleChange}/></td>
                    <td><input type="text" size="5" name="d_3" value={localData.d_3} onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td><input type="date" name="s_4" value={localData.s_4} onChange={handleChange}/></td>
                    <td><input type="date" name="e_4" value={localData.e_4} onChange={handleChange}/></td>
                    <td><input type="text" size="5" name="d_4" value={localData.d_4} onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td><input type="date" name="s_5" value={localData.s_5} onChange={handleChange}/></td>
                    <td><input type="date" name="e_5" value={localData.e_5} onChange={handleChange}/></td>
                    <td><input type="text" size="5" name="d_5" value={localData.d_5} onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td>6</td>
                    <td><input type="date" name="s_6" value={localData.s_6} onChange={handleChange}/></td>
                    <td><input type="date" name="e_6" value={localData.e_6} onChange={handleChange}/></td>
                    <td><input type="text" size="5" name="d_6" value={localData.d_6} onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td>7</td>
                    <td><input type="date" name="s_7" value={localData.s_7} onChange={handleChange}/></td>
                    <td><input type="date" name="e_7" value={localData.e_7} onChange={handleChange}/></td>
                    <td><input type="text" size="5" name="d_7"  value={localData.d_7} onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td>8</td>
                    <td><input type="date" name="s_8" value={localData.s_8} onChange={handleChange}/></td>
                    <td><input type="date" name="e_8" value={localData.e_8} onChange={handleChange}/></td>
                    <td><input type="text" size="5" name="d_8"  value={localData.d_8} onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td>9</td>
                    <td><input type="date" name="s_9" value={localData.s_9} onChange={handleChange}/></td>
                    <td><input type="date" name="e_9" value={localData.e_9} onChange={handleChange}/></td>
                    <td><input type="text" size="5" name="d_9" value={localData.d_9} onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td>10</td>
                    <td><input type="date" name="s_10" value={localData.s_10} onChange={handleChange} /></td>
                    <td><input type="date" name="e_10" value={localData.e_10} onChange={handleChange}/></td>
                    <td><input type="text" size="5" name="d_10" value={localData.d_10} onChange={handleChange}/></td>
                </tr>
            </table>
        </div>
    );
}
export default Adjuvant_Radiotherapy;