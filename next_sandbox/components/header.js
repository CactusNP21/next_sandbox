import Image from "next/image";
import logo from '../pictures/foto.jpg'
//let src = require()

export default function Header() {
    return (
        <div className='main'>
            <Image src={logo} objectFit={"contain"} height={100} width={300}></Image>
            <h2 className='head'>Знайти рецепт</h2>
            <input className='search-bar'/>
            <h1 className='head' style={{color: "green"}}>Рецепти кактусika</h1>
            <style jsx>
                {`
                  .main {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 2fr;
                    place-content: center;
                    width: 100%;
                    box-shadow: 0 6px 6px black;
                    margin-bottom: 100px;
                  }
                  .search-bar {
                    height: 50%;
                    width: 100%;
                    place-self: center;
                  }
                  .head{
                  place-self: center;
                  }
                `}
            </style>
        </div>
    )
}