import Navbar from "../features/navabar/Navbar";
import ProductList from "../features/product/components/ProductList";

function Home() {
  return (
    <div>
      <Navbar>
        <ProductList> </ProductList>
      </Navbar>
    </div>
  );
}

export default Home;
