import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageCando from "@site/src/components/HomepageCando";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <img src="img/svg.svg" alt="logoTeste" />
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className="container--flex">
                    <pre>
                        <code>go get github.com/Hublastt/ValidGen</code>
                    </pre>
                    {/* <div className="mini--container row justify--space-evenly">
                        <div className={styles.buttons}>
                            <Link
                                className="button button--primary button--lg"
                                to="/docs/intro"
                            >
                                botao primario
                            </Link>
                        </div>
                        <div className={styles.buttons}>
                            <Link
                                className="button button--secondary button--lg"
                                to="/docs/intro"
                            >
                                botao secundario
                            </Link>
                        </div>
                    </div> */}
                </div>
            </div>
        </header>
    );
}

export default function Home(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />"
        >
            <HomepageHeader />
            <main>
                <HomepageCando />
            </main>
        </Layout>
    );
}
