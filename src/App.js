import user from "./components/Profile/user.json";
import statisticalData from "./components/Statistics/statistical-data.json";
import friends from "./components/FriendList/friends.json";
import transactions from "./components/Transaction/transactions.json";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendsList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/Transaction/TransactionHistory";
import Container from "./components/Container/Container";

const App = () => {
    return (
        <>
            <Container widthContainer="1200px">
                <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            </Container>
            <Container widthContainer="800px">
                <Statistics stats={statisticalData} />
            </Container>

            <Container widthContainer="800px">
                <FriendsList friends={friends} />
            </Container>
            <Container widthContainer="1000px">
                <TransactionHistory items={transactions} />
            </Container>
        </>
    );
};
export default App;