import Homeitem from "../component/Homeitem"
import { useSelector } from 'react-redux'

const Home = () => {

    const item = useSelector((store) => store.items)



    return (
        <>
            <main>
                <div className="items-container">
                    {item.map((item) => <Homeitem key={item.id} item={item}></Homeitem>)}

                </div>

            </main>

        </>
    )

}
export default Home