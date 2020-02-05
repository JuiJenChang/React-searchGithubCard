import React, { Component } from 'react';
import SearchUser from './component/SearchUser';
import Profile from './component/Profile';
import Title from'./component/Title';
import './App.css';

const API = 'https://api.github.com/users';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: 'JuiJenChang',
      name: '',
      avatar: '',
      location: '',
      repos: '',
      followers: '',
      following: '',
      homeUrl: '',
      notFound: '',
    }
  }

  fetchProfile = username => {
    let url = `${API}/${username}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          username: data.login,
          name: data.name,
          avatar: data.avatar_url,
          location: data.location,
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          homeUrl: data.html_url,
          notFound: data.message
        })
      })
      .catch((error) => console.log('No found'))
  }

  componentDidMount() {
    this.fetchProfile(this.state.username)
  }

  render() {
    return (
      <div>
        <SearchUser fetchProfile={this.fetchProfile} />
        <Title username={this.state.username} />
        <Profile data={this.state} />
      </div>
    );
  }
}

export default App;
