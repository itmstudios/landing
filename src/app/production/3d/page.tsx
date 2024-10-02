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
        <LumaScene />
      </div>
      <LinkWithArrow text={'Next Project'} href='/production/3d' />
    </div>
  );
}
