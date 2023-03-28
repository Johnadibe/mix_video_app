import React from 'react'
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';
import { Typography } from '@mui/material';

const Navbar = () => (
    <Stack 
    direction="row" 
    alignItems="center" 
    p={2} 
    sx={{ position: 'sticky', background: '#0D1117', top: 0, justifyContent: 'space-between'}}>
        {/* Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center"}}>
            <img src={logo} alt="logo" height={45} />
            <span>
                <Typography sx={{
                    fontSize: '25px',
                    fontWeight: 'bold',
                    color: '#fff',
                    ml: '20px',
                    display: { xs: 'none', md: 'block'}
                }}>
                VidMix
                </Typography>
            </span>
            <span>
            <Typography sx={{
                    fontSize: '25px',
                    fontWeight: 'bold',
                    color: '#FF0000',
                    ml: '5px',
                    display: { xs: 'none', md: 'block'}
                }}>
                    Hub
                </Typography>
            </span>
        </Link>

        {/* Search Bar */}
        <SearchBar />
    </Stack>
  )

export default Navbar;