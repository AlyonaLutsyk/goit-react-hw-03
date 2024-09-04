import css from './SearchBox.module.css';

export default function SearchBox({ value, onChange }) {
    return (
        <div className={css.container}>
            <label className={css.label} htmlFor="search">Find contacts by name</label>
            <input
                type="text"
                id="search"
                value={value}
                onChange={onChange}
                className={css.input}
            />
        </div>
    );
};