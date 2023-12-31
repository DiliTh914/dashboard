import React, { useState, useReducer } from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import BaseContainer from "./base-container";

const drawerWidth = 240;

function Dashboard({items, active}) {

    const [itemMap, setItemMap] = useState(items);
    const [activeItem, setActiveItem] = useState(active);

    const onClickItem = (key) => {
        setActiveItem(key);
    }


    const getItemColor = (key) => {
        return activeItem === key ? '#bcbcbc' : '#ffffff';
    }

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                sx={{width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`}}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Permanent drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    // backgroundColor: '#2e464e',
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar/>
                <Divider/>
                <List>
                    {Object.keys(itemMap).map((key) => (
                        <ListItem key={key} disablePadding sx={{backgroundColor: getItemColor(key)}}>
                            <ListItemButton  onClick={() => onClickItem(key)}>
                                <ListItemIcon>
                                    <InboxIcon/>
                                </ListItemIcon>
                                <ListItemText primary={itemMap[key].name}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{flexGrow: 1, bgcolor: 'background.default', p: 3}}
            >
                <Toolbar/>
                <BaseContainer item={activeItem}/>
            </Box>
        </Box>

    );
}

export default Dashboard;
