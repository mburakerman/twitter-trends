import TwitterLoader from './TwitterLoader'
import Footer from './Footer'
import Eye from './Eye'
import { createState, useState } from '@hookstate/core';


// trendsBoxVisibility as global state
const globalState = createState(true);
const wrapState = (s) => ({
    get: () => s.value,
    show: () => s.set(true)
});
// import and use it in another component
export const useGlobalState = () => wrapState(useState(globalState));

function getFlagEmoji(countryCode){
    const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char =>  127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints) + ' ';
}

const TrendsBox = ({ info, flag, loading }) => {
    const trendsBoxVisibility = useState(globalState);

    const toggleBox = () => {
        trendsBoxVisibility.set(!trendsBoxVisibility.get());
    }
    return (
        <>
            <Eye onClick={toggleBox} />

            {
                trendsBoxVisibility.get() &&

                <section className="box">
                    <header><h1>Twitter Trends</h1></header>

                    <div className="trends-box">
                        {info &&
                            <h3 className="trends-box__title">
                                {getFlagEmoji(flag)}
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