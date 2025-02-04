import React, { useState, useEffect } from 'react';
const PET = ({ data, onDataUpdate }) => {
    const [localData, setLocalData] = useState({
        PETt_1:'', PETf_1:'', PETo_1:'',
        PETt_2:'', PETf_2:'', PETo_2:'',
        PETt_3:'', PETf_3:'', PETo_3:'',
        PETt_4:'', PETf_4:'', PETo_4:'',
        PETt_5:'', PETf_5:'', PETo_5:'',
        PETt_6:'', PETf_6:'', PETo_6:'',
        PETt_7:'', PETf_7:'', PETo_7:'',
        PETt_8:'', PETf_8:'', PETo_8:'',
        PETt_9:'', PETf_9:'', PETo_9:'',
        PETt_10:'', PETf_10:'', PETo_10:'',
    });

    useEffect(() => {
        if (data) {
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
        <div >
            <table className="third-table">
            <tr>
                <th style={{ width: '5%' }}>次數</th>
                <th style={{ width: '31%' }}>Time</th>
                <th style={{ width: '31%' }}>Fundings</th>
                <th style={{ width: '32%' }}>Other</th>
            </tr>
            <tr>
                <td>1</td>
                <td><input type="date" name="PETt_1" value={localData.PETt_1} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="PETf_1" value={localData.PETf_1} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="PETo_1" value={localData.PETo_1} onChange={handleChange}/></td>
            </tr>
            <tr>
                <td>2</td>
                <td><input type="date" name="PETt_2" value={localData.PETt_2} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="PETf_2" value={localData.PETf_2} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="PETo_2" value={localData.PETo_2} onChange={handleChange}/></td>
            </tr>
            <tr>
                <td>3</td>
                <td><input type="date" name="PETt_3" value={localData.PETt_3} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="PETf_3" value={localData.PETf_3} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="PETo_3" value={localData.PETo_3} onChange={handleChange}/></td>
            </tr>
            <tr>
                <td>4</td>
                <td><input type="date" name="PETt_4" value={localData.PETt_4} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="PETf_4" value={localData.PETf_4} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="PETo_4" value={localData.PETo_4} onChange={handleChange}/></td>
            </tr>
            <tr>
                <td>5</td>
                <td><input type="date" name="PETt_5" value={localData.PETt_5} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="PETf_5" value={localData.PETf_5} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="PETo_5" value={localData.PETo_5} onChange={handleChange}/></td>
            </tr>
            <tr>
                <td>6</td>
                <td><input type="date" name="PETt_6" value={localData.PETt_6} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="PETf_6" value={localData.PETf_6} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="PETo_6" value={localData.PETo_6} onChange={handleChange}/></td>
            </tr>
            <tr>
                <td>7</td>
                <td><input type="date" name="PETt_7" value={localData.PETt_7} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="PETf_7" value={localData.PETf_7} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="PETo_7" value={localData.PETo_7} onChange={handleChange}/></td>
            </tr>
            <tr>
                <td>8</td>
                <td><input type="date" name="PETt_8" value={localData.PETt_8} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="PETf_8" value={localData.PETf_8} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="PETo_8" value={localData.PETo_8} onChange={handleChange}/></td>
            </tr>
            <tr>
                <td>9</td>
                <td><input type="date" name="PETt_9" value={localData.PETt_9} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="PETf_9" value={localData.PETf_9} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="PETo_9" value={localData.PETo_9} onChange={handleChange}/></td>
            </tr>
            <tr>
                <td>10</td>
                <td><input type="date" name="PETt_10" value={localData.PETt_10} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="PETf_10"  value={localData.PETf_10}onChange={handleChange}/></td>
                <td><input type="text" size="8" name="PETo_10" value={localData.PETo_10} onChange={handleChange}/></td>
            </tr>
            </table>
        </div>
    );
}
export default PET;