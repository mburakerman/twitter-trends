const Footer = () : JSX.Element => (
        <footer>
            <details>
                <summary>What is this?</summary>
                <p>Twitter Trends is an app where you click on a map and shows you the closest area's current Twitter trending topics and hashtags.</p>
            </details>
            <div className="footer__bottom">
                <p>Made with <a href="https://developer.twitter.com/en/docs/twitter-api" target="_blank" rel="noopener">
                    <img src="./twitter.svg" width="12" /> Twitter API</a>
                </p>
                <p><a href="https://mburakerman.github.io" target="_blank" rel="noopener">Mehmet Burak Erman</a></p>
            </div>
        </footer>
);

export default Footer;
