import { NavLink } from 'react-router-dom';
import './NotFound.css';

const NotFoundPage = () => {
    return (
        <div className='not-found'>
            <NavLink to={'/Mie-company'}>
                <img srcSet="" alt="" />
            </NavLink>
            <h1>Oops! Page not found</h1>
            <NavLink to={'/Mie-company'}>Back to home</NavLink>
        </div>
    );
};

export default NotFoundPage;
