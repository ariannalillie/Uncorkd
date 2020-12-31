import "./UserProfile.css"
import { useSelector } from 'react-redux';

function UserProfile() {
    const currentUser = useSelector(state => {
        return state.session.user;
    });
console.log(currentUser)
    return (
        <>
            <div className="profile-header-container">
                <div className='profile-image-container'></div>
                <div className='column-container'>
                    <h1>{currentUser.name}</h1>
                    <h2>{currentUser.username}</h2>
                </div>
            </div>
            <div>
                <h1>Your Recent Activity</h1>
                <hr/>
                <div className="profile-header-container">
                <div className='profile-image-container user-activity-image'></div>
                <h2 className="user-activity">{currentUser.name} visited 14 Hands Winery</h2>
                </div>

            </div>
        </>
    )
};


export default UserProfile;
