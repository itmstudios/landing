import YouTubeEmbed from '@/components/youtubeEmbed/component';
import { LinkWithArrow } from '@/components/ui/linkWithArrow/component';
import styles from './styles.module.css';

export const metadata = {
  title: "ITM Studios Production: Photo, Video, and Media Content for Business",
  description: "Comprehensive production services by ITM Studios: photography, video shooting, post-production, and media content creation for advertising, brands, and commercial projects.",
};

const Page: React.FC = () => {
  return (
    <div className={styles.root}>
      <YouTubeEmbed videoId="GfSA7-GiqJc" />
      <LinkWithArrow text={'Next Project'} href='/products/beautybarber/' />
    </div>

  );
};

export default Page;

