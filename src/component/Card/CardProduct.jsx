const CardProduct = (props) => {
  return (
    <div>
      <div className="bg-white md:w-[17rem] w-[14rem] h-[21rem] rounded-lg overflow-hidden shadow-lg">
        <div>
          <img
            src={
              props.image
                ? props.image
                : "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
            }
            alt=""
            className="h-52 w-full object-cover"
          />
        </div>
        <div className="p-2 h-full flex flex-col space-y-2">
          <span className="font-normal text-xs text-yellow-700">
            SKU : {props.sku}
          </span>
          <h2 className="font-normal text-sm">{props.name}</h2>
          <span className="font-extrabold">Rp. {props.price}</span>
        </div>
      </div>
    </div>
  );
};

CardProduct.defaultProps = {
  sku: "Hello",
  name: "Default",
  price: 0,
  image:
    "https://i.picsum.photos/id/681/270/270.jpg?hmac=M6H7IGrXsqbU_bcBiFLcaNv1QtKB4wJheeEo0ei6PrE",
};

export default CardProduct;
