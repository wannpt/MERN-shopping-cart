import { EmojiHappyIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <div className='grid grid-cols-3 p-4 mb-4 bg-indigo-400 text-white items-center '>
            {/* Logo */}
            <div className='flex justify-self-start'>
                <Link to='/'>
                    <EmojiHappyIcon className='inline-block h-6 w-6'/>

                </Link>
            </div>
            
            {/* Menu */}
            <div className='text-center items-center'>
                <Link to='/'>
                    <span className='subpixel-antialiased inline-block '> MERN Shopping cart</span>
                </Link>
            </div>
            {/* Hamburger */}
            <div className='justify-self-end'>
                <Link to='/cart'>
                    <ShoppingCartIcon className='inline-block h-6 w-6'/>
                </Link>
                
            </div>

        </div>
    )
}

export default NavBar