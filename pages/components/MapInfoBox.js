const MapInfoBox = ({ info }) => {
    return (
        <div className="map-info-box">
            {info.locations && <h3>{info.locations[0].name} Trends</h3>}
            <ul>
                {

                    info.trends && info.trends.map(function (item, index) {
                        if (!item.tweet_volume) return;
                        return <li key={index}>
                            <a href={item.url} target="_blank" rel="noopener">
                                <p>{item.name}</p>

                                <small>{item.tweet_volume && item.tweet_volume} Tweet</small>
                            </a>
                        </li>;
                    })
                }
            </ul>
        </div>
    )
}

export default MapInfoBox