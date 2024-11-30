import '../static/css/main-page.css'
import userIcon from '../static/imgs/icons/circle-user.svg'
import { useState } from 'react';
import likeIcon from '../static/imgs/icons/heart.svg'

export default function Post() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleClass = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <>
            <div className="post-box">
                <div className="post-header">
                    <div className="post-header-avatar">
                        <img src={userIcon} alt="User" />
                    </div>
                    <div className="post-header-info">
                        <h2>Kanres</h2>
                        <span>30 Nov 2024</span>
                    </div>
                </div>
                <div className={`post-content ${isExpanded ? 'post-content-full' : ""}`}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis quidem enim, voluptas praesentium facilis sunt ea dolorum perspiciatis voluptatem qui delectus consequatur voluptate ad voluptatibus aperiam. Repellat quas architecto animi obcaecati ex ipsa perspiciatis reprehenderit rem labore. Similique illum, magnam aliquid quidem esse atque, aliquam suscipit minima soluta perferendis voluptate, ad maxime velit! Consectetur repudiandae consequatur nobis delectus nostrum natus perspiciatis repellat, molestias, quod adipisci odio magni voluptas corporis at tempora voluptatem esse exercitationem eveniet? Molestiae a dolorem id natus aliquid! Quasi nobis laboriosam veniam, velit aspernatur doloremque maiores dolore culpa alias incidunt temporibus. Perferendis enim possimus quisquam commodi maxime laudantium ipsum quas exercitationem odio hic animi facere dicta sit, voluptatibus blanditiis provident necessitatibus est accusantium quidem vero molestiae! Quae possimus dignissimos maxime, vel, at explicabo incidunt odit nesciunt in eveniet nobis cupiditate iure perspiciatis, perferendis eaque labore beatae esse fugit exercitationem dolores ipsam! Eveniet repellat beatae facilis aliquam dolorum sint ipsam earum doloremque assumenda autem pariatur laborum qui doloribus odio eum, magnam magni dolores quos repudiandae suscipit debitis iusto iste tempore nemo? Quae consectetur autem eius iure quam distinctio quos culpa unde obcaecati iste nemo, excepturi sit soluta possimus a! Hic illum nihil repellendus tempore ipsum, unde atque et illo similique aut, sit provident vitae placeat quidem assumenda inventore earum, amet cumque excepturi. Modi quisquam a magni voluptate aspernatur architecto illum dicta eveniet asperiores quod laudantium, veniam officiis, iure voluptas. Libero ea animi repellendus quidem impedit. Officia animi cum eius molestias ipsam eveniet dolore veniam est soluta et? Cumque, velit. Nemo itaque odit sed fugiat perferendis labore? Culpa error ut vero quisquam earum possimus totam, incidunt vel qui cumque illo, voluptas sed itaque perspiciatis facilis repudiandae praesentium laudantium. Temporibus voluptate velit nobis quis maxime ducimus commodi amet voluptatem aspernatur consequatur distinctio fugit ullam eum at incidunt, numquam nesciunt accusantium!
                    
                </div>
                <span className='read-more' onClick={toggleClass}>{isExpanded ? "Show less" : "Show more"}</span>
                <div className="post-reactions">
                    <div className="post-reaction">
                        <img src={likeIcon} />
                        <span>14</span>
                    </div>
                </div>
                <div className="post-comment-box">
                    <div className="post-comment-input">
                        <textarea placeholder='Reply to post' />
                        <button type='submit'>Send</button>
                    </div>
                    <div className="post-comments-list">
                        
                        <div className="post-comments-item">
                            <div className="post-comments-item-avatar">
                                <img src={userIcon} alt="User" />
                            </div>
                            <div className="post-comments-item-content">
                                <h2>4Clarity</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A eligendi placeat eveniet ad itaque iure fugit repellat architecto commodi modi, facilis esse illo, accusamus corrupti. Delectus reiciendis dolor vel iste!</p>
                                <span>3h</span>
                            </div>
                        </div>
                        <hr />
                        <div className="post-comments-item">
                            <div className="post-comments-item-avatar">
                                <img src={userIcon} alt="User" />
                            </div>
                            <div className="post-comments-item-content">
                                <h2>sandyw</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A eligendi placeat eveniet ad itaque iure fugit repellat architecto commodi modi, facilis esse illo, accusamus corrupti. Delectus reiciendis dolor vel iste!</p>
                                <span>3h</span>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </>
    );
}