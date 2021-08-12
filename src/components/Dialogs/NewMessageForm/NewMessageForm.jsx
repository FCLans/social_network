import React from "react";
import {reduxForm, Field} from "redux-form";

const NewMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div><Field component='textarea' placeholder='Текст нового сообщения' name='newMessageText'/></div>
      <div>
        <button>Отправить сообщение</button>
      </div>
    </form>
  )
}

export const NewMessageFormRedux = reduxForm({form: 'newMessageInDialogsForm'})(NewMessageForm)