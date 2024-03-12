import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";

const SmallProduct = ({ product }) => {
  return (
    <div className="w-[12rem] ml-[3rem] p-3">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-[10rem] object-cover rounded"
        />
        <HeartIcon product={product} />

        <div className="p-3">
          <Link to={`/product/${product._id}`}>
            <h2 className="flex justify-between items-center">
              <div>{product.name}</div>
              <span className=" text-pink-800 text-sm font-medium mr-2 rounded-full dark:bg-pink-900 dark:text-pink-300">
                $ {product.price}
              </span>
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SmallProduct;
