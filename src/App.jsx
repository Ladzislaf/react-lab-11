import React, {useEffect, useState} from 'react'
import Hierarchy from "./Components/Hierarchy";
import HierarchyClassComponent from "./Components/HierarchyClassComponent";
import ErrorBoundary from "./Components/ErrorBoundary";

import folderIcon from './Images/folder.svg'
import imageIcon from './Images/image.svg'
import docIcon from './Images/text.svg'

const hierarchy = [
    {
        id: 1,
        name: "folder1",
        icon: folderIcon,
        onClick: function (id) {
            console.log(id);
        },
        childs: [{
            id: 2,
            name: "folder2",
            icon: folderIcon,
            onClick: function (id) {
                console.log(id);
            },
            childs: [{
                id: 6,
                name: "image.png",
                icon: imageIcon,
                onClick:
                function (id) { console.log(id); }
                //     '123'
            }]
        }]
    },
    {
        id: 3,
        name: "folder3",
        icon: folderIcon,
        childs: [{
            id: 4,
            name: "folder4",
            icon: folderIcon,
            childs: [{
                id:
                    5,
                    // 2,
                name: "text.txt",
                icon: docIcon,
                onClick: function (id) {
                    console.log(id);
                }
            }]
        }]
    }
];

const App = () => {
    const [idArray, setIdArray] = useState([])

    const arr = []
    const getIdArray = (h) => {
        h.forEach((item) => {
            arr.push(item.id)
            if (item.childs) getIdArray(item.childs)
        })
    }

    useEffect(() => {
        getIdArray(hierarchy)
        setIdArray(arr)
    }, [])

    return (
        <div className={'appContainer'}>
            <ErrorBoundary>
                {/*<HierarchyClassComponent hierarchy={hierarchy}/>*/}
                <Hierarchy hierarchy={hierarchy} idArray={idArray} setIdArray={setIdArray}/>
            </ErrorBoundary>
        </div>
    )
}

export default App
