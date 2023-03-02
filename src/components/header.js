import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {

    return (
        <div className='topB'>
            <div className='navB'>
                <div className='logoNC'>
                    <div className='woundedN'></div>
                </div>
                <div className='titleContainer'>
                    <span className='title'>Sinisteroid</span>
                </div>
                <div className='rightNav'>
                    <Nav variant='pills'>
                        <Nav.Item>
                            <LinkContainer to='/'>
                                <Nav.Link className='navLink'>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/music'>
                                <Nav.Link className='navLink'>Music</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                    </Nav>
                </div>

            </div>
        </div>
    )
}

export default Header;