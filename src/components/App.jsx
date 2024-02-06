import userData from "../json/userData.json";
import friends from "../json/friends.json";
import transactions from "../json/transactions.json";
import { Profile } from "./Profile/Profile";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
function App() {
  return (
    <>
      <Profile
        name={userData.username}
        image={userData.avatar}
        tag={userData.tag}
        location={userData.location}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
