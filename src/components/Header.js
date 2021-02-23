import React from 'react'
import styled from 'styled-components'

import Avatar from '@material-ui/core/Avatar'
import Tooltip from '@material-ui/core/Tooltip'

import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'

const Header = () => {
  const [user] = useAuthState(auth)
  console.log('user is ', user)
  return (
    <HeaderContainer>
      <HeaderLeft>
        <Tooltip title='Logout'>
          <HeaderAvatar
            aria-label='logout'
            onClick={() => auth.signOut()}
            alt={user?.displayName}
            src={user?.photoURL}
          />
        </Tooltip>
        <AccessTimeIcon />
      </HeaderLeft>
      <HeaderSearch>
        <SearchIcon />
        <input placeholder='Search' />
      </HeaderSearch>
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  padding: 10px 0;
  align-items: center;
  justify-content: space-between;
  background-color: var(--slack-color);
  color: #ffffff;
`

const HeaderLeft = styled.div`
  display: flex;
  flex: 0.3;
  align-items: center;
  margin-left: 20px;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`

const HeaderSearch = styled.div`
  display: flex;
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  padding: 0 50px;
  color: gray;
  border: 1px gray solid;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: #ffffff;
  }
`
const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`
