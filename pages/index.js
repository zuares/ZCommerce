import Container from "../components/atoms/Container";
import MainApp from "../components/layouts/MainApp";
import CardProduct from "../components/molecules/Card/CardProduct";

export default function Home() {
  return (
    <MainApp>
      <Container>
        <div className="px-3 md:px-8 pb-8" >

          <div className="pt-5 mb-5">
            <h2 className="text-xl font-bold text-true-gray-500">Product</h2>
          </div>
          <div className="flex gap-4 flex-wrap" >
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
          </div>
        </div>

      </Container>
    </MainApp>
  )
}
