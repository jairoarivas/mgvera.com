import styles from "./SectionContent.module.css";



export function SectionContent ({children, className}:{
        children: React.ReactNode,
        className: string
    }){
    return(
        <div className={`${styles.root} ${className ?? ""}`}>
            {children}
        </div>
    );
}