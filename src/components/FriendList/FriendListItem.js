import styles from "./FriendList.module.css";
const FriendListItem = ({ avatar, name, isOnline }) => {
    const statusClasses = [styles.status];
    isOnline ? statusClasses.push(styles.active) : statusClasses.push(styles.not__active)
    return (
        <>
            <span className={statusClasses.join(' ')}>{isOnline}</span>
            <img className={styles.avatar}
                src={avatar}
                alt={name}
                width={48}
            />
            <p className={styles.name}>{name}</p>
        </>
    )
};

export default FriendListItem;