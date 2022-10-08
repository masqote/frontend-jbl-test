const CardComponent = () => {
  return (
    <div className="p-2">
      <div className="bg-white w-60 h-[21rem] rounded-lg overflow-hidden shadow-lg">
        <div>
          <img
            src="https://i.picsum.photos/id/681/270/270.jpg?hmac=M6H7IGrXsqbU_bcBiFLcaNv1QtKB4wJheeEo0ei6PrE"
            alt=""
            className="h-52 w-full object-cover"
          />
        </div>
        <div className="p-2 h-full flex flex-col space-y-2">
          <span className="font-normal text-xs text-yellow-700">
            SKU : 112233
          </span>
          <h2 className="font-normal text-sm">
            SoundPEATS Watch1 Sport Smartwatch Health and
          </h2>
          <span className="font-extrabold">Rp. 200.000</span>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
