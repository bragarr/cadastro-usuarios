import "./Home.css";

export function Home() {
    return (
        <section>
            <article className="">
                <h2 className="form__tittle">Users Registration</h2>
                <form className="form__registration">
                    <fieldset className="form__input">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" required className="input__data"/>
                    </fieldset>
                    <fieldset className="form__input">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" id="email" required className="input__data"/>
                    </fieldset>
                    <fieldset className="form__input">
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" name="phone" id="phone" required className="input__data"/>
                    </fieldset>
                    <fieldset className="form__input">
                        <label htmlFor="date__birth">Date of Birth</label>
                        <input type="date" name="date__birth" id="date__birth" required className="input__data date__birth"/>
                    </fieldset>
                    <button type="submit" className="button__save">Save</button>
                </form>
            </article>
        </section>
    );
};