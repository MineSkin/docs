import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={ clsx('hero hero--primary', styles.heroBanner) }>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    { siteConfig.title }
                </Heading>
                <p className="hero__subtitle">{ siteConfig.tagline }</p>
                <div className={ styles.buttons }>
                    <Link
                        className="button button--secondary button--lg margin--md"
                        to="/docs/guides/getting-started">
                        Getting Started 🚀
                    </Link>
                    <Link
                        className="button button--secondary button--lg margin--md"
                        to="/docs/category/mineskin-api">
                        API Reference 📃
                    </Link>
                    <Link
                        className="button button--secondary button--lg margin--md"
                        to="/docs/category/wiki">
                        Wiki 📚
                    </Link>
                    <Link
                        className="button button--secondary button--lg margin--md"
                        to="/docs/category/wiki/faq">
                        FAQ ❓
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={ 'MineSkin' }
            description={ siteConfig.tagline }>
            <HomepageHeader/>
            {/*<main>*/ }
            {/*  <HomepageFeatures />*/ }
            {/*</main>*/ }
        </Layout>
    );
}
