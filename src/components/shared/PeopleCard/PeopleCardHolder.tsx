import { useState } from "react";
import { Button } from "../Button/Button";
import { PeopleCard, PeopleCardProps } from "./PeopleCard";
import styles from "./PeopleCardHolder.module.css";

export type PeopleHolderProps = {
    items: PeopleCardProps[]
}

const INITIAL_VISIBLE_COUNT = 12;

export function PeopleCardHolder (props: PeopleHolderProps){
    const [showAll, setShowAll] = useState(false);

    const visibleItems = showAll
        ? props.items
        : props.items.slice(0, INITIAL_VISIBLE_COUNT);

    const hasMorePeople = props.items.length > INITIAL_VISIBLE_COUNT;

    return(
        <div className={styles.root}>
            <div className={styles.inner}>
                 {visibleItems.map(item => 
                    <PeopleCard
                        key={item.name}
                        name={item.name}
                        role={item.role}
                        image={item.image}
                    />
                )}
            </div>
            {hasMorePeople && !showAll && (
                <div className={styles.actions}>
                    <Button
                        label="Load More"
                        href="#"
                        size="lg"
                        className={styles.loadMoreButton}
                        onClick={(event) => {
                            event.preventDefault();
                            setShowAll(true);
                        }}
                    />
                </div>
            )}
        </div>
    );
}
