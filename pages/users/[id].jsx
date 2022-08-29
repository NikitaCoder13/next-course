import { useRouter } from "next/router";
import MainContainer from "../../src/components/MainContainer";
import styles from "../../src/styles/User.module.scss";

export default function User({ user }) {
  const { query } = useRouter();
  return (
    <MainContainer keywords={"Fast Course, Ulbi TV, Nikita, " + user.name}>
      <div className={styles.user}>
        <h1>User with id {query.id}</h1>
        <h2>User`s name - {user.name}</h2>
      </div>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + params.id
  );
  const user = await res.json();
  return {
    props: { user },
  };
}
