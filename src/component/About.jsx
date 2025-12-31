export default function About() {
  const aboutStats = [
    {
      display: "50,000+ Hours",
      title: "Expert Mentoring Sessions",
    },
    {
      display: "99.6%",
      title: "Success Rate",
    },
    {
      display: "1,000+",
      title: "Success Stories",
    },
    {
      display: "32+ Countries",
      title: "Served",
    },
  ];

  return (
    <>
      <section className="py-18 ">
        <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          

            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">
                  Academy of Internal Audit
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Excellence in Professional Education
              </h2>

              <div className="text-gray-600 leading-relaxed space-y-4 mb-8">
                <p>
                  AIA is an online training institute to secure success in
                  international certification courses. With the proven study
                  material, we are committed towards success in professional
                  courses for our students and help them grow in their
                  professional journey.
                </p>
                <p>
                  We are pleased to say that our faculty has always been our
                  greatest strength who is always ready to assist students with
                  his knowledge theoretically and practically. We help aspirants
                  not only how to obtain international certifications, but also
                  how to have them in the real sense so that they can
                  demonstrate the same skills and competence in relevant areas
                  as well.
                </p>
                <p>
                  Since 15 years, AIA has been teaching commerce students under
                  the name of Perfect Coaching Centre and now providing guidance
                  for Top Certification Courses as well.
                </p>
              </div>

         
              
            </div>
            <div className="grid grid-cols-2 gap-4">
            {aboutStats.map((stat, index) => (
  <div
    key={index}
    className="
      relative
      border-2
      border-blue-800
      bg-linear-to-br
      from-blue-900/20
      via-blue-800
      to-blue-900/50
      text-blue-50
      h-26.5
      py-9
      px-3
      rounded-lg
      flex
      flex-col
      items-center
      justify-center
      text-center
      transition-all
      duration-300
      hover:border-orange-400
      cursor-pointer
    "
  >

    <div className="text-2xl font-bold mb-1 text-white">
      {stat.display}
    </div>


    <h4 className="text-base font-normal text-blue-100">
      {stat.title}
    </h4>

   
    <div
      className="
        absolute
        bottom-0
        left-0
        right-0
        h-1.5
        bg-linear-to-r
        from-orange-400
        via-amber-400
        to-yellow-300
        rounded-b-lg
      "
    />
  </div>
))}

              </div>
          </div>
        </div>
      </section>
    </>
  );
}
