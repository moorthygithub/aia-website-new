import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { X } from 'lucide-react';
import { BASE_URL } from '@/api/base-url';

const PopUp = ({ slug = 'home' }) => {
  const [open, setOpen] = useState(false);
  const [popupData, setPopupData] = useState(null);
  const [imageBaseUrl, setImageBaseUrl] = useState('');
  const [dontShowAgain, setDontShowAgain] = useState(false);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    
    const popupHidden = sessionStorage.getItem('popup_hidden_globally');
    if (popupHidden === 'true') {
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
            item => item.image_for === "Popup"
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
  
    const popupHidden = sessionStorage.getItem('popup_hidden_globally');
    if (popupHidden === 'true') {
      return;
    }

    
    if (!loading && popupData?.popup_required === 'Yes') {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [loading, popupData, slug]);

  const handleClose = () => {

    if (dontShowAgain) {
      sessionStorage.setItem('popup_hidden_globally', 'true');
    }
    setOpen(false);
  };

  const handleOpenChange = (isOpen) => {
    if (!isOpen) {
    
      if (dontShowAgain) {
        sessionStorage.setItem('popup_hidden_globally', 'true');
      }
    }
    setOpen(isOpen);
  };

  const handleCheckboxChange = (checked) => {
    setDontShowAgain(checked);

    if (!checked) {
      sessionStorage.removeItem('popup_hidden_globally');
    }
  };

  if (loading || !popupData || popupData.popup_required !== 'Yes') {
    return null;
  }


  const popupHidden = sessionStorage.getItem('popup_hidden_globally');
  if (popupHidden === 'true') {
    return null;
  }

  const imageUrl = popupData.popup_image 
    ? `${imageBaseUrl}${popupData.popup_image}`
    : 'https://aia.in.net/webapi/public/assets/images/no_image.jpg';

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="p-0 overflow-hidden border-0 bg-transparent max-w-xl">
        <div className="relative bg-white rounded-xl shadow-2xl">
          <DialogHeader className="p-2 pb-1 ">
            <DialogTitle className="text-xl font-bold text-center text-gray-800">
              {popupData.popup_heading}
            </DialogTitle>
          </DialogHeader>
          
          <button
            onClick={handleClose}
            className="absolute right-3 top-3 z-10 h-7 w-7 rounded-full bg-white/80 hover:bg-white shadow-md flex items-center justify-center"
            aria-label="Close popup"
          >
            <X className="h-3 w-3 text-gray-700" />
          </button>
          
          <div className="p-2">
            <img 
              src={imageUrl}
              alt={popupData.popup_image_alt}
              className={`w-full h-auto rounded-lg transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={(e) => {
                e.currentTarget.src = 'https://aia.in.net/webapi/public/assets/images/no_image.jpg';
                setImageLoaded(true);
              }}
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