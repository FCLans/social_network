import React, {useEffect, useState} from "react";

const initialState = {
  editMode: false,
  status: ''
}

export const ProfileStatus = (props) => {
  const [localState, setLocalState] = useState(initialState)

  useEffect(() => {
    setLocalState({
      ...localState,
      status: props.status
    })
  }, [props.status])

  const toggleMode = () => {
    setLocalState({
      ...localState,
      editMode: !localState.editMode
    })
     if (localState.status !== props.status) {
       props.updateUserStatus(localState.status)
     }
  }

  const editStatusText = (e) => {
    setLocalState({
      ...localState,
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