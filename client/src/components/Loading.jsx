import { Loader, Placeholder } from 'rsuite';

function Loading({ isLoading }) {
  if (!isLoading) return null;
  return (
    <div className="global-loader">
      <Placeholder.Paragraph rows={8} />
      <Loader backdrop content="Loading..." vertical />
    </div>
  );
}

export default Loading;
