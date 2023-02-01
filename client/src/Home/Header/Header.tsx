import React from 'react'
import { Icon } from 'semantic-ui-react'

import './header.css'

const Nav = () => {
    return (
        <div className='header'>

            <div className='main'>
                <div className='logo'>
                    <Icon name='gamepad' color='orange' />
                    <span>DailyGames</span>
                </div>
            </div>

        </div>
    )
}

export default Nav