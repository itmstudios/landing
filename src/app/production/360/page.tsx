
import PanoramaViewer from '@/components/panoramaViewer/component';
import styles from './styles.module.css';
import { LinkWithArrow } from '@/components/ui/linkWithArrow/component';

export default function Page() {
  return (
    <div className={styles.root}>
      <PanoramaViewer />
      <LinkWithArrow text={'Next Project'} href='/production/3d/' />
    </div>
  );
}
