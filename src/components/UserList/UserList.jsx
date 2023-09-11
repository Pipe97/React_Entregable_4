import "./UserList.css";

const UserList = ({ users, onEditUser, onDeleteUser }) => {
  if (!users.length)
    return (
      <div className="loader">
        <p>Sin usuarios</p>
      </div>
    );
  return (
    <ul className="user_list">
      {users.map((user) => (
        <li key={user.id} className="user_card">
          <h2 className="user_card__full_name">
            {user.first_name} {user.last_name}
          </h2>
          <div className="user_card__data">
            <h3>Correo Electrónico</h3>
            <p>{user.email}</p>

            <h3>Cumpleaños</h3>
            <p>{user.birthday}</p>
          </div>

          <div className="user_card__buttons">
            <button onClick={() => onDeleteUser(user.id)}><i className="fa-solid fa-trash"></i></button>
            <button onClick={() => onEditUser(user)}><i className="fa-solid fa-pen-to-square"></i></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
