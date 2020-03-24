import React, { useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import './SearchUser.css';

function SearchUser({ fetchProfile, username, handleChange }) {
    const [search, setSearch] = useState(false);
    const [height, setHeight] = useState('60px');

    const handlInput = e => {
        e.preventDefault();
        fetchProfile(username);
        setSearch(false);
        setHeight('60px');
    }

    const openSearch = () => {
        setSearch(true);
        setHeight('140px');
    }

    const closeSearch = () => {
        setSearch(false);
        setHeight('60px');
    }
    return (
        <div className="search-header" style={{ height }}>
            {search ?
                <form className="search-form" onSubmit={handlInput}>
                    <header className="search-title">
                        <h1>
                            <a href="/">GitHub user card • React</a>
                        </h1>
                        <IoMdSearch
                            className="search-icon"
                            onClick={closeSearch}
                        />
                    </header>
                    <input
                        className="search-input"
                        type="text"
                        onChange={handleChange}
                        placeholder="Search User"
                    />
                </form> :
                <header className="search-title">
                    <h1>
                        <a href="/">GitHub user card • React</a>
                    </h1>
                    <IoMdSearch
                        className="search-icon"
                        onClick={openSearch}
                    />
                </header>
            }
        </div>
    );
}

export default SearchUser;