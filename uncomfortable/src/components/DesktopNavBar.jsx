import * as React from 'react';
import { AppBar, Toolbar, Typography, Container, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function DesktopNavBar() {
    return ( 
        <AppBar position="static">
        <Container maxWidth='xl'>
            <Toolbar disableGutters>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                mr: 2,
                display: { xs: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                uNcomfortable
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Link to={'uNcomfortable'} style={{textDecoration: 'none'}}>
                    <Button sx={{ my: 2, color: 'white', display: 'block' }}>Home</Button>
                </Link>
                <Link to={'episodes'} style={{textDecoration: 'none'}}>
                    <Button sx={{ my: 2, color: 'white', display: 'block' }}>Episodes</Button>
                </Link>
                <Link to={'events'} style={{textDecoration: 'none'}}>
                    <Button sx={{ my: 2, color: 'white', display: 'block' }}>Events</Button>
                </Link>
                <Link to={'shop'} style={{textDecoration: 'none'}}>
                    <Button sx={{ my: 2, color: 'white', display: 'block' }}>Shop</Button>
                </Link>
            </Box>
            </Toolbar>
        </Container>
        </AppBar>
     )
}