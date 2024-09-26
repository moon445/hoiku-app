import * as React from 'react';
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';


const SideMenu: React.FC = () => {
  const navigate = useNavigate();

    // ログアウト処理
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };
  

  return (
    <List component="nav">
      <ListItemButton component="a" href="/">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton >
      <ListItemButton onClick={() => navigate('/Notice')}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="うさぎ組" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate('/Notice')} >
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="りす組" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate('/Notice')} >
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="ぱんだ組" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate('/Notice')} >
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="ぺんぎん組" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate('/growth')} >
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="成長記録" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate('/Setting')}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="設定" />
      </ListItemButton>
      <ListItemButton onClick={handleLogout}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="ログアウト" />
      </ListItemButton>

    </List>
  );
};
export default SideMenu;