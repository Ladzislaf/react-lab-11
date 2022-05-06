import React, {useEffect, useState} from 'react'
import ErrorBoundary from "./ErrorBoundary"
import arrowIcon from '../Images/arrow.svg'
import '../App.css'

const Hierarchy = ({hierarchy, idArray}) => {
    const [clicked, setClicked] = useState(hierarchy.map(() => {
        return false
    }))

    useEffect(() => {
        if (idArray.length > 0) {
            hierarchy.forEach((item) => {
                let test = idArray.slice()
                test[idArray.indexOf(item.id)] = 0
                if (test.includes(item.id))
                    throw new Error('id is not unique')
                if (item.onClick && typeof item.onClick !== 'function')
                    throw new Error('onClick is not a function')
            })
        }
    }, [idArray])

    const onClickHierarchy = (item, i) => {
        let copy = clicked.slice()
        copy[i] = !clicked[i];
        setClicked(copy)
        if (item.onClick)
            item.onClick(item.id)
    }

    return (
        <div>
            {hierarchy.map((item, i) => {
                return <div style={{marginLeft: '50px'}} key={item.id}>
                    {item.childs && (
                        clicked[i] ?
                            <img src={arrowIcon} alt="" style={{transform: 'rotate(90deg)'}}/>
                            : <img src={arrowIcon} alt=""/>
                    )}
                    <img src={item.icon} alt=""/>
                    <span onClick={() => onClickHierarchy(item, i)}>{item.name}</span>
                    {(item.childs && clicked[i]) &&
                        <ErrorBoundary>
                            <Hierarchy hierarchy={item.childs} idArray={idArray}/>
                        </ErrorBoundary>
                    }
                </div>
            })}
        </div>
    );
};

export default Hierarchy