import WorkSection from '../components/work/WorkSection';
import data from '../../../data/works.json';

export default function Work() {
  return (
    <div>
      <WorkSection worksData={data}/>
    </div>
  );
}
