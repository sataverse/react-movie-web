import { Link } from 'react-router-dom'
import SettingIcon from './Svg/SettingIcon'

function MainNavManager() {
    return (
        <Link to={'/admin'} className='no-underline'>
            <SettingIcon width={40} height={40}/>
        </Link>
    )
}

export default MainNavManager