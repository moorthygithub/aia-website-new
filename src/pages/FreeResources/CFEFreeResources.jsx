import React from "react";
import CFEFreeResources from "../../component/CFEFreeResources";
import FreeFlashCards from "../../component/FreeFlashCards";
import FreePracticeQuestions from "../../component/FreePracticeQuestions";
import FreeResourcesBanner from "../../component/FreeResourcesBanner";

const FreeResources = () => {
  return (
    <>
      <CFEFreeResources />
      <FreeFlashCards />
      <FreePracticeQuestions />
      <FreeResourcesBanner />
    </>
  );
};

export default FreeResources;
