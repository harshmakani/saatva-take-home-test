import React, { Fragment } from 'react';
import Loading from '../Loading';

class ArticleDetail extends React.Component {
  /**
   * Call expandText from parent component and display full Long Description
   */
  expandedText = () => {
    this.props.expandedText();
  };

  /**
   * Displays description of article with read more button by default
   */
  renderDescription = () => {
    const { article, expanded } = this.props;

    // if expanded show full long description
    if (expanded) {
      return (
        <div
          className="long-description pt-2"
          dangerouslySetInnerHTML={{ __html: article.long_description }}
        />
      );
    } else {
      return (
        <Fragment>
          <div
            className="long-description pt-2"
            dangerouslySetInnerHTML={{
              __html: article.long_description.substr(0, 200) + '...',
            }}
          />
          <button className="read-more-btn" onClick={this.expandedText}>
            Read more +
          </button>
        </Fragment>
      );
    }
  };

  render() {
    const { article } = this.props;
    if (!article) {
      return <Loading />;
    }
    return (
      <Fragment>
        <h3 className="primary-color">{article.title}</h3>
        <h5>{article.author}</h5>
        <div className="text-center">
          <img
            src={article.urlToImage}
            alt={article.title}
            className="img-fluid"
          />
        </div>
        {this.renderDescription()}
      </Fragment>
    );
  }
}

export default ArticleDetail;
