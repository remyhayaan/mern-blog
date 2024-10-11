import React from 'react'
import {Navbar, TextInput, Button, Dropdown, Avatar} from 'flowbite-react'
import {Link, useLocation} from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'
import { useSelector } from 'react-redux'

function Header() {
  const path = useLocation().pathname;
  const {currentUser} = useSelector(state => state.user);
  return (
    <div>
      <Navbar className='border-b-2'>
        <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark: text-black'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Remmie's</span>
       Blog  
       </Link>
       <form>
       <TextInput
       type="text"
       placeholder="Search..."
       rightIcon={AiOutlineSearch}
       className='hidden lg:inline'/>
       </form>
       <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch/>
       </Button>
       <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
          <FaMoon/>
        </Button>
        {currentUser? ( 
          <Dropdown 
          arrowIcon={false} inline
          label={<Avatar alt='user' img={currentUser.profilePicture } rounded/>}>

            <Dropdown.Header>
              <span className='block text-sm '>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate '>@{currentUser.email}</span>
            </Dropdown.Header>
            <Link to= {'./dashboard?tab=profile'}>
            <Dropdown.Item>
              Profile
              </Dropdown.Item>
              </Link>
              <Dropdown.Divider/>
            
            <Dropdown.Item>
            Sign Out
              </Dropdown.Item>
             
          </Dropdown>
        ): 
       ( <Link to='/signin'>
        <Button gradientDuoTone='purpleToBlue'outline>
        Sign In
       </Button>
        </Link>)}
        <Navbar.Toggle/>
       </div>
       <Navbar.Collapse>
        <Navbar.Link >
          <Link to='/' active={path === '/'} as={'div'}>Home</Link>
        </Navbar.Link>
        <Navbar.Link >
          <Link to='/about'active={path === '/about'} as={'div'}>About</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to='/projects' active={path === '/projects'} as={'div'}>Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
