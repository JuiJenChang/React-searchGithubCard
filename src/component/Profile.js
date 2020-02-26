import React from 'react';
import { MdLocationOn } from "react-icons/md";
import './Profile.css';

function Profile({ data }) {
    const followers = `${data.homeUrl}/followers`;
    const repositories = `${data.homeUrl}?tab=repositories`;
    const following = `${data.homeUrl}/following`;
    if (data.notFound === "Not Found")
        return (
            <div className="profile-error">
                <h2>Oops !!!</h2>
                <p>The Component Couldn't Find The You Were Looking For . Try Again </p>
            </div>
        );
    else
        return (
            <main className="profile-main">
                <section className="profile-content">
                    <img src={data.avatar}
                        alt={data.username}
                    />
                    <div className="profile-div" />
                    <h2>
                        <a href={data.homeUrl}
                            title={data.username}
                            target="_blank"
                        >
                            {data.name || data.username}
                        </a>
                    </h2>
                    <h3>
                        <MdLocationOn />
                        <span>{data.location || 'I Live In My Mind'}</span>
                    </h3>
                    <ul>
                        <li>
                            <a href={followers}
                                target="_blank"
                                title="Number Of Followers"
                            >
                                <span>Followers</span>
                                <p>{data.followers}</p>
                            </a>
                        </li>
                        <li>
                            <a href={repositories}
                                target="_blank"
                                title="Number Of Repositoriy"
                            >
                                <span>Repositoriy</span>
                                <p>{data.repos}</p>
                            </a>
                        </li>
                        <li>
                            <a href={following}
                                target="_blank"
                                title="Number Of Following"
                            >
                                <span>Following</span>
                                <p>{data.following}</p>
                            </a>
                        </li>
                    </ul>
                </section>
            </main >
        );
}

export default Profile;