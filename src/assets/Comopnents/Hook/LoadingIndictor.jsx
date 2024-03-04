import { BiLoader } from 'react-icons/bi';

export default function LoadingIndicator() {
  return (
    <div className="flex items-center justify-center mt-12">
      <BiLoader size={30} className="text-blue-400 animate-spin mr-2" />
      <h1>Loading</h1>
    </div>
  );
}
