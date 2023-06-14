import './style.css';
import { Link } from 'react-router-dom';

export const Menu = () => {
    return(
        <nav className='menu'>
            <ul>
                <li> <Link to="/"> Home</Link>
                </li>
                <li> 
                    <Link to="/about">About</Link>
                </li>
                <li> 
                    <Link to="/Post">Post</Link>
                </li>
                <li> 
                    <Link to="/Posts/10">Post 10</Link>
                </li>
                <li> 
                    <Link to="/redirect">Redirect 10</Link>
                </li>
            </ul>
        </nav>
    );
};