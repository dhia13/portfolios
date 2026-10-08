function SingleSkill({ img, alt, title }) {
  return (
    <div className="flex text-white gap-4 justify-start items-center my-2 text-sm">
      <img src={img} alt={title} className="w-[46px] ml-4" />
      <p className="font-normal">{title}</p>
    </div>
  );
}

export default SingleSkill;
