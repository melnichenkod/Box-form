import React, {useState} from 'react'

export default function BoxForm() {
  const defFieldsState = {
    width: 0,
    height: 0,
    backgroundColor: ''
  }

  const [fields, setFields] = useState(defFieldsState);
  const [items, setItems] = useState([]);

  const fieldsKey = Object.keys(fields).map(key => <input type='text' name={key} key={key} value={fields[key]} onChange={(e) => updateFieldValue(e)}/>);

  const updateFieldValue = (e) => {
    let {name, value}= e.target;
    if (name === 'width' || name === 'height') {
      if (Number.isInteger(+value)){
        value = +value;
      } else {
        return
      }
    }
    setFields(fields => ({
      ...fields,
      [name]: value
    }))
  }
  const addBox = () => {
    setItems((items) => [{...fields}, ...items]);
    setFields(defFieldsState)
  }
  console.log(fields);

  return (
    <div>
      {fieldsKey}
      <button onClick={addBox}>Create</button>
      {items.map((item, i) => (
        <div key={i} style={item}></div>
      )
      )}
    </div>
  )
}
