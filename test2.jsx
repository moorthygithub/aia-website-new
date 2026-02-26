<div
  className="rounded-md border border-[#F3831C]/20 bg-white max-w-xs w-full overflow-hidden"
  key={i}
>
  <div className="h-48  md:h-56 w-full relative">
    <img
      src={image}
      alt={alt}
      decoding="async"
      className="h-full w-full object-top object-cover"
    />
    <div
      className={`absolute top-2 right-2 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-semibold ${getCourseStyles(course)}`}
    >
      {getCourseName(course)}
    </div>
  </div>

  <div className="p-4 flex flex-col gap-3">
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <span className="text-sm font-semibold tracking-tight text-[#0F3652]">
          {name}
        </span>
        <span className="text-xs opacity-60 text-[#0F3652]">
          {student_designation}
        </span>
      </div>

      <img
        src={comapany_image}
        alt={company_alt}
        decoding="async"
        className="h-8 w-8 object-contain"
      />
    </div>
  </div>
</div>
