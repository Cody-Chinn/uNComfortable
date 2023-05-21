import * as React from 'react';
import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Link } from 'react-router-dom';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HomeIcon from '@mui/icons-material/Cottage';

export default function MobileNavBar() {
    const [value, setValue] = React.useState(0);

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} variant='outlined'>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => { setValue(newValue); }}>
                    <Link to='uNcomfortable'>
                        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                    </Link>
                    <Link to='episodes'>
                        <BottomNavigationAction label="Episodes" icon={<PlayCircleOutlineIcon />} />
                    </Link>
                    <Link to='events'>
                        <BottomNavigationAction label="Events" icon={<CalendarMonthIcon />} />
                    </Link>
                    <Link to='shop'>
                        <BottomNavigationAction label="Shop" icon={<ShoppingCartIcon />} />
                    </Link>
            </BottomNavigation>
        </Paper>
    )
}