import { ComingSoon } from '@/components/pages/comingsoon/page';
import Tour360 from '@/components/tour360/component';

export const metadata = {
  title: "ITM Studios Production: Photo, Video, and Media Content for Business",
  description: "Comprehensive production services by ITM Studios: photography, video shooting, post-production, and media content creation for advertising, brands, and commercial projects.",
};

const Page: React.FC = () => {
  return (
    <>
      <Tour360 /> {/* Здесь добавлен новый компонент с 3D туром */}
    </>
  );
};

export default Page;
