import React, {useState} from "react";

const initialState = {
  editMode: false
}

export const ProfileStatus = (props) => {
  const [localState, setLocalState] = useState(initialState)

  const toggleMode = () => {
    setLocalState({
      editMode: !localState.editMode
    })
  }

  return (
    <div>
      {!localState.editMode &&
        <div>
          <span onDoubleClick={toggleMode}>
            {props.status}
          </span>
        </div>
      }

      {localState.editMode &&
        <div>
          <input autoFocus={true} type="text" value={props.status} onBlur={toggleMode}/>
        </div>
      }
    </div>
  )
}