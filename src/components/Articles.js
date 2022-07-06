import React from 'react'
import currency from '../assets/image-currency.jpg';
import restaurant from '../assets/image-restaurant.jpg'
import plane from '../assets/image-plane.jpg'
import confetti from '../assets/image-confetti.jpg'
import ArticleItem from './ArticleItem';
import '../components/Articles.css'


function Articles(props) {
    return (
        <>
            <div className='articlesContainer'>
                <div className="container">
                    <div className="row">
                        <div className="col-md">
                            <h2 className='headerHeading my-5'>Latest Articles</h2>
                        </div>
                        <div className="col-md">
                            &nbsp;
                        </div>

                    </div>
                    <div className="row my-2 articlesCardSection">
                        <div className="col-md">
                            <ArticleItem articleImage={currency}
                                articleAuthor="By Claire Robinson"
                                articleTitle="Recieve money in any currency with no fees."
                                articleDescription="The world is getting smaller and we're becoming more mobile. So why should you be forced to only recieve money in single... " />
                        </div>
                        <div className="col-md">
                            <ArticleItem articleImage={restaurant}
                                articleAuthor="By Wilson Hutton"
                                articleTitle="Treat yourself without worrying about money."
                                articleDescription="Our simple budgeting feature allows you to seperate out your spending and set realistic limits each month. That means you..." />
                        </div>
                        <div className="col-md">
                            <ArticleItem articleImage={plane}
                                articleAuthor="By Wilson Hutton"
                                articleTitle="Take your Easybank card wherever you go"
                                articleDescription="We want you to enjoy your travels. This is why we don't charge any fees on purchases whil you're abroad. We'll even show you..." />
                        </div>
                        <div className="col-md">
                            <ArticleItem articleImage={confetti}
                                articleAuthor="By Claire Robinson"
                                articleTitle="Our invite-only beta accounts are now live!"
                                articleDescription="After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site..." />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Articles