import '../static/css/main-page.css'
import Post from './Post';

export function FeedFollowing() {

    return (
        <div className='feed-current'>
            <div className="feed-current-list">
                <Post />
                <hr />
                <Post />
                <hr />
            </div>
        </div>
    );
}