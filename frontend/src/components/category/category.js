import React, {useState, useReducer, useEffect} from 'react';

const drawerWidth = 240;

function Category() {

    // const [itemMap, setItemMap] = useState(items);
    // const [activeItem, setActiveItem] = useState(active);
    //
    // const onClickItem = (key) => {
    //     setActiveItem(key);
    // }

    // useEffect(() => {
    //
    //     console.log("mounted");
    //
    //
    // }, []);

    function onClick() {
        console.log("dfssd");
    }

    return (
        <div>
            {onClick()}
        </div>
    );
}

export default Category;
