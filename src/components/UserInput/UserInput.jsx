import { useRef ,useEffect } from "react";
import axios from "axios";

import { toast } from "react-toastify";

import { FaTrash, FaEdit, FaUserAlt, FaUserTag, FaMailBulk, FaPhoneSquare } from "react-icons/fa";

import { AiOutlineSave } from "react-icons/ai";

import "./UserInput.css";

export function UserInput({ getUsers, onEdit, setOnEdit }) {

    const ref = useRef();

    useEffect(() => {
        if(onEdit) {
            const user = ref.current;

            user.nome.value = onEdit.nome;
            user.email.value = onEdit.email;
            user.fone.value = onEdit.fone;
            user.tag.value = onEdit.tag;
        }
    }, [onEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = ref.current;
        
        if(onEdit) {
            await axios
                .put("https://mysql-cadastrousuarios.herokuapp.com/" + onEdit.id, {
                    nome: user.nome.value,
                    email: user.email.value,
                    fone: user.fone.value,
                    tag: user.tag.value,
                })

                .then(({ data }) => toast.success(data))
                .catch(({ data }) => toast.error(data));
        } else {
            await axios
                .post("https://mysql-cadastrousuarios.herokuapp.com/", {
                    nome: user.nome.value,
                    email: user.email.value,
                    fone: user.fone.value,
                    tag: user.tag.value,
                })
                .then (({ data }) => toast.success(data))
                .catch(({ data }) => toast.error(data))
        }

        user.nome.value = "";
        user.email.value = "";
        user.fone.value = "";
        user.tag.value = "";

        setOnEdit(null);
        getUsers();
    }

    return (
        <form className="form__registration" ref={ref} onSubmit={handleSubmit}>
            <fieldset className="form__inputs">
                <label htmlFor="name" className="label__inputs">
                    <figure className="container__figure">
                        <FaUserAlt />
                        Name
                    </figure>
                    <input type="text" name="nome"
                        id="name"
                        required
                        className="input__data"
                    />
                </label>
                <label htmlFor="email" className="label__inputs">
                    <figure className="container__figure">
                        <FaMailBulk/>
                        E-mail
                    </figure>
                    <input type="email" name="email"
                        id="email"
                        required
                        className="input__data"
                    />
                </label>
                <label htmlFor="phone" className="label__inputs">
                    <figure className="container__figure">
                        <FaPhoneSquare/>
                        Phone
                    </figure>
                    <input type="tel" name="fone"
                        id="phone"
                        required
                        className="input__data"
                    />
                </label>
                <label htmlFor="name" className="label__inputs">
                    <figure className="container__figure">
                        <FaUserTag/>
                        Tag Name
                    </figure>
                    <input type="text" name="tag"
                        id="name"
                        required
                        className="input__data"
                    />
                </label>
                <button type="submit" className="button__save"><AiOutlineSave />Save</button>
            </fieldset>
        </form>
    )
}