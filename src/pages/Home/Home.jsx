import "./Home.css";

export function Home() {
    return (
        <section className="form__body">
            <h2 className="form__tittle">Users Registration</h2>
                <form className="form__registration">
                    <fieldset className="form__input">
                        <label htmlFor="name" className="label__inputs">Name</label>
                        <input type="text" name="name" id="name" required className="input__data"/>
                    </fieldset>
                    <fieldset className="form__input">
                        <label htmlFor="email" className="label__inputs">E-mail</label>
                        <input type="email" name="email" id="email" required className="input__data"/>
                    </fieldset>
                    <fieldset className="form__input">
                        <label htmlFor="phone" className="label__inputs">Phone</label>
                        <input type="tel" name="phone" id="phone" required className="input__data"/>
                    </fieldset>
                    <fieldset className="form__input">
                        <label htmlFor="date__birth" className="label__inputs">Date of Birth</label>
                        <input type="date" name="date__birth" id="date__birth" required className="input__data date__birth"/>
                    </fieldset>
                    <fieldset className="form__input form__button">
                        <button type="submit" className="button__save">Save</button>
                    </fieldset>
                </form>
        </section>
    );
};