import React, { Fragment } from 'react';
import ArticleItem from './ArticleItem';

const ArticlesList = ({ articles, onArticleSelect, selectedArticle }) => {
  /**
   * Iterate over articles array and create article item
   */
  const renderedList = articles.map((article, id) => {
    return (
      <ArticleItem
        article={article}
        onArticleSelect={onArticleSelect}
        selectedArticle={selectedArticle}
        key={id}
        id={id}
      />
    );
  });

  return (
    <Fragment>
      <div className="accordion" id="articleList">
        {renderedList}
      </div>
    </Fragment>
  );
};
export default ArticlesList;
