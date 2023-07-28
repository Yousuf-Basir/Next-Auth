import axios from "axios";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await axios.post("/api/logout");
      if (response.status === 200) {
        router.replace("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Next Auth</h1> <br />
      <a href="/auth/login">Login page</a> <br />
      <a href="/protected">Protected</a> <br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
