import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import { MdArrowBackIos } from "react-icons/md";
import { IconButton } from "@mui/material";

export const MobNav = ({ toggleDrawer, open, setOpen }) => {
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <IconButton style={{ width: "50px",float:'right', marginTop:'10px' }}>
        <MdArrowBackIos />
      </IconButton>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? "ddddd" : "ddd"}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? "dddd" : "aa"}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <div>
        {/* <Button >Open drawer</Button> */}
        <Drawer className="driver" open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>

      {/* <div
        id={isContentVisible === true ? "nav-trans" : "no-trans"}
        className="mob-nav"
      >
        <div className="mob-call">
          <div className="side-top-bar row space-between-center">
            <div className="col-md-10">
            <Search />
            </div>
            <div className="hab-remove col-md-3">
              <FaXmark onClick={toggleContentRemove} />
            </div>
          </div>
          <NavList toggleContentRemove={toggleContentRemove} />
        </div>
      </div> */}
    </>
  );
};
