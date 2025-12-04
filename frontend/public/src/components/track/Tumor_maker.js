import React, { useState, useEffect } from 'react';
const Tumor_maker= ({ data, onDataUpdate }) => {
    const [localData, setLocalData] = useState({
        Td_1:'', TC_1:'', T125_1:'', T199_1:'', To_1:'',
        Td_2:'', TC_2:'', T125_2:'', T199_2:'', To_2:'',
        Td_3:'', TC_3:'', T125_3:'', T199_3:'', To_3:'',
        Td_4:'', TC_4:'', T125_4:'', T199_4:'', To_4:'',
        Td_5:'', TC_5:'', T125_5:'', T199_5:'', To_5:'',
        Td_6:'', TC_6:'', T125_6:'', T199_6:'', To_6:'',
        Td_7:'', TC_7:'', T125_7:'', T199_7:'', To_7:'',
        Td_8:'', TC_8:'', T125_8:'', T199_8:'', To_8:'',
        Td_9:'', TC_9:'', T125_9:'', T199_9:'', To_9:'',
        Td_10:'', TC_10:'', T125_10:'', T199_10:'', To_10:'',
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
                    <th style={{ width: '19%' }}>Time</th>
                    <th style={{ width: '19%' }}>CEA</th>
                    <th style={{ width: '19%' }}>CA-125</th>
                    <th style={{ width: '19%' }}>CA-199</th>
                    <th style={{ width: '19%' }}>Others</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td><input type="date" name="Td_1" value={localData.Td_1} onChange={handleChange}/></td>
                    <td><input type="text" size="8" name="TC_1" value={localData.TC_1} onChange={handleChange}/></td>
                    <td><input type="text" size="8" name="T125_1" value={localData.T125_1} onChange={handleChange}/></td>
                    <td><input type="text" size="8" name="T199_1" value={localData.T199_1} onChange={handleChange}/></td>
                    <td><input type="text" size="8" name="To_1" value={localData.To_1} onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td><input type="date" name="Td_2" value={localData.Td_2} onChange={handleChange}/></td>
                    <td><input type="text" size="8" name="TC_2" value={localData.TC_2} onChange={handleChange}/></td>
                    <td><input type="text" size="8" name="T125_2" value={localData.T125_2} onChange={handleChange}/></td>
                    <td><input type="text" size="8" name="T199_2" value={localData.T199_2} onChange={handleChange}/></td>
                    <td><input type="text" size="8" name="To_2"value={localData.To_2}  onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td><input type="date" name="Td_3" value={localData.Td_3} onChange={handleChange}/></td>
                    <td><input type="text" size="8" name="TC_3" value={localData.TC_3} onChange={handleChange}/></td>
                    <td><input type="text" size="8" name="T125_3" value={localData.T125_3} onChange={handleChange}/></td>
                    <td><input type="text" size="8" name="T199_3"value={localData.T199_3}  onChange={handleChange}/></td>
                    <td><input type="text" size="8" name="To_3"value={localData.To_3}  onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td><input type="date" name="Td_4" value={localData.Td_4} onChange={handleChange}/></td>
                    <td><input type="text" size="8" name="TC_4"value={localData.TC_4}  onChange={handleChange}/></td>
                    <td><input type="text" size="8" name="T125_4"value={localData.T125_4}  onChange={handleChange}/></td>
                    <td><input type="text" size="8" name="T199_4" value={localData.T199_4} onChange={handleChange}/></td>
                    <td><input type="text" size="8" name="To_4" value={localData.To_4} onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td><input type="date" name="Td_5" value={localData.Td_5} onChange={handleChange}/></td>
                    <td><input type="text" size="8" name="TC_5"value={localData.TC_5}  onChange={handleChange}/></td>
                    <td><input type="text" size="8" name="T125_5"value={localData.T125_5}  onChange={handleChange}/></td>
                    <td><input type="text" size="8" name="T199_5"value={localData.T199_5}  onChange={handleChange}/></td>
                    <td><input type="text" size="8" name="To_5" value={localData.To_5} onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td>6</td>
                    <td><input type="date" name="Td_6"  value={localData.Td_6} onChange={handleChange}/></td>
                    <td><input type="text" size="8" name="TC_6"  value={localData.TC_6} onChange={handleChange}/></td>
                    <td><input type="text" size="8" name="T125_6"  value={localData.T125_6} onChange={handleChange}/></td>
                    <td><input type="text" size="8" name="T199_6"  value={localData.T199_6} onChange={handleChange}/></td>
                    <td><input type="text" size="8" name="To_6"  value={localData.To_6} onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td>7</td>
                    <td><input type="date" name="Td_7"  value={localData.Td_7} onChange={handleChange}/></td>
                    <td><input type="text" size="8" name="TC_7"  value={localData.TC_7} onChange={handleChange}/></td>
                    <td><input type="text" size="8" name="T125_7"  value={localData.T125_7} onChange={handleChange}/></td>
                    <td><input type="text" size="8" name="T199_7" value={localData.T199_7} onChange={handleChange}/></td>
                    <td><input type="text" size="8" name="To_7" value={localData.To_7} onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td>8</td>
                    <td><input type="date" name="Td_8" value={localData.Td_8} onChange={handleChange}/></td>
                    <td><input type="text" size="8" name="TC_8" value={localData.TC_8} onChange={handleChange}/></td>
                    <td><input type="text" size="8" name="T125_8" value={localData.T125_8} onChange={handleChange}/></td>
                    <td><input type="text" size="8" name="T199_8" value={localData.T199_8} onChange={handleChange}/></td>
                    <td><input type="text" size="8" name="To_8" value={localData.To_8} onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td>9</td>
                    <td><input type="date" name="Td_9" value={localData.Td_9} onChange={handleChange}/></td>
                    <td><input type="text" size="8" name="TC_9" value={localData.TC_9} onChange={handleChange}/></td>
                    <td><input type="text" size="8" name="T125_9" value={localData.T125_9} onChange={handleChange}/></td>
                    <td><input type="text" size="8" name="T199_9" value={localData.T199_9} onChange={handleChange}/></td>
                    <td><input type="text" size="8" name="To_9" value={localData.To_9} onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td>10</td>
                    <td><input type="date" name="Td_10" value={localData.Td_10} onChange={handleChange}/></td>
                    <td><input type="text" size="8" name="TC_10" value={localData.TC_10} onChange={handleChange}/></td>
                    <td><input type="text" size="8" name="T125_10" value={localData.T125_10} onChange={handleChange}/></td>
                    <td><input type="text" size="8" name="T199_10" value={localData.T199_10} onChange={handleChange}/></td>
                    <td><input type="text" size="8" name="To_10" value={localData.To_10} onChange={handleChange}/></td>
                </tr>
            </table>
        </div>
    );
}
export default Tumor_maker;