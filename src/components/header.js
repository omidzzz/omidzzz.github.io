import React, { useState, useEffect } from "react";
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Toggle from "react-toggle";
import { useMediaQuery } from 'react-responsive';
import $ from 'jquery';


const Header = () => {

    const [isDark, setIsDark] = useState(false);

    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    useEffect(() => {
        if (isDark && prefersDark) {
            $('body').css('filter', 'grayscale(90%)')
            document.body.classList.add('dark');
            $('.musicP').addClass('dark').removeClass('yellowBack');
            $('.navB').addClass('dark').removeClass('yNavB');

        } else {
            $('body').css('filter', '')

            document.body.classList.remove('dark');
            $('.musicP').removeClass('dark').addClass('yellowBack');
            $('.navB').addClass('yNavB').removeClass('dark');
        }

    });



    return (
        <div className='topB'>
            <div className='navB yNavB'>
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
                                <Nav.Link className='navLink rNav'>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/music'>
                                <Nav.Link className='navLink rNav'>Music</Nav.Link>
                            </LinkContainer>
                            <Toggle
                                className="dark-mode-toggle rNav mt-4"
                                checked={isDark}
                                onChange={({ target }) => setIsDark(target.checked)}
                                icons={{ checked: "🌙", unchecked: "🔆" }}
                                aria-label="Dark mode toggle"
                            />
                        </Nav.Item>
                    </Nav>
                </div>

            </div>
        </div>
    )
}

export default Header;