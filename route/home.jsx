import { Await, useLoaderData } from "react-router-dom"
import Homeitem from "../component/Homeitem"
import { useDispatch, useSelector } from 'react-redux'
import { Suspense } from "react"
import ProductSkeleton from "../loadingstate/ProductSkeleton"
import { Allitemsliceactions } from "../store/itemslice"
import myntrastore from "../store"

const Home = () => {

    let item = useSelector((store) => store.items)

    const { data } = useLoaderData();

    return (
        <>
            <Suspense fallback={<ProductSkeleton />}>
                <Await resolve={data}>

                    {
                        (data) => (

                            <main>
                                <div className="items-container">
                                    {item.map((item) => <Homeitem key={item.id} item={item}></Homeitem>)}

                                </div>

                            </main>
                        )
                    }


                </Await>

            </Suspense>

        </>
    )

}
export default Home

async function fetching() {


    const response = await fetch('http://localhost:8080/items');

    const readableobj = await response.json();

    myntrastore.dispatch(Allitemsliceactions.addIntialitems(readableobj.items))

    return readableobj;
}



export function loadallpost() {

    const data = fetching();

    return { data: data };



}