import React, {useEffect, useState} from "react";

const initialState = {
  editMode: false,
  status: ''
}

export const ProfileStatus = (props) => {
  const [localState, setLocalState] = useState(initialState)

  useEffect(() => {
    setLocalState({
      status: props.status
    })
  }, [props.status])

  const toggleMode = () => {
    setLocalState({
      editMode: !localState.editMode
    })
  }

  const editStatusText = (e) => {
    setLocalState({
      status: e.target.value
    })
  }

  return (
    <div>
      {!localState.editMode &&
        <div>
          <span onDoubleClick={toggleMode}>
            {props.status || 'Статус отсутствует'}
          </span>
        </div>
      }

      {localState.editMode &&
        <div>
          <input autoFocus={true} type="text" value={localState.status} onBlur={toggleMode} onChange={editStatusText}/>
        </div>
      }
    </div>
  )
}