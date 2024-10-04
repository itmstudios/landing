import { ComingSoon } from '@/components/pages/comingsoon/page';
import { LinkWithArrow } from '@/components/ui/linkWithArrow/component';

import Tour360 from '@/components/tour360/component';

export const metadata = {
  title: "ITM Studios Production: Photo, Video, and Media Content for Business in 360 tour",
  description: "Comprehensive production services by ITM Studios: photography, video shooting, post-production, 360 tours and media content creation for advertising, brands, and commercial projects.",
};

const Page: React.FC = () => {
  return (
    <>
      <Tour360 />
      <LinkWithArrow text={'Next Project'} href='/production/3d/' />
     </>

  );
};

export default Page;
