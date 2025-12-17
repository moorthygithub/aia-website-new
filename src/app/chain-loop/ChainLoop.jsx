import LGGrid from "@/components/ChainLoop/LGGrid";
import MobileCarousel from "@/components/ChainLoop/MobileCarousel";
import XLGrid from "@/components/ChainLoop/XLGrid";
import { useEffect, useState } from "react";

const items = [
  {
    title: "Placements",
    img: "https://christuniversity.in/uploads/aupportasistance/thumb/cam-adventure_3_20250508064205..png",
  },
  {
    title: "Christ Consulting",
    img: "https://christuniversity.in/uploads/aupportasistance/thumb/cam-adventure_6_20250508064226..png",
  },
  {
    title: "Admissions",
    img: "https://christuniversity.in/uploads/aupportasistance/thumb/admission_20251006123836..png",
  },
  {
    title: "Health Services",
    img: "https://christuniversity.in/uploads/aupportasistance/thumb/cam-adventure_5_20250508064241..png",
  },
  {
    title: "Examinations",
    img: "https://christuniversity.in/uploads/aupportasistance/thumb/cam-adventure_4_20250508064256..png",
  },
  {
    title: "Student Council",
    img: "https://christuniversity.in/uploads/aupportasistance/thumb/cam-adventure_6_20250508064322..png",
  },
  {
    title: "Centres & Cells",
    img: "https://christuniversity.in/uploads/aupportasistance/thumb/cam-adventure_7_20250701052442..png",
  },
];

export default function ChainLoop() {
  const [visibleCount, setVisibleCount] = useState(2);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCount(2);
      else if (width < 1024) setVisibleCount(4);
      else setVisibleCount(3);
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  return (
    <div className="w-full py-8 bg-[url('https://christuniversity.in/images/bg_2.jpg')] bg-cover bg-center">
      <XLGrid items={items} />
      <LGGrid items={items} />
      <MobileCarousel items={items} visibleCount={visibleCount} />
    </div>
  );
}
