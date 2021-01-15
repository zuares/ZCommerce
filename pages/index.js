import Container from "../components/container/Container";
import MainApp from "../components/layouts/MainApp";
import CardProduct from "../components/molecules/Card/CardProduct";
import { getData } from "../utils/fetchData"

export default function Home({ products }) {
  return (
    <MainApp>
      <Container>
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
