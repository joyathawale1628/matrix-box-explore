import { AspectRatio } from "@/components/ui/aspect-ratio";

interface YouTubeVideoProps {
  videoId: string;
  title: string;
  className?: string;
}

const YouTubeVideo = ({ videoId, title, className = "" }: YouTubeVideoProps) => {
  return (
    <div className={`space-y-3 ${className}`}>
      <h3 className="text-lg font-semibold text-primary">{title}</h3>
      <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden shadow-card">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </AspectRatio>
    </div>
  );
};

export default YouTubeVideo;