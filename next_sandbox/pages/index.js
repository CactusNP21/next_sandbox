import Header from "../components/header";
import Body from "../components/body";

// export async function getStaticProps(context) {
//     let user = require('../users.json')
//     console.log(user)
//     return {
//         props: user, // will be passed to the page component as props
//     }
// }

export default function App() {
    return (
        <div>
            <Header></Header>
            <Body></Body>
        </div>
    )
}