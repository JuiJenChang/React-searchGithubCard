import React, { Component } from 'react';
import { IoMdSearch } from "react-icons/io";
import './SearchUser.css';

class SearchUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search: false,
            height: '60px',
        }
    }

    handlInput = e => {
        e.preventDefault();
        let userName = this.refs.username.value;
        this.props.fetchProfile(userName);
        this.refs.username.value = '';
        this.setState({
            search: false,
            height: '60px',
        })
    }

    openSearch = () => {
        this.setState({
            search: true,
            height: '120px',
        })
    }

    closeSearch = () => {
        this.setState({
            search: false,
            height: '60px',
        })
    }

    render() {
        return (
            <div className="search-header" style={{ height: this.state.height }}>
                {this.state.search ?
                    <form className="search-form" onSubmit={this.handlInput}>
                        <header className="search-title">
                            <h1>
                                <a href="/">GitHub user card • React</a>
                            </h1>
                            <IoMdSearch
                                className="search-icon"
                                onClick={this.closeSearch}
                            />
                        </header>
                        <input
                            className="search-input"
                            type="text"
                            ref="username"
                            placeholder="Search User"
                        />
                    </form> :
                    <header className="search-title">
                        <h1>
                            <a href="/">GitHub user card • React</a>
                        </h1>
                        <IoMdSearch
                            className="search-icon"
                            onClick={this.openSearch}
                        />
                    </header>
                }
            </div>
        );
    }
}

export default SearchUser;