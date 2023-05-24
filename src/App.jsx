import { useEffect, useState } from "react";
import { getAllUsers } from "./services/getAllUsers";
import { createUser } from "./services/createUser";

import Header from "./components/Header/Header";
import UserList from "./components/UserList/UserList";
import Modal from "./components/Modal/Modal";
import UserForm from "./components/UserForm/UserForm";

import "./App.css";
import { deleteUser } from "./services/deleteUser";
import { updateUser } from "./services/updateUser";

function App() {
  const [users, setUsers] = useState([]);
  useState;
  const [isVisible, setIsVisible] = useState(false);
  const [editingUserData, setEditingUserData] = useState(null);

  const loadUsers = async () => {
    const userData = await getAllUsers();
    setUsers(userData);
  };

  const handleCloseModal = () => {
    setEditingUserData(null);
    setIsVisible(false);
  };

  const handleCreate = () => {
    setIsVisible(true);
  };

  const handleSend = async (data) => {
    if (data.id) await updateUser(data.id, data);
    else await createUser(data);
    await loadUsers();
    setIsVisible(false);
  };

  const handleEditUser = (dataUser) => {
    setIsVisible(true);
    setEditingUserData(dataUser);
  };

  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    await loadUsers();
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      <Header onCreate={handleCreate}></Header>
      <UserList
        users={users}
        onEditUser={handleEditUser}
        onDeleteUser={handleDeleteUser}
      />
      <Modal isVisible={isVisible}>
        <UserForm
          onClose={handleCloseModal}
          onSend={handleSend}
          initialData={editingUserData}
        />
      </Modal>
    </>
  );
}

export default App;
