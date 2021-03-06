import React, {useRef, useState} from "react";


export const User = (
    {
        name,
        onDelete,
        onChange
    }
) => {
    const changeUserNameRef = useRef(null);
    const [editMode, setEditMode] = useState(false);

    const enableEditMode = () => {
        setEditMode(true);
    }

    const disableEditMode = () => {
        onChange(changeUserNameRef.current.value);
        setEditMode(false);
    }

    const deleteUserHandler = () => onDelete();

    return (
        <div>
            {
                editMode
                    ? <input
                        defaultValue={name}
                        ref={changeUserNameRef}
                        onBlur={disableEditMode}
                        autoFocus
                    />
                    : <span onDoubleClick={enableEditMode}>
                                        {name}
                                </span>
            }
            <button onClick={deleteUserHandler}>X</button>
        </div>
    )
}
