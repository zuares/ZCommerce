import { useContext } from "react";
import Container from "../components/container/Container";
import MainApp from "../components/layouts/MainApp";
import Notify from "../components/molecules/Notify";
import CardProduct from "../components/molecules/Card/CardProduct";
import { getData } from "../utils/fetchData"
import { DataContext } from "../store/GlobalState";

export default function Home({ products }) {
  const { state } = useContext(DataContext)
  const { notify } = state
  return (
    <MainApp>
      <Container>
        {notify.msg ? <Notify msg={notify.msg} /> : null}
        <div className="px-3 md:px-8 pb-8" >
          <div className="pt-5 mb-5">
            <h2 className="text-xl font-bold text-true-gray-500">Product</h2>
          </div>
          <div className="flex gap-4 flex-wrap" >
            {
              products.map((product, index) => <CardProduct key={index} product={product} />)
            }
          </div>
        </div>
      </Container>
    </MainApp>
  )
}

export async function getServerSideProps() {
  const products = await getData('product')
  return { props: { products } }
}
