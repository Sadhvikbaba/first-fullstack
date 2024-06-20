import React from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true,
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus,
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus,
    },
    {
      name: 'add Post',
      slug: '/add-post',
      active: authStatus,
      responsiveName: 'Post'
    },
    {
      name: 'Profile',
      slug: '/profile',
      active: authStatus,
    },
  ];

  return (
    <header className='py-4 bg-gray-100 text-gray-600'>
      <Container>
        <nav className='flex'>
          <div className='  lg:mr-4 '>
            <Link to='/'>
              <Logo width='90' />
            </Link>
          </div>
          <ul className='flex lg:ml-auto'>
            {navItems.map((item) => {
              if (item.active) {
                return (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className='px-4 lg:px-6 py-2 duration-200 hover:bg-orange-600 rounded-full hover:text-gray-100'
                    >
                      <span className="block lg:hidden">{item.responsiveName || item.name}</span>
                      <span className="hidden lg:block">{item.name}</span>
                    </button>&nbsp;
                  </li>
                );
              }
              return null;
            })}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
