import NewsList from '../components/NewsList';
import SnakbarNotification from '../components/SnakbarNotification';
import TopicSelector from '../components/TopicSelector';

const News = () => {
  return (
    <>
      <TopicSelector />
      <NewsList />
      <SnakbarNotification />
    </>
  );
};

export default News;
