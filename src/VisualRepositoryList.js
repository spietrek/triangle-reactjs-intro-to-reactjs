import React from 'react';
import PropTypes from 'prop-types';

const VisualRepositoryList = props => {
  const { repositories } = props;
  const repoList = repositories.map(repo => {
    const repoInfo = `${repo.name} (${repo.stargazers_count} stars)`;
    console.log(repoInfo);
    return (
      <li key={repo.id}>
        <a href={repo.html_url}>{repoInfo}</a>
        {repo.description}
      </li>
    );
  });

  return (
    <div>
      <h3>Most Popular JavaScript Projects on Github</h3>
      <ul>{repoList}</ul>
    </div>
  );
};

VisualRepositoryList.propTypes = {
  repositories: PropTypes.array.isRequired
};

export default VisualRepositoryList;
