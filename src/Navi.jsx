import {Link} from 'react-router-dom';

const Navi = ()  => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <ul className='navbar-nav me-auto mb-2 lb-lg-0'>
            <li className='nav-item'>
                    <Link className='nav-link' to='/'>Home</Link>
                </li>
                
                <li className='nav-item'>
                    <Link className='nav-link' to='/TeamSelector'>Modify</Link>
                </li>
                <li className='nav-item'>
                <Link className='nav-link' to='/GroupedTeamMembers'>Teams</Link>
                </li>

            </ul>
        </nav>
    );
}


export default Navi