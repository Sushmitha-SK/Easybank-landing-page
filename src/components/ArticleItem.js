import React from 'react'
import '../components/ArticleItem.css'

function ArticleItem(props) {
    return (
        <div className="card articlesCard">
            <img src={props.articleImage} className="card-img-top" style={{ height: '250px' }} alt="" />
            <div className="card-body my-2">
                <h6 className='card-text text-start authorName'>{props.articleAuthor}</h6>
                <h5 className="card-title cardHeader"><a href=''>
                    {props.articleTitle}</a></h5>
                <p className="card-text cardText">{props.articleDescription}</p>
            </div>
        </div>
    )
}

export default ArticleItem