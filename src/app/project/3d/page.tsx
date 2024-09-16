import dynamic from 'next/dynamic';
import styles from './styles.module.css';
import { LinkWithArrow } from '@/components/ui/linkWithArrow/component';

const LumaScene = dynamic(() => import('@/components/lumaScene/component'), { ssr: false });

export default function Home() {
  return (
    <div className={styles.root}>
      <div className={styles.luma_scene}>      
        <LumaScene />
      </div>
      <LinkWithArrow text={'Next Project'} href='/project/barber-shop' />
    </div>
  );
}
