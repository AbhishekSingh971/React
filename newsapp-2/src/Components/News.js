// API KEY = 25e77ecdcf084a499388777ec111c2fa
import React, { useState } from 'react';
import NewsElement from './NewsElement';
import propTypes from 'prop-types';

const News = (props) => {
    const { apiKey, country, category, pageSize } = props;
    const [articles, setArticles] = useState([]);
    


    const updateNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=3d708c4f0eb94732ad13ff3f0f986a58&pageSize=${pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json();
        setArticles(parseData.articles);
        console.log(articles);
    }

    updateNews()

    return (
        <>
            <h2 className='h1 text-danger text-center' style={{ marginTop: "80px" }}>NewsDekho - Top Science Headlines</h2>

            <div className='container'>
                <div className="row">
                    {articles.map((element) => {
                        return (
                            <div key={element.url} className="col-sm-4">
                                <NewsElement
                                    title={element.title}
                                    description={element.description}
                                    imageUrl={element.urlToImage}
                                    alt="img.jpg"
                                    newsUrl={element.url}
                                    author={element.author ? element.author : "Unknown"}
                                    date={element.publishedAt}
                                    source={element.source.name}
                                />
                            </div>
                        );
                    })
                    }
                </div>
            </div>
        </>
    )
};

News.defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general',
};

News.propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
    cetegory: propTypes.string,
}

export default News;