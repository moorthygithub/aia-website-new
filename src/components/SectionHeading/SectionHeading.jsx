const SectionHeading = ({
  title,
  description,
  description1,
  align = "start",
  highlight,
  highlight1,
}) => {
  const isCenter = align == "center";

  return (
    <div className={`py-2 ${isCenter ? "text-center" : "text-left"}`}>
      <div className={`inline-block ${isCenter ? "mx-auto" : ""}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F3652]">
          {title} <span className="text-[#F3831C]">{highlight1}</span>
        </h2>

        <span className="mt-2 block h-1 w-14 bg-[#F3831C] rounded" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-[#F3831C]">
        {highlight}
      </h2>
      {description && (
        <div
          className={`mt-4 text-gray-600 leading-relaxed  mx-auto ${
            isCenter ? "text-center" : "text-left"
          }`}
        >
          <p>{description}</p>
        </div>
      )}
      {description1 && (
        <div
          className={` text-gray-600 leading-relaxed  mx-auto ${
            isCenter ? "text-center" : "text-left"
          }`}
        >
          <p>{description1}</p>
        </div>
      )}
    </div>
  );
};

export default SectionHeading;
