import React, { useState, useEffect } from 'react';
import SearchUser from './component/SearchUser';
import Profile from './component/Profile';
import Title from './component/Title';
import './App.css';

const API = 'https://api.github.com/users';

function App() {
  const [username, setUsername] = useState('JuiJenChang');
  const [userData, setUserData] = useState({
    username: '',
    name: '',
    avatar: '',
    location: '',
    repos: '',
    followers: '',
    following: '',
    homeUrl: '',
    notFound: '',
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleChange = e => {
    setUsername(e.target.value);
  };

  const fetchProfile = async () => {
    try {
      let url = `${API}/${username}`;
      const res = await fetch(url);
      const data = await res.json();
      setUserData({
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
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <SearchUser
        fetchProfile={fetchProfile}
        username={userData.username}
        handleChange={handleChange}
      />
      <Title username={userData.username} />
      <Profile data={userData} />
    </div>
  );
}

export default App;
