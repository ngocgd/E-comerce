import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useOnClickOutside from 'use-onclickoutside';
import Logo from '../../assets/icons/logo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RootState } from 'store';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { actionLoginByToken, actionSaveListUser } from 'store/user/actions';
type HeaderType = {
  isErrorPage?: Boolean;
}

const Header = ({ isErrorPage }: HeaderType) => {
  const dispatch = useDispatch();
  React.useLayoutEffect(() => {
    (async () => {
      if (localStorage.getItem("token")) {
       const res = await dispatch(actionLoginByToken());
        if (!res) {
          window.location.reload();
        }
      }
    })();
  }, []);
  const handleChange = async (event: SelectChangeEvent) => {
    // setAge(event.target.value as string);
    if(event.target.value == 'logout'){
      if (window.confirm("Do you want to logout?")) {
        await Promise.all([
          localStorage.removeItem("token"),
          dispatch(actionSaveListUser(null)),
        ]);
        return router.push('/')
      }
    }
  };

  const router = useRouter();
  const { cartItems } = useSelector((state: RootState)  => state.cart);
  const arrayPaths = ['/'];  

  const [onTop, setOnTop] = useState(( !arrayPaths.includes(router.pathname) || isErrorPage ) ? false : true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navRef = useRef(null);
  const searchRef = useRef(null);
  const dataInfo = useSelector((state:RootState) => state.userInfoReducer);

  const headerClass = () => {
    if(window.pageYOffset === 0) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }
  }

  useEffect(() => {
    if(!arrayPaths.includes(router.pathname) || isErrorPage) {
      return;
    }

    headerClass();
    window.onscroll = function() {
      headerClass();
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  }

  const closeSearch = () => {
    setSearchOpen(false);
  }

  // on click outside
  useOnClickOutside(navRef, closeMenu);
  useOnClickOutside(searchRef, closeSearch);
  return(
    <header className={`site-header ${!onTop ? 'site-header--fixed' : ''}`}>
      <div className="container">
        <Link href="/">
          <a><h1 className="site-logo"><Logo />Betaa Shop</h1></a>
        </Link>
        <nav ref={navRef} className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`}>
          <Link href="/products">
            <a>Products</a>
          </Link>
          <a href="/post">News</a>
          <a href="/contact">Contact</a>
          <button className="site-nav__btn"><p>Account</p></button>
        </nav>

        <div className="site-header__actions">
          <button ref={searchRef} className={`search-form-wrapper ${searchOpen ? 'search-form--active' : ''}`}>
            <form className={`search-form`}>
              <i className="icon-cancel" onClick={() => setSearchOpen(!searchOpen)}></i>
              <input type="text" name="search" placeholder="Enter the product you are looking for" />
            </form>  
            <i onClick={() => setSearchOpen(!searchOpen)}  className="icon-search"></i>
          </button>
          <Link href="/cart">
            <button className="btn-cart">
              <i className="icon-cart"></i>
              {cartItems.length > 0 && 
                <span className="btn-cart__count">{cartItems.length}</span>
              }
            </button>
          </Link>
          <Link href={dataInfo?.dataUser?'':'/login'}>
            <button className="site-header__btn-avatar"><i className="icon-avatar"></i></button>
          </Link>
          {/* <button 
            className="site-header__btn-menu">
            <i className="btn-hamburger" 
            onClick={() => setMenuOpen(false)} 
            ><span></span></i>
          </button> */}
          {dataInfo?.dataUser && <div><p>{dataInfo?.dataUser?.first_name + dataInfo?.dataUser?.last_name}</p></div>}
          {dataInfo?.dataUser && <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Thao tác</InputLabel>
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // label="Age"
          onChange={handleChange}
          >
          <MenuItem value={'logout'}>Đăng xuất</MenuItem>
          </Select>
          </FormControl>
          </Box>

          }
        </div>
      </div>
    </header>
  )
};


export default Header;



