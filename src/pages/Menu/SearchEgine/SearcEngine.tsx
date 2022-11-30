import styles from "./SearchEngine.module.scss"
 
interface Props {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchEngine({ search, setSearch }: Props) {
    return (
        <div className={styles.searchEngine}>
            <input 
               value={search}
               onChange={(event) => setSearch(event.target.value)} />

        </div>
    )
}