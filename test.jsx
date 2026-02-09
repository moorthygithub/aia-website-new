const testimonials = React.useMemo(() => {
  if (!certificatesData?.data) return [];

  const certificateImageUrlObj = certificatesData.image_url?.find(
    (item) => item.image_for === "Student",
  );

  const certificateNoImageUrlObj = certificatesData.image_url?.find(
    (item) => item.image_for === "No Image",
  );

  const certificateImageUrl = certificateImageUrlObj?.image_url || "";
  const noImageUrl = certificateNoImageUrlObj?.image_url || "";

  return certificatesData.data
    .map((certificate) => {
      const imageSrc = certificate.student_other_certificate_image
        ? `${certificateImageUrl}${certificate.student_other_certificate_image}`
        : "";

      // ❌ If no real image, skip it
      if (!imageSrc || imageSrc === noImageUrl) {
        return null;
      }

      return {
        author: {
          avatar: imageSrc,
        },
        alt:
          certificate.student_other_certificate_image_alt ||
          "Certificate Image",
      };
    })
    .filter(Boolean); // 🔥 removes null items
}, [certificatesData]);
