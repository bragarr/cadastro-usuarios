import "./Home.css";

export function Home() {
    return (
        <section className="form__body">
            <h2 className="form__tittle">Users Registration</h2>
                <form className="form__registration">
                    <fieldset className="form__inputs">
                        <label htmlFor="name" className="label__inputs">
                            Name
                            <input type="text" name="name"
                                id="name"
                                required
                                className="input__data"
                            />
                        </label>
                        <label htmlFor="email" className="label__inputs">
                            E-mail
                            <input type="email" name="email"
                                id="email"
                                required
                                className="input__data"
                            />
                        </label>
                        <label htmlFor="phone" className="label__inputs">
                            Phone
                            <input type="tel" name="phone"
                                id="phone"
                                required 
                                className="input__data"
                            />
                        </label>
                        <label htmlFor="date__birth" className="label__inputs label__birth">
                            Date of Birth
                            <input type="date" name="date__birth"
                                id="date__birth"
                                required
                                className="input__data date__birth"
                            />
                        </label>
                        <button className="button__save">Save</button>
                    </fieldset>
                </form>
        </section>
    );
};