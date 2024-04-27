import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { useResources } from "../../features/crud";
import { Link, useNavigate } from "react-router-dom";
import { CrudResource } from "../../features/crud/types";

const drawerWidth = 240;

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  const { resources } = useResources();

  const navigate = useNavigate();
  const handleClick = (resource: CrudResource) => navigate(`/${resource.name}`);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      ></AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {resources.map((resource) => (
            <ListItem
              disablePadding
              key={resource.name}
              onClick={() => handleClick(resource)}
            >
              <ListItemButton>
                <ListItemText primary={resource.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
