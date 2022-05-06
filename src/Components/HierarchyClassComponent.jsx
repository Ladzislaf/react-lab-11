import React from "react";
import arrowIcon from "../Images/arrow.svg";
import ErrorBoundary from "./ErrorBoundary";


export default class HierarchyClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: props.hierarchy.map(() => {
                return false
            }),
        }
    }

    render() {
        this.props.hierarchy.forEach((item) => {
            if(item.onClick && typeof item.onClick !== 'function')
                throw new Error('onClick is not a function')
        })

        const onClickHierarchy = (item, i) => {
            let copy = this.state.clicked.slice()
            copy[i] = !this.state.clicked[i]
            this.setState({
                clicked: copy,
            })
            if (item.onClick)
                item.onClick(item.id)
        }

        return (
            <div>
                {this.props.hierarchy.map((item, i) => {
                    return <div style={{marginLeft: '50px'}} key={item.id}>
                        {item.childs && (
                            this.state.clicked[i] ?
                                <img src={arrowIcon} alt="" style={{transform: 'rotate(90deg)'}}/>
                                : <img src={arrowIcon} alt=""/>
                        )}
                        <img src={item.icon} alt=""/>
                        <span onClick={() => onClickHierarchy(item, i)}>{item.name}</span>
                        {(item.childs && this.state.clicked[i]) &&
                            <ErrorBoundary>
                                <HierarchyClassComponent hierarchy={item.childs}/>
                            </ErrorBoundary>}
                    </div>
                })}
            </div>
        )
    }
}