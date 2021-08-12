import React from "react";
import {reduxForm, Field} from "redux-form";
import {Textarea} from "../../../common/FormsControls/FormsControls";
import {maxLength} from "../../../../utils/validators";

const maxLength50 = maxLength(50)

const PostTextForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name="newPostText" validate={[maxLength50]}/>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

export const PostTextFormRedux = reduxForm({form: 'PostTextForm'})(PostTextForm)