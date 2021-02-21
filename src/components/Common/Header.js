import React, { useCallback, useState } from 'react';
import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo } from '../../modules/common';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const userInfo = useSelector(state => state.common.userInfo);
  const dispatch = useDispatch();

  const logout = useCallback(() => {
    sessionStorage.removeItem('userInfo');
    dispatch(setUserInfo({
      userId: null,
      nickname: null,
      name: null
    }));
  }, []);

  return (
    <AppBar position='static'>
      <Toolbar
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Typography variant='h6'>
            Test
          </Typography>
        </div>
        {userInfo.userId && (
          <>
            <IconButton
              edge='start'
              color='inherit'
              aria-label='menu'
              aria-controls='header-menu'
              onClick={event => setAnchorEl(event.target)}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='header-menu'
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem onClick={logout}>로그아웃</MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;