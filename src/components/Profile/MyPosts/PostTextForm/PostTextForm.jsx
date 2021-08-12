import React from "react";
import {reduxForm, Field} from "redux-form";

const PostTextForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component="textarea" name="newPostText" />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

export const PostTextFormRedux = reduxForm({form: 'PostTextForm'})(PostTextForm)