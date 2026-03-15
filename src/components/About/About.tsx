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
                    <p>Manuel G. Vera & Associates, Inc. (MGV) has provided trusted Surveying and Mapping services since 1977. Over the past 45+ years, our firm has grown to include more than 80 experienced professionals and senior personnel, many with 10 to over 45 years of industry expertise. This depth of experience has enabled us to expand beyond traditional surveying to include Subsurface Utility Engineering (SUE), Utility Coordination (UC), and permitting services—allowing us to deliver comprehensive solutions for surveying and infrastructure needs throughout the State of Florida.</p>
                    <p>Learn how our experience drives project success.</p>
                </>
            ),
        },
        {
            heading: "Family-Led",
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
                    <p>Manuel G. Vera Sr. first learned the principles and practices of surveying while serving in the United States Air Force during the Vietnam War. Following his military service, he carried forward the discipline, precision, and leadership he developed in the Air Force and founded M.G. Vera & Associates in 1973. Today, the company is led by his children, Maria Vera and Manny Vera Jr., who proudly continue their father’s legacy. Under their leadership, the firm has grown into the largest survey-only company in the State of Florida, built on a foundation of integrity, expertise, and dedication to the surveying profession.</p>
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
                                    {!isSelected ? (
                                        <svg
                                            className={styles.tabItemToggleIcon}
                                            aria-hidden="true"
                                            focusable="false"
                                        >
                                            <use href="#+" />
                                        </svg>
                                    ) : null}
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
                        sizes="(max-width: 899px) 100vw, 50vw"
                        position="50% 50%"
                    />
                </div>
            </div>
        </Section>
    );
}
