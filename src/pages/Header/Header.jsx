import { RiSurveyLine } from "react-icons/ri";

import "./Header.css";


export function Header() {
    return(
        <header className="survey__header">
            <h1 className="app__tittle">Users Registration<RiSurveyLine className="app__icon"/></h1>
        </header>
    )
}