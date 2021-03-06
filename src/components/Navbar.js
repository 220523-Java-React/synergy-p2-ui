import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { MenuItem, MenuList } from '@mui/material';
import {useNavigate} from "react-router-dom"
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/material/Menu';
import { useState } from "react"


const requestPages = ["Quick Refill", "Your Open Refills", "All Refills", "Admin"]
const paymentPages = ["Outstanding Payments", "Payment History"]
const medicinePages = ["Add Medicine", "View All Medicine", "View Your Medicine"]

export default function Navbar({user}){

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedDropdown, setSelectedDropdown] = useState(null); 

    const navigate = useNavigate();
    const open = Boolean(anchorEl);

    const handleClick = (event, dropState) => {
        setAnchorEl(event.currentTarget);
        setSelectedDropdown(dropState);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setSelectedDropdown(null);
    };

    const handleNavClose = (page) => {
        navigate(`/${selectedDropdown}/${page.toLowerCase().replace(/\s/g, "")}`);
        setAnchorEl(null);
        setSelectedDropdown(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <MenuItem onClick={() => navigate("/")}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Synergy Pharm
                    </Typography>
                </MenuItem>
                
                <Button
                    variant="contained"
                    disableElevation
                    onClick={(e)=>{handleClick(e, "refills");}}
                    endIcon={<KeyboardArrowDownIcon />}
                    sx={{margin:1}}
                    color="warning"
                >
                    Refills
                </Button>

                {selectedDropdown === "refills" &&
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                    {requestPages.map((page) => (
                    <MenuList key={page} onClick={() => (handleNavClose(page)) } >
                    <Typography textAlign="center">{page}</Typography>
                    </MenuList>
                    ))}
                    
                    </Menu>
                }
                
                {/* -----------------------------------------------------------------------------------*/}
                {/* Button Section for payments                                                        */}
                {/* -----------------------------------------------------------------------------------*/}
                <Button
                    variant="contained"
                    disableElevation
                    onClick={(e) =>{handleClick(e, "payments")}}
                    endIcon={<KeyboardArrowDownIcon />}
                    sx={{margin:1}}
                    color="warning"
                >
                    Payments
                </Button>

                {selectedDropdown === "payments" &&
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                    {paymentPages.map((page) => (
                    <MenuList key={page} onClick={() => navigate(handleNavClose(page))} >
                    <Typography textAlign="center">{page}</Typography>
                    </MenuList>
                    ))}
                    
                    </Menu>
                }       

                {/* -----------------------------------------------------------------------------------*/}
                {/* Button Section for medicines                                                        */}
                {/* -----------------------------------------------------------------------------------*/}

                <Button
                    variant="contained"
                    disableElevation
                    onClick={(e) => {handleClick(e, "medicines")}}
                    endIcon={<KeyboardArrowDownIcon />}
                    sx={{margin:1}}
                    color="warning"
                >
                    Medicines
                </Button>

                {selectedDropdown == "medicines" &&
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                    {medicinePages.map((page) => (
                    <MenuList key={page} onClick={() => navigate(handleNavClose(page))}>
                    <Typography textAlign="center">{page}</Typography>
                    </MenuList>
                    ))}
                    
                    </Menu>
                }

                    
                </Toolbar>
                
            </AppBar>
        </Box>
    )
}

// this component is rendered if the user logged in 
function AuthNavbar(){
    const navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{backgroundColor: "blue"}}>
                <Toolbar variant="dense">
                <MenuItem onClick={() => navigate("/")}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Synergy Pharmacy
                    </Typography>
                </MenuItem>
                
                {medicinePages.map((page) => (
                <MenuItem key={page} onClick={() => navigate(`/${page.toLowerCase()}`)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
                ))}
                </Toolbar>
            </AppBar> 
        </Box>
    )
}

// this component is rendered if the user is not logged in 
function NoAuthNavbar(){
    return <h1>Please log in!! :D</h1>
}