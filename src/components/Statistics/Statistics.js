import PropTypes from "prop-types";
import styles from "./statistics.module.css";

// const backgroundStyle = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')' ;

const Statistics = ({ title, stats }) => (
    <section className={styles.statistics}>
        <h2 className={styles.title}>{title}</h2>
        <ul className={styles.stat__list}>
            {stats.map(({ id, label, percentage }) => {
                const backgroundStyle = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
                return (
                <li key={id} className={styles.item} style={{
                    backgroundColor: backgroundStyle
                }}>
                    <span className={styles.label}>{label}</span>
                    <span className={styles.percentage}>{percentage}%</span>
                </li>
                )}
            )}
        </ul>
    </section>
);

Statistics.defaultProps = {
    title: "Upload stats",
}
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ),
};
export default Statistics;
