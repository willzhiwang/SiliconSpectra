import React, { Fragment } from 'react'

const ChangePhoto = (props) => {
    const { minus, plus, search } = props

    return (
        <Fragment>
            <button onClick={(e) => minus(e)}>-</button>
            <input placeholder="Search" onKeyPress={(e) => search(e)} >
            </input>
            <button onClick={(e) => plus(e)}>+</button>
        </Fragment>
    )
}
export default ChangePhoto;
