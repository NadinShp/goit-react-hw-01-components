import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import styles from "./FriendList.module.css";

const FriendsList = ({ friends }) => (
    <ul className={styles.friend__list}> {
        friends.map(({ id, avatar, name, isOnline }) => (
            <li className={styles.item} key={id}>
            <FriendListItem
                id={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
            />
            </li>
            ))
        }
        </ul>
    );
FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    )
};
export default FriendsList;