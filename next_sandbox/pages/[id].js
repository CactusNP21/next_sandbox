 export const getStaticPaths = async () => {
    const dishes = require('../recipe.json')
    let paths = []
    for (let i = 1; i <= dishes.length; i++) {
        paths.push({params: {id: i.toString()}})
    }

    return {
        paths,
        fallback: false
    }
};


export const getStaticProps = async (context) => {
    let {id} = context.params
    const dishes = require('../recipe.json')
    return {
        props: {dishes: dishes, id : id}
    }
};

export default function Post(prop) {
    let dish = prop.dishes[prop.id - 1]
    const {name, des, time, price} = dish
    return (
        <>
            <div>{name}</div>
            <div>{des}</div>
            <div>{time}</div>
            <div>{price}</div>
        </>
    )
}