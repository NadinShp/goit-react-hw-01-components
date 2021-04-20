import PropTypes from "prop-types";
import defaultImage from "../../images/defaultImg.jpg";
import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, avatar, stats: { followers, views, likes } }) => (
    <div className={styles.wrapper}>
        <div className={styles.profile}>
            <div className={styles.description}>
                <img
                    src={avatar}
                    alt={`Аватар пользователя ${name}`}
                    className={styles.avatar}
                />
                <h1 className={styles.name}>{name}</h1>
                <p className={styles.tag}>@{tag}</p>
                <p className={styles.location}>{location}</p>
            </div>
            <ul className={styles.stats}>
                <li>
                    <span className={styles.label}>Followers</span>
                    <span className={styles.quantity}>{followers}</span>
                </li>
                <li>
                        <span className={styles.label}>Views</span>
                        <span className={styles.quantity}>{views}</span>
                    </li>
                <li>
                        <span className={styles.label}>Likes</span>
                        <span className={styles.quantity}>{likes}</span>
                    </li>
            </ul>
        </div>
    </div>

);

Profile.defaultProps = {
    avatar: defaultImage,
}
Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
};
export default Profile