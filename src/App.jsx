import { useNavigate } from "react-router-dom";

import SessionTimeoutTracker from "./components/session-timeout-tracker/session-timeout-tracker";

import Cookies from "js-cookie";
import { Toaster } from "sonner";
import ScrollToTop from "./components/common/scroll-to-top";
import AppRoutes from "./routes/app-routes";
import Popup from "./components/Popup";
import { Button } from "./components/ui/button";

function App() {
  const navigate = useNavigate();
  const time = Cookies.get("token-expire-time");
  const handleLogout = () => {
    [
      "token",
      "id",
      "name",
      "username",
      "chapter_id",
      "viewer_chapter_ids",
      "user_type_id",
      "token-expire-time",
      "ver_con",
      "email",
      "currentYear",
      "favorite_chapters",
      "recent_chapters",
    ].forEach((cookie) => {
      Cookies.remove(cookie);
    });
    navigate("/");
  };
  return (
    <>
      <div className="fixed bottom-20 right-6 z-[10000] space-x-6">
        <Button
          onClick={() => navigate("/map")}
          className=" bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-lg text-base"
        >
          Map
        </Button>
        <Button
          onClick={() => navigate("/mapone")}
          className=" bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-lg text-base"
        >
          Map One{" "}
        </Button>
        <Button
          onClick={() => navigate("/maponenew")}
          className=" bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-lg text-base"
        >
          Map New{" "}
        </Button>
      </div>
      <Toaster richColors position="top-right" />
      <ScrollToTop />
      <AppRoutes />
      <Popup />
    </>
  );
}

export default App;
