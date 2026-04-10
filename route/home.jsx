import { Await, useLoaderData } from "react-router-dom";
import Homeitem from "../component/Homeitem";
import { useDispatch, useSelector } from "react-redux";
import { Suspense } from "react";
import ProductSkeleton from "../loadingstate/ProductSkeleton";
import { Allitemsliceactions } from "../store/itemslice";
import myntrastore from "../store";

const Home = () => {
  const items = useSelector((store) => store.items);
  console.log(items);
  const { data } = useLoaderData();

  return (
    <>
      <Suspense fallback={<ProductSkeleton />}>
        <Await resolve={data}>
          {(data) => (
            <main>
              <div className="items-container">
                {items.map((item) => (
                  <Homeitem key={item.id} item={item}></Homeitem>
                ))}
              </div>
            </main>
          )}
        </Await>
      </Suspense>
    </>
  );
};
export default Home;

async function fetching() {
  const response = await fetch("http://localhost:8080/items");

  const readableobj = await response.json();

  myntrastore.dispatch(Allitemsliceactions.addIntialitems(readableobj.items));

  return readableobj;
}

export function loadallpost() {
  const data = fetching();

  return { data };
}
