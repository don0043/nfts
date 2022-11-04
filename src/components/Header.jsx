import React from 'react';
import {AppBar, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Typography>
                        <Link to="/">NFT</Link>
                    </Typography>

                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
