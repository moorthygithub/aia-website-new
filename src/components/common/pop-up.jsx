import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { X, Loader2 } from "lucide-react";
import { BASE_URL } from "@/api/base-url";

const PopUp = ({ slug = "home" }) => {
  const [open, setOpen] = useState(false);
  const [popupData, setPopupData] = useState(null);
  const [imageBaseUrl, setImageBaseUrl] = useState("");
  const [dontShowAgain, setDontShowAgain] = useState(false);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [showPopupAfterLoad, setShowPopupAfterLoad] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const popupHidden = sessionStorage.getItem("popup_hidden_globally");
    if (popupHidden === "true") {
      setDontShowAgain(true);
    }
  }, []);

  useEffect(() => {
    const fetchPopupData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${BASE_URL}/api/getPopupbySlug/${slug}`
        );

        if (response.data?.data) {
          setPopupData(response.data.data);

          const popupImageConfig = response.data.image_url?.find(
            (item) => item.image_for === "Popup"
          );
          if (popupImageConfig) {
            setImageBaseUrl(popupImageConfig.image_url);
          }
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching popup data:", error);
        setLoading(false);
      }
    };

    fetchPopupData();
  }, [slug]);

  useEffect(() => {
    if (!popupData || popupData.popup_required !== "Yes") {
      return;
    }

    const url = popupData.popup_image
      ? `${imageBaseUrl}${popupData.popup_image}`
      : "https://aia.in.net/webapi/public/assets/images/no_image.jpg";

    setImageUrl(url);
  }, [popupData, imageBaseUrl]);

  useEffect(() => {
    if (imageUrl && !imageLoaded) {
      const img = new Image();
      img.src = imageUrl;

      img.onload = () => {
        setImageLoaded(true);

        if (!loading && popupData?.popup_required === "Yes") {
          const popupHidden = sessionStorage.getItem("popup_hidden_globally");
          if (popupHidden !== "true") {
            setShowPopupAfterLoad(true);
          }
        }
      };

      img.onerror = () => {
        const fallbackImg = new Image();
        fallbackImg.src =
          "https://aia.in.net/webapi/public/assets/images/no_image.jpg";
        fallbackImg.onload = () => {
          setImageUrl(
            "https://aia.in.net/webapi/public/assets/images/no_image.jpg"
          );
          setImageLoaded(true);

          const popupHidden = sessionStorage.getItem("popup_hidden_globally");
          if (popupHidden !== "true") {
            setShowPopupAfterLoad(true);
          }
        };
      };
    }
  }, [imageUrl, loading, popupData]);

  useEffect(() => {
    if (showPopupAfterLoad) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showPopupAfterLoad]);

  const handleClose = () => {
    if (dontShowAgain) {
      sessionStorage.setItem("popup_hidden_globally", "true");
    }
    setOpen(false);
  };

  const handleOpenChange = (isOpen) => {
    if (!isOpen) {
      if (dontShowAgain) {
        sessionStorage.setItem("popup_hidden_globally", "true");
      }
    }
    setOpen(isOpen);
  };

  const handleCheckboxChange = (checked) => {
    setDontShowAgain(checked);

    if (!checked) {
      sessionStorage.removeItem("popup_hidden_globally");
    }
  };

  if (loading || !popupData || popupData.popup_required !== "Yes") {
    return null;
  }

  const popupHidden = sessionStorage.getItem("popup_hidden_globally");
  if (popupHidden === "true") {
    return null;
  }

  if (!imageLoaded) {
    return (
      <div className="hidden">
        <img
          ref={imageRef}
          src={imageUrl}
          alt="preload"
          style={{ display: "none" }}
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setImageUrl(
              "https://aia.in.net/webapi/public/assets/images/no_image.jpg"
            );
            setImageLoaded(true);
          }}
        />
      </div>
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange} className="z-999">
      <DialogContent className="p-0 overflow-hidden border-0 bg-transparent max-w-xl z-[9999]">
        <div className="relative bg-white rounded-xl shadow-2xl ">
          <DialogHeader className="relative p-4">
            <DialogTitle className="text-lg font-bold text-center text-gray-800 p-0">
              {popupData.popup_heading}
            </DialogTitle>

            <button
              onClick={handleClose}
              className="absolute right-4 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full mt-2
               bg-[#0F3652] hover:bg-[#F3831C] shadow-md 
               flex items-center justify-center
               focus:outline-none focus:ring-2 focus:ring-[#0F3652]/40 cursor-pointer"
              aria-label="Close popup"
            >
              <X className="h-4 w-4 text-white" />
            </button>
          </DialogHeader>

          <div className="p-2">
            <img
              src={imageUrl}
              alt={popupData.popup_image_alt}
              className="w-full h-auto rounded-lg"
              loading="eager"
            />
          </div>

          <div className="px-2 pb-3 pt-0">
            <div className="flex items-center space-x-3 border-t border-gray-200 pt-4">
              <Checkbox
                id="dont-show-again-global"
                checked={dontShowAgain}
                onCheckedChange={handleCheckboxChange}
                className="h-5 w-5 data-[state=checked]:bg-indigo-600 data-[state=checked]:border-indigo-600"
              />
              <Label
                htmlFor="dont-show-again-global"
                className="text-sm text-gray-700 cursor-pointer select-none font-medium"
              >
                Don't show this popup again
              </Label>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PopUp;
