import dynamic from 'next/dynamic';
import styles from './styles.module.css';
import { LinkWithArrow } from '@/components/ui/linkWithArrow/component';

const LumaScene = dynamic(() => import('@/components/lumaScene/component'), { ssr: false });

export const metadata = {
  title: "3D Modeling and Visualization by ITM Studios",
  description: "Professional 3D modeling and visualization for architecture, products, and interiors. Realistic solutions to showcase your ideas.",
};

export default function Page() {
  return (
    <div className={styles.root}>
      <h1 className={styles.hidden}>Bringing your ideas to life with 3D models</h1>

      <div className={styles.luma_scene}>
          <LumaScene source="https://lumalabs.ai/capture/A98A3412-2AB9-42D9-BA2E-2F67C983D897" />
      </div>

      <LinkWithArrow text={'Next Project'} href='/production/real-estate/' />

      <div className={styles.luma_scene}>
          <LumaScene source="https://lumalabs.ai/capture/D1347FC2-FBFB-4644-847D-C7EBD0FFA525" />
      </div>

      <div className={styles.luma_scene}>
          <LumaScene source="https://lumalabs.ai/capture/E74048DC-B167-416F-BEED-A358F725CD20" />
      </div>

      <div className={styles.luma_scene}>
          <LumaScene source="https://lumalabs.ai/capture/97F7F643-1BC3-4796-B6BA-3CC897C6249A" />
      </div>

    </div>
  );
}
