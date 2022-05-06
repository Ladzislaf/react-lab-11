import React, {useState} from 'react';
import '../App.css'
import arrowIcon from '../Images/arrow.svg'

const Hierarchy = ({hierarchy}) => {
    const [clicked, setClicked] = useState(hierarchy.map(() => { return false }))

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
                    {item.childs &&
                        clicked[i] ?
                        <img src={arrowIcon} alt="" style={{transform: 'rotate(90deg)'}}/>
                        : <img src={arrowIcon} alt=""/>
                    }
                    <img src={item.icon} alt=""/>
                    <span onClick={() => onClickHierarchy(item, i)}>{item.name}</span>
                    {(item.childs && clicked[i]) && <Hierarchy hierarchy={item.childs}/>}
                </div>
            })}
        </div>
    );
};

export default Hierarchy;