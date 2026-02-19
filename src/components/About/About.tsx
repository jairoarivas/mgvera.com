import { useState } from "react";
import { SectionTopper } from "../shared/Section/SectionTopper";
import { Section } from "../shared/Section/Section";
import styles from "./About.module.css";
import { Button } from "../shared/Button/Button";
import { Image } from "../shared/Image";

export function About (){
    const [selectedTab, setSelectedTab] = useState(0);

    const tabs = [
        {
            heading: "Experience That Endures",
            index: "01",
            imageAlt: "Surveying crew in the field",
            imageAvifSrcSet: "/images/about/history-480.avif 480w, /images/about/history-960.avif 960w, /images/about/history-1440.avif 1440w",
            imageWebpSrcSet: "/images/about/history-480.webp 480w, /images/about/history-960.webp 960w, /images/about/history-1440.webp 1440w",
            imageFallbackJpg: "/images/about/history.jpg",
            cta: {
                label: "Learn More",
                href: "",
            },
            body: (
                <>
                    <p>Since 1973, Manuel G. Vera & Associates, Inc. (MGV) has delivered trusted Surveying and Mapping services across Florida. Built on precision, innovation, and enduring partnerships, we've earned decades-long partnerships—including continuous selection by FDOT District Six since 1997.</p>
                    <p>Learn how our experience drives project success.</p>
                </>
            ),
        },
        {
            heading: "Family-Led. Proven Results.",
            index: "02",
            imageAlt: "MGV family team portrait",
            imageAvifSrcSet: "/images/about/family-480.avif 480w, /images/about/family-960.avif 960w, /images/about/family-1440.avif 1440w",
            imageWebpSrcSet: "/images/about/family-480.webp 480w, /images/about/family-960.webp 960w, /images/about/family-1440.webp 1440w",
            imageFallbackJpg: "/images/about/family.jpg",
            cta: {
                label: "Meet the Team",
                href: "",
            },
            body: (
                <>
                    <p>Founded by Manuel G. Vera, MGV was built on integrity, reliability, and hands-on leadership. His commitment to quality and relationships continues to guide the company today.</p>
                    <p>Meet the rest of the team who carry that legacy forward.</p>
                </>
            ),
        },
    ];

    return(
        <Section className={styles.section}>
            <SectionTopper
                name="About"
                heading="Surveying Florida for Over 50 Years"
                subheading="Family-owned. Technology-driven. Trusted by Florida's largest agencies."
                // cta={{
                //     "label": "Discuss your project",
                //     "href": "",
                // }}
            />
            <div className={styles.contentRoot}>
                <div className={styles.tabList}>
                    {tabs.map((tab, index) => {
                        const isSelected = selectedTab === index;
                        return (
                            <div
                                key={tab.heading}
                                className={`${styles.tabItem} ${isSelected ? styles.tabItemSelected : ""}`}
                                onClick={() => setSelectedTab(index)}
                                onKeyDown={(event) => {
                                    if (event.key === "Enter" || event.key === " ") {
                                        event.preventDefault();
                                        setSelectedTab(index);
                                    }
                                }}
                                role="button"
                                tabIndex={0}
                                aria-pressed={isSelected}
                            >
                                <div className={styles.tabItemHeading}>
                                    <h3>{tab.heading}</h3>
                                    <div>{tab.index}</div>
                                </div>
                                <div className={styles.tabItemContent}>
                                    {tab.body}
                                </div>
                                <Button className={styles.button}
                                    label={tab.cta.label}
                                    href={tab.cta.href}
                                />
                            </div>
                            );
                        })}
                </div>
                <div className={styles.tabImagePane}>
                    <Image
                        className={styles.tabImage}
                        avifSrcSet={tabs[selectedTab].imageAvifSrcSet}
                        webpSrcSet={tabs[selectedTab].imageWebpSrcSet}
                        fallbackJpg={tabs[selectedTab].imageFallbackJpg}
                        alt={tabs[selectedTab].imageAlt}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        position="50% 50%"
                    />
                </div>
            </div>
        </Section>
    );
}
