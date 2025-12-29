import React from "react";

const LocationMap = () => {
  return (
    <section className="mt-6">
      <div>
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Visit Our Office
        </h2>

        {/* Map Container */}
        <div className="w-full h-[650px]  overflow-hidden shadow-lg border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d428221.04602404166!2d77.348773!3d28.388809000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd5a9988bdcf%3A0x1dd0f04210cae34e!2sAcademy%20of%20Internal%20Audit!5e1!3m2!1sen!2sus!4v1766150573238!5m2!1sen!2sus"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Academy of Internal Audit Location"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
