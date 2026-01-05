


const CamsAbout=()=> {
  const aboutStats = [
    {
      display: "Recorded Video Classes",
      title: "Expert Mentoring Sessions",
    },
    {
      display: "Practice Questions",
      title: "Success Rate",
    },
    {
      display: "CAMS Version 7 Study Material",
      title: "Success Stories",
    },
    {
      display: "CAMS QualifiedTrainer",
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
            Best Prep Course For CAMS Prepration
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Join AIA Prep Course and Get 100% Success in CAMS Exam
              </h2>

              <div className="text-gray-600 leading-relaxed space-y-4 mb-8">
                <p>
                CAMS is the global gold standard in the AML Certifications, with more than 40,000 CAMS graduates Worldwide.
Academy of Internal Audit Provides end to end training for CAMS Certification.
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

    <div className="text-xl font-bold mb-1 text-white">
      {stat.display}
    </div>


   
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



export default CamsAbout