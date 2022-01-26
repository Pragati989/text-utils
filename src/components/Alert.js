import React from 'react';

export default function Alert(props) {

    const capitalize = (word) =>{
        const newWord = word.charAt(0).toUpperCase() + word.slice(1);
        return newWord;
    }
  return (
      props.alert && 
        <>
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
            </div>
        </>
    );

}
