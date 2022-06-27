import React, { FC, useContext } from 'react'
import TwitterLoader from './TwitterLoader'
import Footer from './Footer'
import Eye from './Eye'
import { getFlagEmoji } from '../helpers/getFlagEmoji'
import { GlobalContext } from '../store/index'
import CountrySelect from './CountrySelect'

interface TrendsBoxProps {
    info?: any,
    flag?: string,
    loading?: boolean,
}

const TrendsBox : FC<TrendsBoxProps> = ({ info, flag, loading }) => {
  const { trendsBoxVisibility, setTrendsBoxVisibility } = useContext(GlobalContext)

  return (
        <>
            <Eye onClick={() => setTrendsBoxVisibility(!trendsBoxVisibility)} />
            {
                trendsBoxVisibility &&

                <section className="box">
                    <header><h1>Twitter Trends</h1></header>

                    <div className="trends-box">
                        <CountrySelect />
                        {info &&
                            <h3 className="trends-box__title">
                                {getFlagEmoji(flag)}
                                {info.locations[0].name} Trends
                            </h3>
                        }
                        <ul className="trends-box__trends">
                            {
                                info
                                  ? info.trends.map(function (item, index) {
                                    return item.tweet_volume && <li key={index}>
                                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                                            <p>{item.name}</p>
                                            <small>{item.tweet_volume && new Intl.NumberFormat(['ban', 'id']).format(item.tweet_volume)} Tweet</small>
                                        </a>
                                    </li>
                                  })
                                  : <li><a><p>😞 No trend found</p></a></li>
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

export default TrendsBox
