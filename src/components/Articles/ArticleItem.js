import React, { Fragment } from 'react';
import moment from 'moment';

class ArticleItem extends React.Component {
  /**
   * State here is used to handle the onHover effect for articleItem.
   * onHover, background image is being applied
   */
  state = {
    hover: false,
  };

  hoverOn = () => {
    this.setState({ hover: true });
  };

  hoverOff = () => {
    this.setState({ hover: false });
  };

  /**
   * Conditional rendering of article item based on resolution.
   * Using Bootstrap css renderDesktop will render for Desktop and ipad screens.
   */
  renderDesktop() {
    const { article } = this.props;
    return (
      <Fragment>
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">
            <a
              href={article.url}
              className="primary-color"
              target="_blank"
              rel="noopener noreferrer"
            >
              {article.title}
            </a>
          </h5>
          <small>{moment(article.publishedAt).calendar()}</small>
        </div>
        <p className="mb-1">{article.description}</p>
        <small className="primary-color">{article.author}</small>
      </Fragment>
    );
  }

  /**
   * Conditional rendering of article item based on resolution.
   * Using Bootstrap css renderMobile will render for mobile screens.
   */
  renderMobile() {
    const { article, id } = this.props;
    return (
      <Fragment>
        <div className="card-header">
          <h5 className="mb-0">
            <button
              className="btn btn-link primary-color"
              type="button"
              data-toggle="collapse"
              data-target={`#collapse${id}`}
              aria-expanded="true"
              aria-controls={`collapse${id}`}
            >
              {article.title}
            </button>
          </h5>
        </div>

        <div
          id={`collapse${id}`}
          className={id === 0 ? 'collapse show' : 'collapse'}
          aria-labelledby="headingOne"
          data-parent="#articleList"
        >
          <div className="card-body">
            <div className="text-center pb-2">
              <img
                src={article.urlToImage}
                alt={article.title}
                className="img-fluid"
              />
            </div>
            <p>{article.description}</p>
            <a
              className="read-more-btn"
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More +
            </a>
          </div>
        </div>
      </Fragment>
    );
  }

  render() {
    const { article, onArticleSelect, selectedArticle } = this.props;
    const { hover } = this.state;

    let hoverStyle = {};
    const isSelected = selectedArticle === article;
    let hoverClass = '';

    // add style to articleitem onHover and add active class to handle css
    if (hover || isSelected) {
      hoverStyle = {
        background: `url(${article.urlToImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color: '#ffffff',
        transition: 'all 1s ease-in 0s',
        boxShadow: '0 8px 6px -6px black',
      };
      hoverClass = 'active';
    }

    return (
      <Fragment>
        {/*  This div will render will display for desktop and ipad resolutions */}
        <div
          className={`list-group-item list-group-item-action mb-3 d-none d-sm-block ${hoverClass}`}
          onClick={() => onArticleSelect(article)}
          onMouseEnter={this.hoverOn}
          onMouseLeave={this.hoverOff}
          style={hoverStyle}
        >
          {this.renderDesktop()}
        </div>

        {/*  This div will render will display for mobile resolutions */}
        <div className="card d-sm-none mb-3">{this.renderMobile()}</div>
      </Fragment>
    );
  }
}
export default ArticleItem;
