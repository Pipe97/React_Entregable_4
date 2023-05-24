import "./UserList.css";

const UserList = ({ users, onEditUser, onDeleteUser }) => {
  if (!users.length) return <p>Sin usuarios</p>;

  return (
    <ul className="list">
      {users.map((user) => (
        <li key={user.id}>
          <article>
            <h2>{user.first_name}</h2>

            <h3>Correo Electrónico</h3>
            <p>{user.email}</p>

            <h3>Cumpleaños</h3>
            <p>{user.birthday}</p>

            <div>
              <button onClick={() => onDeleteUser(user.id)}>Eliminar</button>
              <button onClick={() => onEditUser(user)}>Editar</button>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
