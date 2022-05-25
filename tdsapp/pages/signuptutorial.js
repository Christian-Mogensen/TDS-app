// components
// hooks
import Auth from "../components/FormComp/auth";
import Online from "../components/FormComp/Online";
import { useUserContext } from "../context/userContext";

export default function signuptutorial() {
  const { loading, error, user } = useUserContext();
  return (
    <div className="m-auto w-80">
      {error && <p>{error}</p>}
      {loading ? <h2>loading...</h2> : <>{user ? <Online /> : <Auth />}</>}
    </div>
  );
}
