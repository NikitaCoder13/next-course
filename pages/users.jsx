import Link from "next/link";
import MainContainer from "../src/components/MainContainer";

const users = ({ users }) => {
  return (
    <MainContainer keywords={"Fast Course, Ulbi TV, Nikita, users page"}>
      <h1>Users page</h1>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            <Link href={`/users/${u.id}`}>
              <a>{u.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainContainer>
  );
};

export async function getStaticProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return {
    props: { users },
  };
}

export default users;
