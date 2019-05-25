import React, { Fragment } from 'react';
import api from '../api';

import Loading from './Loading';
import DisplayError from './DisplayError';
import Header from './Header';
import Articles from './Articles';

class App extends React.Component {
  state = {
    articles: [], // holds list of articles returned by api
    selectedArticle: null, // holds current selected article from the list
    expandedText: false, // checks if the article is expanded with full description in ArticleDetails
    error: false, // checks if there is error in api fetching data
    loading: true, // flag to render loader while data is being fetch
  };

  // Fetching data and error checking
  async componentDidMount() {
    try {
      let response = await api.get();
      this.setState({
        articles: response.data.articles, //setting articles
        selectedArticle: response.data.articles[0], // selected first article from the list
        loading: false,
      });
    } catch (err) {
      this.setState({
        error: true,
        loading: false,
      });
    }
  }

  /**
   * Update ArticleDetails when new article selected
   */
  onArticleSelect = article => {
    this.setState({ selectedArticle: article, expanded: false });
  };

  /**
   * Expand text when Read more button is clicked in ArticleDetails component
   */
  expandedText = () => {
    this.setState({
      expanded: true,
    });
  };

  /**
   * Conditionally redering content
   */
  renderContent() {
    const { articles, expanded, selectedArticle, error, loading } = this.state;
    if (loading) {
      return <Loading />; // Till data is being fetched, display loading
    }
    if (error) {
      return <DisplayError />; // Error in fetching data, display error message
    } else {
      return (
        // Display Articles/News
        <Articles
          articles={articles}
          expanded={expanded}
          selectedArticle={selectedArticle}
          onArticleSelect={this.onArticleSelect}
          expandedText={this.expandedText}
        />
      );
    }
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container main-content">{this.renderContent()}</div>
      </Fragment>
    );
  }
}

export default App;
