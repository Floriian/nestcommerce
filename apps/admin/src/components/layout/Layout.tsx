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
import { useNavigate } from "react-router-dom";
import { FolderOpenOutlined } from "@mui/icons-material";
import { CrudResource, useResources } from "~features/crud";

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
                <ListItemIcon>
                  <FolderOpenOutlined />
                </ListItemIcon>
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
