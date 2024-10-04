import YouTubeEmbed from '@/components/youtubeEmbed/component';
import { LinkWithArrow } from '@/components/ui/linkWithArrow/component';

export const metadata = {
  title: "ITM Studios Production: Photo, Video, and Media Content for Business",
  description: "Comprehensive production services by ITM Studios: photography, video shooting, post-production, and media content creation for advertising, brands, and commercial projects.",
};

const Page: React.FC = () => {
  return (
    <div>
      <div style={{ marginTop: '20px' }}>
        <YouTubeEmbed videoId="GfSA7-GiqJc" />
      </div>
          <LinkWithArrow text={'Next Project'} href='/products/beautybarber/' />
    </div>

  );
};

export default Page;
