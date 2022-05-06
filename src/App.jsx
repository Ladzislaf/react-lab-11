import React from 'react'
import Hierarchy from "./Components/Hierarchy";
import folderIcon from './Images/folder.svg'
import imageIcon from './Images/image.svg'
import docIcon from './Images/text.svg'


// todo границы ошибок
const hierarchy = [{
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
            onClick: function (id) {
                console.log(id);
            }
        }]
    }]
}, {
    id: 3,
    name: "folder3",
    icon: folderIcon,
    childs: [{
        id: 4,
        name: "folder4",
        icon: folderIcon,
        childs: [{
            id: 5,
            name: "text.txt",
            icon: docIcon,
            onClick: function (id) {
                console.log(id);
            }
        }]
    }]
}];

const App = () => {
    return (
        <div className={'appContainer'}>
            <Hierarchy hierarchy={hierarchy}/>
        </div>
    )
}

export default App
