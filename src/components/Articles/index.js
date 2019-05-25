import React, { Fragment } from 'react';

import ArticlesList from './ArticlesList';
import ArticleDetail from './ArticleDetail';

const Articles = ({
  articles,
  onArticleSelect,
  selectedArticle,
  expanded,
  expandedText,
}) => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-2">
          <h1>Saatva News</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-7 col-md-7 col-sm-7">
          <div className="list-group">
            <ArticlesList
              onArticleSelect={onArticleSelect}
              selectedArticle={selectedArticle}
              articles={articles}
            />
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-5 d-none d-sm-block">
          <div className="tab-content bg-white p-3">
            <ArticleDetail
              article={selectedArticle}
              expanded={expanded}
              expandedText={expandedText}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Articles;
