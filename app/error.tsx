'use client';

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  console.log('Error', error);
  return (
    <>
      <div>An unexpected error has occured</div>
      <button className="btn" onClick={() => reset()}>
        Reset
      </button>
    </>
  );
};

export default ErrorPage;
