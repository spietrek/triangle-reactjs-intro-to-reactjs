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
    const { data } = this.state;
    if (this.state.loading) {
      return <span>Loading...</span>;
    } else if (this.state.error !== null) {
      return <span>Error: {this.state.error.message}</span>;
    }
    return (
      <main>
        <h1>Most Popular JavaScript Projects in Github</h1>
        <RepositoryList repositories={data.items} />
      </main>
    );
  }
}

export default Demo7;
