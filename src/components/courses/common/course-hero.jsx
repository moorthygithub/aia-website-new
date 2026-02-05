import { IMAGE_PATH } from "@/api/base-url";

const CourseHero = () => {
  return (
    <div>
      <img
        src={`${IMAGE_PATH}/3.webp`}
        alt="CAMS Hero Banner"
        className=" inset-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default CourseHero;
