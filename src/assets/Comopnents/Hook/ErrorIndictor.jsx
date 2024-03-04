import { BsExclamationTriangle } from 'react-icons/bs';

export default function ErrorIndicator() {
  return (
    <div className="error-indicator ">
      <div className="icon ">
        <BsExclamationTriangle />
      </div>
      <h1>Error</h1>
    </div>
  );
}
