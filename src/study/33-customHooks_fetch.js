import { useFetch } from "./hooks/33-customHooks_fetch/useFetch";

function App() {
  const {data: userData} = useFetch('users');
  const {data: postData} = useFetch('posts');
  const {data: todoData} = useFetch('todos');

  return (
    <>
      <div>
        <h1>User</h1>
        {userData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>}
        <br />
        <h1>Post</h1>
        {postData && <pre>{JSON.stringify(postData[0], null, 2)}</pre>}
        <br />
        <h1>Todo</h1>
        {todoData && <pre>{JSON.stringify(todoData[0], null, 2)}</pre>}
      </div>
    </>
  );
}

export default App;