import Header from "../components/header";
import Link from "next/link";

export async function getStaticProps() {
    const dishes = require('../recipe.json')
    return {
        props: {dishes: dishes}
    }
}

export default function App(prop) {
    const dishes = prop.dishes
    return (
        <div>
            <Header></Header>
            <ul>
                {dishes.map(({name, id}) => (
                    <li key={id}>
                        <Link href={`/${id}`}>{name}</Link>
                    </li>
                ))}
            </ul>
        </div>
)
}