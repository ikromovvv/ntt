import {memo} from 'react';
import classNames from "classnames";

import cls from "./form.module.sass"

export const Form = memo(({id, extraClassname, onSubmit, children, typeSubmit= "inside" , title , extraClassnameTitle , btnValue = "Tastiqlash" }) => {
    return (
        <>
            <h2 className={extraClassnameTitle}>{title}</h2>
            <form
                id={id}
                className={classNames(cls.form, extraClassname)}
                onSubmit={onSubmit}
            >

                {children}

                {
                    typeSubmit === "inside"
                        ?
                        <input value={btnValue} className={`${cls.submit} ${extraClassname}`} type="submit"/>
                        :
                        null
                }
            </form>
        </>
    );
})