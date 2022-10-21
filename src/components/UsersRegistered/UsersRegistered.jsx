import axios from "axios";
import { toast } from "react-toastify";

import { FaTrash, FaEdit, FaUserAlt, FaUserTag, FaMailBulk, FaPhoneSquare } from "react-icons/fa";

import "./UsersRegistered.css";
import "../../pages/Home/Home.css";

export function UsersRegistered({users, setUsers, setOnEdit}) {

    const handleEdit = (item) => {
        setOnEdit(item);
    };

    const handleDelete = async (id) => {
        await axios
            .delete("https://us-cdbr-east-06.cleardb.net:4000/" + id)
            .then(({ data }) => {
                const newArray = users.filter((user) => user.id !== id);
                setUsers(newArray);
                toast.success(data);
            })

            .catch(({ data }) => toast.error(data));
            
        setOnEdit(null);
    }

    return (
        <table className="table__users">
            <thead className="table__head">
                <tr className="fields__table">
                    <th className="info__inputs"><FaUserAlt /> Name</th>
                    <th className="info__inputs"><FaMailBulk/> E-mail</th>
                    <th className="info__inputs input__fone"><FaPhoneSquare/> Phone</th>
                    <th className="info__inputs input__tag"><FaUserTag/> Tag Name</th>
                    <th className="info__actions">Editar</th>
                    <th className="info__actions">Deletar</th>

                </tr>
            </thead>
            <tbody className="table__body">
                {users.map((item, i) => (
                    <tr key={i}>
                        <td className="info__inputs info__body">{item.nome}</td>
                        <td className="info__inputs info__body input__email">{item.email}</td>
                        <td className="info__inputs info__body input__fone">{item.fone}</td>
                        <td className="info__inputs info__body input__tag--desc">{item.tag}</td>
                        <td>
                            <FaEdit
                                className="info__actions edit"
                                onClick={() => {handleEdit(item)}}
                            />
                        </td>
                        <td>
                            <FaTrash 
                                className="info__actions delete"
                                onClick={() => {handleDelete(item.id)}}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};