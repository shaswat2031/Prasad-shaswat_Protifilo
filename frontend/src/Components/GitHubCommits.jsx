import React, { useEffect, useState } from 'react';

const GitHubCommits = () => {
  const [commits, setCommits] = useState([]);
  
  useEffect(() => {
    const fetchCommits = async () => {
      const response = await fetch('https://api.github.com/repos/prasadshaswat/prasadshaswat/commits');
      const data = await response.json();
      setCommits(data);
    };
    fetchCommits();
  }, []);

  return (
    <div className='git'>
      <div className='git__header'>
        <h2 className='git__title'>GitHub Commits</h2>
        <a href='https://www.github.com/prasadshaswat' className='git__link'>View all</a>
      </div>
      <div className='git__commits'>
        {commits.map((commit, index) => (
          <div className='git__commit' key={index}>
            <div className='git__commit-info'>
              <h3 className='git__commit-title'>{commit.committer.name}</h3>
              <p className='git__commit-message'>{commit.commit.message}</p>
            </div>
            <div className='git__commit-date'>{new Date(commit.committer.date).toLocaleDateString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubCommits;
