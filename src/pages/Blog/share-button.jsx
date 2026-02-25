import { Copy, Share2, Check } from "lucide-react";
import { useState } from "react";

export function ShareButtons() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const url = window.location.href;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(url);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = url;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };
  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: url,
        });
      } catch (error) {
        handleCopy();
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-medium text-[#0F3652]">Share this blog</h3>

      <div className="flex gap-3">
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-4 py-2.5 border border-[#0F3652]/20 rounded-lg hover:bg-[#0F3652]/5 transition-colors text-[#0F3652] text-sm font-medium"
        >
          {copied ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
          {copied ? "Copied!" : "Copy"}
        </button>

        <button
          onClick={handleShare}
          className="flex items-center gap-2 px-4 py-2.5 border border-[#0F3652]/20 rounded-lg hover:bg-[#0F3652]/5 transition-colors text-[#0F3652] text-sm font-medium"
        >
          <Share2 className="w-4 h-4" />
          Share
        </button>
      </div>
    </div>
  );
}
