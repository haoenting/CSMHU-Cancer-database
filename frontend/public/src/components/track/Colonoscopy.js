import React, { useState, useEffect } from 'react';
const Colonoscopy = ({ data, onDataUpdate }) => {
    const [localData, setLocalData] = useState({
        ACt_1:'', ACF_1:'', ACPn_1:'', ACPs_1:'', ACo_1:'',
        ACt_2:'', ACF_2:'', ACPn_2:'', ACPs_2:'', ACo_2:'',
        ACt_3:'', ACF_3:'', ACPn_3:'', ACPs_3:'', ACo_3:'',
        ACt_4:'', ACF_4:'', ACPn_4:'', ACPs_4:'', ACo_4:'',
        ACt_5:'', ACF_5:'', ACPn_5:'', ACPs_5:'', ACo_5:'',
        ACt_6:'', ACF_6:'', ACPn_6:'', ACPs_6:'', ACo_6:'',
        ACt_7:'', ACF_7:'', ACPn_7:'', ACPs_7:'', ACo_7:'',
        ACt_8:'', ACF_8:'', ACPn_8:'', ACPs_8:'', ACo_8:'',
        ACt_9:'', ACF_9:'', ACPn_9:'', ACPs_9:'', ACo_9:'',
        ACt_10:'', ACF_10:'', ACPn_10:'', ACPs_10:'', ACo_10:'',
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
    <div>
        <table className="third-table">
            <tr>
                <th style={{ width: '5%' }}>次數</th>
                <th style={{ width: '19%' }}>Time</th>
                <th style={{ width: '19%' }}>Fundings</th>
                <th style={{ width: '19%' }}>Polyp number</th>
                <th style={{ width: '19%' }}>Polyp side</th>
                <th style={{ width: '19%' }}>Other</th>
            </tr>
            <tr>
                <td>1</td>
                <td><input type="date" name="ACt_1" value={localData.ACt_1} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="ACF_1" value={localData.ACF_1} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="ACPn_1" value={localData.ACPn_1} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="ACPs_1" value={localData.ACPs_1} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="ACo_1" value={localData.ACo_1} onChange={handleChange}/></td>
            </tr>
            <tr>
                <td>2</td>
                <td><input type="date" name="ACt_2" value={localData.ACt_2} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="ACF_2" value={localData.ACF_2} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="ACPn_2" value={localData.ACPn_2} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="ACPs_2" value={localData.ACPs_2} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="ACo_2" value={localData.ACo_2} onChange={handleChange}/></td>
            </tr>
            <tr>
                <td>3</td>
                <td><input type="date" name="ACt_3"  value={localData.ACt_3} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="ACF_3" value={localData.ACF_3} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="ACPn_3" value={localData.ACPn_3} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="ACPs_3" value={localData.ACPs_3} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="ACo_3" value={localData.ACo_3} onChange={handleChange}/></td>
            </tr>
            <tr>
                <td>4</td>
                <td><input type="date" name="ACt_4" value={localData.ACt_4} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="ACF_4" value={localData.ACF_4} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="ACPn_4" value={localData.ACPn_4} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="ACPs_4" value={localData.ACPs_4} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="ACo_4" value={localData.ACo_4} onChange={handleChange}/></td>
            </tr>
            <tr>
                <td>5</td>
                <td><input type="date" name="ACt_5" value={localData.ACt_5} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="ACF_5" value={localData.ACF_5} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="ACPn_5" value={localData.ACPn_5} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="ACPs_5" value={localData.ACPs_5} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="ACo_5" value={localData.ACo_5} onChange={handleChange}/></td>
            </tr>
            <tr>
                <td>6</td>
                <td><input type="date" name="ACt_6" value={localData.ACt_6} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="ACF_6" value={localData.ACF_6} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="ACPn_6" value={localData.ACPn_6} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="ACPs_6" value={localData.ACPs_6} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="ACo_6" value={localData.ACo_6} onChange={handleChange}/></td>
            </tr>
            <tr>
                <td>7</td>
                <td><input type="date" name="ACt_7" value={localData.ACt_7} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="ACF_7" value={localData.ACF_7} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="ACPn_7" value={localData.ACPn_7} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="ACPs_7" value={localData.ACPs_7} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="ACo_7" value={localData.ACo_7} onChange={handleChange}/></td>
            </tr>
            <tr>
                <td>8</td>
                <td><input type="date" name="ACt_8" value={localData.ACt_8} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="ACF_8" value={localData.ACF_8} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="ACPn_8" value={localData.ACPn_8} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="ACPs_8" value={localData.ACPs_8} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="ACo_8" value={localData.ACo_8} onChange={handleChange}/></td>
            </tr>
            <tr>
                <td>9</td>
                <td><input type="date" name="ACt_9" value={localData.ACt_9} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="ACF_9" value={localData.ACF_9} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="ACPn_9" value={localData.ACPn_9} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="ACPs_9" value={localData.ACPs_9} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="ACo_9" value={localData.ACo_9} onChange={handleChange}/></td>
            </tr>
            <tr>
                <td>10</td>
                <td><input type="date" name="ACt_10" value={localData.ACt_10} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="ACF_10" value={localData.ACF_10} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="ACPn_10" value={localData.ACPn_10} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="ACPs_10" value={localData.ACPs_10} onChange={handleChange}/></td>
                <td><input type="text" size="8" name="ACo_10" value={localData.ACo_10} onChange={handleChange}/></td>
            </tr>
        </table>
    </div>
    );
}
export default Colonoscopy;