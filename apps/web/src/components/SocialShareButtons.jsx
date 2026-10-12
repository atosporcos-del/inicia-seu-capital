import React from 'react';
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { useToast } from '@/components/ui/use-toast';

const SocialShareButtons = ({ title }) => {
  const { toast } = useToast();

  const handleShare = (platform) => {
    toast({
      title: "Compartilhamento",
      description: `🚧 Esta funcionalidade de compartilhar no ${platform} ainda não está implementada—mas você pode solicitá-la no próximo prompt! 🚀`,
    });
  };

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium text-gray-600">Compartilhar:</span>
      <div className="flex gap-2">
        <button
          onClick={() => handleShare('Twitter')}
          className="w-10 h-10 bg-[#1DA1F2] text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
        >
          <FaTwitter className="w-5 h-5" />
        </button>
        <button
          onClick={() => handleShare('LinkedIn')}
          className="w-10 h-10 bg-[#0077B5] text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
        >
          <FaLinkedin className="w-5 h-5" />
        </button>
        <button
          onClick={() => handleShare('Facebook')}
          className="w-10 h-10 bg-[#1877F2] text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
        >
          <FaFacebook className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SocialShareButtons;