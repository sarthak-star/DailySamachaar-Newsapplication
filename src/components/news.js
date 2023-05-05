import React, { useEffect, useState } from 'react';
import Newsitem from "./newsitem";
import Loader from './loader';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


const alturl = "https://upload.wikimedia.org/wikipedia/commons/7/75/No_image_available.png";

function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setpage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  

  

  useEffect(() => {
      async function fetchNews(){
        setpage(page+1)
      const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=485f901704964c1c8e9768b00d2d06c3&pageSize=15&category=${props.category}&page=${page}`;
      setLoading(true);
      let data = await fetch(url);
      let parsedata = await data.json();
      setArticles(parsedata.articles);
      setTotalResults(parsedata.totalResults)
      setLoading(false);
      document.title = `Dailysamachaar-${props.category}`;
      
    }

    
    fetchNews();
    
  },[props.category]);


  const fetchMoreData = async () => {
      
      setpage(page+1)
      const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=485f901704964c1c8e9768b00d2d06c3&pageSize=15&category=${props.category}&page=${page}`;
      
      
      let data = await fetch(url);
      let parsedata = await data.json();
      setArticles(articles.concat(parsedata.articles));
      setTotalResults(parsedata.totalResults);
      setLoading(false);
    
    
  };

  

  return (
    <>
    
      <h1 className='text-center my-3' style={{color:'#674188',textDecoration:'underline'}}>Top {props.category} Headlines</h1>
      <div className="text-center"> {loading && <Loader />}</div>
      <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Loader/>}
        >
      <div className="container">
        <div className="row">
        {articles.map((element) => {
          return (
            <div className="col-md-4 my-3" key={element.url}>
              <Newsitem
                source={element.source.name}
                author={element.author}
                newsurl={element.url}
                imgurl={element.urlToImage ? element.urlToImage : alturl}
                title={element.title}
                desc={element.description ? element.description.slice(0, 90) : " "}
              />
            </div>
          );
        })}
      </div>
      </div>
      </InfiniteScroll>
      </>
  );
}

News.defaultProps = {
  category: 'general',

};

News.propTypes = {
  category: PropTypes.string
};

export default News;
