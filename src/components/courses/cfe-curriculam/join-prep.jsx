"use client";

import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BASE_URL } from "@/api/base-url";
import { X } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function CfeJoinDialog({
  title,
  subtitle,
  course,
  buttonlabel,
}) {
  const [formData, setFormData] = useState({
    userName: "",
    userMobile: "",
    userEmail: "",
    userLocation: "",
    userMessage: "",
    userType: course || "",
    userCourse: course || "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [loader, setLoader] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    let updatedValue = value;

    if (name === "userMobile") {
      updatedValue = value.replace(/\D/g, "").slice(0, 10);
    }

    setFormData({
      ...formData,
      [name]: updatedValue,
    });

    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      delete updatedErrors[name];
      return updatedErrors;
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.userName.trim()) newErrors.userName = "Full name is required";

    if (!formData.userMobile.trim())
      newErrors.userMobile = "Mobile number is required";

    if (!formData.userEmail.trim()) newErrors.userEmail = "Email is required";

    if (!formData.userMessage.trim())
      newErrors.userMessage = "Comments are required";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoader(true);

    try {
      const res = await axios.post(
        `${BASE_URL}/api/create-webenquiry`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        },
      );
      if (res.data.code == "200") {
        toast.success(res.data.msg || "Enquiry submitted successfully!");
        setFormData({
          userName: "",
          userMobile: "",
          userEmail: "",
          userLocation: "",
          userMessage: "",
          userType: "CFE",
          userCourse: "CFE",
        });
      } else {
        toast.error(res.data.msg || "Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error(
        error.response?.data ||
          error.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setLoader(false);
    }
  };

  const inputStyle = "focus:border-[#F3831C]";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex justify-center">
          <Button
            className="
              bg-[#F3831C] text-white
              px-6 py-2.5 rounded-none
              font-semibold
              hover:bg-[#F3831C]/90
              transition-all
          cursor-pointer
            "
          >
            {buttonlabel || "More Info"}
          </Button>
        </div>
      </DialogTrigger>

      <DialogContent
        className="
    sm:max-w-lg
    w-[95%]
    rounded-xl
    p-4 sm:p-6
   top-[10%] sm:top-[18%]
    translate-y-0
    max-h-[75vh]
    md:max-h-[90vh]
    overflow-y-auto  
      z-9999
  "
      >
        {" "}
        <DialogClose asChild>
          <button className="absolute right-4 top-4 rounded-full p-1 text-slate-500 hover:bg-slate-100 hover:text-[#F3831C] cursor-pointer transition-colors">
            <X size={20} />
          </button>
        </DialogClose>
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl font-semibold text-[#0F3652] text-center">
            {title || "Join AiA CFE Prep Course"}
          </DialogTitle>
          <p className="text-center text-sm text-muted-foreground">
            {subtitle || "Certified Fraud Examiner Course"}
          </p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-3 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <Label className="text-[#0F3652]">Full Name *</Label>
              <Input
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                className={inputStyle}
              />
              {errors.userName && (
                <p className="text-red-500 text-xs mt-1">{errors.userName}</p>
              )}
            </div>

            <div>
              <Label className="text-[#0F3652]">Mobile Number *</Label>
              <Input
                name="userMobile"
                type="tel"
                value={formData.userMobile}
                onChange={handleChange}
                className={inputStyle}
                maxLength={10}
              />
              {errors.userMobile && (
                <p className="text-red-500 text-xs mt-1">{errors.userMobile}</p>
              )}
            </div>
          </div>

          <div>
            <Label className="text-[#0F3652]">Email Address *</Label>
            <Input
              name="userEmail"
              type="email"
              value={formData.userEmail}
              onChange={handleChange}
              className={inputStyle}
            />
            {errors.userEmail && (
              <p className="text-red-500 text-xs mt-1">{errors.userEmail}</p>
            )}
          </div>

          <div>
            <Label className="text-[#0F3652]">Location</Label>
            <Input
              name="userLocation"
              value={formData.userLocation}
              onChange={handleChange}
              className={inputStyle}
            />
          </div>

          <div>
            <Label className="text-[#0F3652]">Comments *</Label>
            <Textarea
              name="userMessage"
              rows={4}
              value={formData.userMessage}
              onChange={handleChange}
              className={inputStyle}
            />
            {errors.userMessage && (
              <p className="text-red-500 text-xs mt-1">{errors.userMessage}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={loader}
            className="w-full bg-[#0F3652] hover:bg-[#0c2c42] text-white py-2.5 rounded-none cursor-pointer"
          >
            {loader ? "Submitting..." : "Submit Now"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
