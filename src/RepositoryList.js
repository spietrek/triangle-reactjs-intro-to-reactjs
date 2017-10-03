import React from 'react';
import PropTypes from 'prop-types';

const RepositoryList = (props) => {
  const { repositories } = props;
  const repoList = repositories.map(repo => (
    <li key={repo.id}>
      <a href={repo.html_url}>{repo.name}</a> ({repo.stargazers_count} stars) <br />
      {repo.description}
    </li>
  ));

  return (
    <div>
      <h3>Most Popular JavaScript Projects in Github</h3>
      <ul>{repoList}</ul>
    </div>
  );
};

RepositoryList.propTypes = {
  repositories: PropTypes.array.isRequired
};

export default RepositoryList;
