import Option from "./option/Option";
import "./_navbar.scss"

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PeopleIcon from '@material-ui/icons/People';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import HomeIcon from '@material-ui/icons/Home';

function LeftBar() {
    return (
        <div className="leftBar">
            <ul className="leftbarList">
                <li>
                    <a href="/" className="leftbarListItem">
                        <HomeIcon className="icon"/>
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="/friends" className="leftbarListItem">
                        <PeopleAltIcon className="icon"/>
                        <span>Friends</span>
                    </a>
                    
                </li>
                <li>
                    <a href="/posts" className="leftbarListItem">
                        <PhotoLibraryIcon className="icon"/>
                        <span>Posts</span>
                    </a>
                    
                </li>
                <li>
                    <a href="/servers" className="leftbarListItem">
                        <PeopleIcon className="icon"/>
                        <span>Servers</span>
                    </a>
                    
                </li>
                <li>
                    <a href="/tune" className="leftbarListItem">
                        <PlayCircleFilledIcon className="icon"/>
                        <span>Tune</span>
                    </a>
                    
                </li>
            </ul>
        </div>
    );
}

export default LeftBar;