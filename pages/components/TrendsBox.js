const TrendsBox = ({ info }) => {
    return (
        <div className="trends-box">
            {info.locations && <h3 className="trends-box__title"><img src="./twitter.svg" />{info.locations[0].name} Trends</h3>}
            <ul className="trends-box__trends">
                {

                    info.trends && info.trends.map(function (item, index) {
                        if (!item.tweet_volume) return;
                        return <li key={index}>
                            <a href={item.url} target="_blank" rel="noopener">
                                <p>{item.name}</p>
                                <small>{item.tweet_volume && new Intl.NumberFormat(['ban', 'id']).format(item.tweet_volume)} Tweet</small>
                            </a>
                        </li>;
                    })
                }
            </ul>
        </div>
    )
}

export default TrendsBox