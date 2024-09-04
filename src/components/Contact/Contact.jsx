import css from './Contact.module.css';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';

export default function Contact({ name, number, onDelete }) {

    return (
        <li className={css.item}>
            <p className={css.contact}>
                <span className={css.name}>
                    <FaUser className={css.icon} />
                    {name}
                </span> 
                <span className={css.number}><FaPhoneAlt className={css.icon} />{number}</span>
            </p>
            <button onClick={onDelete} className={css.button}>
                Delete
            </button>
        </li>
    );
};