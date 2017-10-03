import React, { Component } from 'react';
import RepositoryList from './RepositoryList';

class Demo7 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      data: null
    };
  }

  componentDidMount() {
    const url = 'https://api.github.com/search/repositories?q=javascript&sort=stars';
    fetch(url)
      .then(response => response)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          loading: false,
          data
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          error
        });
      });
  }

  render() {
    const { loading, error, data } = this.state;

    if (loading) {
      return <span>Loading...</span>;
    }

    if (error !== null) {
      return <span>Error: {error.message}</span>;
    }

    return (
      <div>
        <h1>DEMO 7</h1>
        <RepositoryList repositories={data.items} />
      </div>
    );
  }
}

export default Demo7;
