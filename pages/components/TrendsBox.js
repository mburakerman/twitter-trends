import { useState } from 'react'

import TwitterLoader from './TwitterLoader'
import Footer from './Footer'
import Eye from './Eye'


const TrendsBox = ({ info, flag, loading }) => {
    const [boxVisibility, setBoxVisibility] = useState(true);

    const toggleBox = () => {
        setBoxVisibility(!boxVisibility);
    }
    return (
        <>
            <Eye onClick={toggleBox} />

            {
                boxVisibility &&

                <section className="box">
                    <header><h1>Twitter Trends</h1></header>

                    <div className="trends-box">
                        {info &&
                            <h3 className="trends-box__title">
                                {flag && <img src={flag} width="20" loading="lazy" />}
                                {info.locations[0].name} Trends
                            </h3>
                        }
                        <ul className="trends-box__trends">
                            {
                                info ? info.trends.map(function (item, index) {
                                    if (!item.tweet_volume) return;
                                    return <li key={index}>
                                        <a href={item.url} target="_blank" rel="noopener">
                                            <p>{item.name}</p>
                                            <small>{item.tweet_volume && new Intl.NumberFormat(['ban', 'id']).format(item.tweet_volume)} Tweet</small>
                                        </a>
                                    </li>;
                                }) : <li><a><p>😞 No trend found</p></a></li>
                            }
                        </ul>
                        {loading && <TwitterLoader />}
                    </div>

                    <Footer />
                </section>
            }
        </>
    )
}

export default TrendsBox;