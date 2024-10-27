import { useLoaderData } from 'react-router-dom';
import StatsContainer from '../components/StatsContainer';
import ChartsContainer from '../components/ChartsContainer';

function Stats() {
  const { defaultStats, monthlyApplications } = useLoaderData();
  return (
    <>
      <StatsContainer defaultStats={defaultStats} />
      {monthlyApplications?.length > 0 && (
        <ChartsContainer data={monthlyApplications} />
      )}
    </>
  );
}

export default Stats;
