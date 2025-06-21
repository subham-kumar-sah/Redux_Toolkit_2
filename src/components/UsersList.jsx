import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../features/todo/usersSlice";
const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <h2 className="user-header">Users</h2>
      <ul className="user-list">
        {users.map((user) => (
          <li className="list-item" key={user.id}>
            <div className="user-name">{user.name}</div>
            <div className="user-email">{user.email}</div>
            <div className="user-phone">{user.phone}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UsersList;
