import React from 'react';
import cl from 'Hello.module.css'

function Hello() {
    return (
        <div className={cl.container}>
            <h1 className={cl.hello}>
            Hello <span>world!</span>
            </h1>
        </div>
    )
}

export default Hello;