import React, { useCallback, useState } from 'react';
import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setUserInfo } from '../../modules/common';
import logo  from '../../assets/images/logo.png';
import search  from '../../assets/images/search.png';

const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #090C1A;
  justify-content: space-between;
`
const LeftMenu = styled.div`
  flex-basis: 15%;
  padding: 18px 0px;
  padding-left: 28px;
  text-align: left;
`
const Logo = styled.img`
  height: 22px;
`
const StyledMenu = styled.span`
  font-size: 15px;
  font-weight: 500;
  line-height: 60px;
  padding-right: 36px;
  color: ${(props) => props.color || "#6D6D70"};
`
const MiddleMenu = styled.div`
  flex-basis: 70%;
`
const RightMenu = styled.div`
  flex-basis: 15%;
  text-align: right;
`
const Search = styled.img`
  width: 20px;
  height: 20px;
  margin-top: -3px;
  vertical-align: middle;
`

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
    <StyledHeader>
      <LeftMenu>
        <Logo src={logo} alt={'logo'}/>
      </LeftMenu>
      <MiddleMenu>
        <StyledMenu>스터디 찾기</StyledMenu>
        <StyledMenu>개발자 채용</StyledMenu>
        <StyledMenu>테크 뉴스</StyledMenu>
        <StyledMenu>커뮤니티</StyledMenu>
        <StyledMenu>멘토∙멘티</StyledMenu>
      </MiddleMenu>
      <RightMenu>
        <StyledMenu>
          <Search src={search} alt="search"/>
        </StyledMenu>
        {userInfo.userId ? (
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
        ) : (
          <>
            <StyledMenu color="#EAEAEA">회원가입</StyledMenu>
            <StyledMenu color="#4B7AFA">로그인</StyledMenu>
          </>
        )
      }
      </RightMenu>
    </StyledHeader>
  );
};

export default Header;