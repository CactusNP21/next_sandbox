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
            <div style={{
                display: "grid",

            }}>
                {dishes.map(({name, id}) => (
                    <div key={id}>
                        <Link href={`/${id}`} key={id}>{name}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}