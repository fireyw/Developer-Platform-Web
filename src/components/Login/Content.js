import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux';
import sha256 from 'crypto-js/sha256';
import { setUserInfo } from '../../modules/common';
import axios from 'axios';

const Content = () => {
  const apiUrl = useSelector(state => state.common.apiUrl);
  const dispatch = useDispatch();

  const _userId = useRef(null);
  const _password = useRef(null);
  
  const login = useCallback(() => {
    const userId = _userId.current.children[1].children[0];
    const password = _password.current.children[1].children[0];

    if (userId.value === '') {
      Swal.fire({
        icon: 'error',
        title: '로그인',
        text: 'ID를 입력해 주세요',
        didOpen: () => document.body.className = '',
        didClose: () => userId.focus()
      });
      return;
    }

    if (password.value === '') {
      Swal.fire({
        icon: 'error',
        title: '로그인',
        text: '비밀번호를 입력해 주세요',
        didOpen: () => document.body.className = '',
        didClose: () => password.focus()
      });
      return;
    }

    (async () => {
      try {
        const { data: { result, data } } = await axios({
          url: `${apiUrl}/api/user`,
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          data: {
            userId: userId.value,
            password: sha256(password.value).toString()
          }
        });
  
        if (result) {
          dispatch(setUserInfo(data));
          sessionStorage.setItem('userInfo', JSON.stringify(data));
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, [_userId, _password]);

  const pressEnter = useCallback(event => {
    if (event.keyCode === 13) {
      login();
    }
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem('userInfo')) {
      const savedUserInfo = JSON.parse(sessionStorage.getItem('userInfo'));

      (async () => {
        try {
          const { data: { result, data } } = await axios({
            url: `${apiUrl}/api/user`,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: {
              userId: savedUserInfo.userId,
              password: savedUserInfo.password
            }
          });
    
          if (result) {
            dispatch(setUserInfo(data));
          }
        } catch (err) {
          console.error(err);
        }
      })();
    }
  }, []);

  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div style={{ width: '25%' }}>
        <h2 style={{ textAlign: 'center' }}>로그인</h2>
        <TextField
          ref={_userId}
          label='ID'
          style={{ width: '100%', marginBottom: '20px' }}
          onKeyUp={pressEnter}
        />
        <TextField
          ref={_password}
          label='PASSWORD'
          type='password'
          style={{ width: '100%', marginBottom: '40px' }}
          onKeyUp={pressEnter}
        />
        <Button
          variant='contained'
          color='primary'
          style={{ width: '100%' }}
          onClick={login}
        >
          LOGIN
        </Button>
      </div>
    </div>
  );
};

export default Content;