import React from "react";
import {reduxForm, Field} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLength} from "../../../utils/validators";

const maxLength40 = maxLength(40)

const NewMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div><Field component={Textarea} placeholder='Текст нового сообщения' name='newMessageText' validate={[maxLength40]}/></div>
      <div>
        <button>Отправить сообщение</button>
      </div>
    </form>
  )
}

export const NewMessageFormRedux = reduxForm({form: 'newMessageInDialogsForm'})(NewMessageForm)