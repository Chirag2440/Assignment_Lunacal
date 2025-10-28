import  { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { PlusIcon, ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

const initialImages = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
];

export const GallerySection = (): JSX.Element => {
  const [images, setImages] = useState<string[]>(initialImages);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAddImage = () => {
    const randomId = Math.floor(Math.random() * 1000);
    const newImage = `https://images.unsplash.com/photo-150690592534${randomId}?w=400&h=300&fit=crop`;
    setImages([...images, newImage]);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(images.length - 3, prev + 1));
  };

  const visibleImages = images.slice(currentIndex, currentIndex + 3);
  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < images.length - 3;

  return (
    <section className="w-full bg-[#363c43] rounded-[18.89px] shadow-[5.67px_5.67px_3.78px_#00000066] p-4 lg:p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6 px-2">
        <Button
          variant="ghost"
          className="bg-[#171717] text-white rounded-[20px] px-6 py-3 h-auto font-['Poppins'] font-semibold text-xl hover:bg-[#171717]/90"
        >
          Gallery
        </Button>

        <div className="flex items-center gap-3 lg:gap-6 w-full lg:w-auto justify-between lg:justify-end">
          <Button
            onClick={handleAddImage}
            className="bg-white/10 backdrop-blur-[50px] text-white rounded-[104px] px-4 lg:px-5 py-3 lg:py-4 h-auto font-['Plus_Jakarta_Sans'] font-extrabold text-xs uppercase shadow-[inset_0_3.26px_3.26px_#ffffff40,inset_0_0_48.91px_#ffffff26,9px_10px_7.1px_#00000066,-0.5px_-0.5px_6.9px_#ffffff40] hover:bg-white/20 transition-all"
          >
            <PlusIcon className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
            <span className="hidden sm:inline">Add Image</span>
            <span className="sm:hidden">Add</span>
          </Button>

          <div className="flex items-center gap-3">
            <Button
              onClick={handlePrevious}
              disabled={!canGoPrevious}
              variant="ghost"
              size="icon"
              className="w-[45px] h-[45px] rounded-full bg-gradient-to-b from-[#303439] to-[#161718] shadow-[4px_5px_30px_5px_#101213,-5px_-3px_30px_-10px_#96bee7] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gradient-to-b hover:from-[#303439] hover:to-[#161718] transition-opacity"
            >
              <ArrowLeftIcon className="w-6 h-6 text-[#6f787c]" />
            </Button>

            <Button
              onClick={handleNext}
              disabled={!canGoNext}
              variant="ghost"
              size="icon"
              className="w-[45px] h-[45px] rounded-full bg-gradient-to-b from-[#303439] to-[#161718] shadow-[4px_5px_30px_5px_#101213,-5px_-3px_30px_-10px_#96bee7] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gradient-to-b hover:from-[#303439] hover:to-[#161718] transition-opacity"
            >
              <ArrowRightIcon className="w-6 h-6 text-[#6f787c]" />
            </Button>
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 px-2">
        {visibleImages.map((image, index) => (
          <div
            key={currentIndex + index}
            className="aspect-[4/3] rounded-[24px] overflow-hidden bg-gray-800 hover:scale-105 transition-transform duration-300 grayscale hover:grayscale-0"
          >
            <img
              src={image}
              alt={`Gallery image ${currentIndex + index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
