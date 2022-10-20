import { useState, useEffect } from "react";
import { UserInput } from "../../components/UserInput/UserInput";
import axios from "axios";
import { UsersRegistered } from "../../components/UsersRegistered/UsersRegistered";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Home.css";


export function Home() {

    const [users, setUsers] = useState([]);
    const [onEdit, setOnEdit] = useState(null);

    const getUsers = async () => {
        try {
            const res = await axios.get("http://localhost:3000");
            setUsers(res.data.sort((a,b) => (a.name > b.name ? 1 : -1)));
        } catch (error) {
            toast.error(error);
        }
    };

    useEffect(() => {
        getUsers();
    }, [setUsers])

    return (
        <main className="main__content">
            <section className="form__body">
                <ToastContainer autoClose={3000} position={toast.POSITION.TOP_CENTER} />
                <UserInput onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
            </section>
            <section className="users__database">
                <UsersRegistered setOnEdit={setOnEdit} users={users} setUsers={setUsers}  />
            </section>
        </main>
    );
};