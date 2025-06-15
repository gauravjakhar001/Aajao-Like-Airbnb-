import type { Dispatch, SetStateAction } from 'react';

interface ToggleButtonProps {
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ active, setActive }) => {
  return (
    <div className="inline-flex p-1 border-2 ml-10 mt-2 border-rose-700 rounded-full bg-white">
      <button
        className={`px-10 py-2 rounded-full transition-all duration-300 ${
          active === 'renter' ? 'bg-rose-700 text-white' : 'text-rose-900'
        }`}
        onClick={() => setActive('renter')}
      >
        Renter
      </button>
      <button
        className={`px-10 py-2 rounded-full transition-all duration-300 ${
          active === 'host' ? 'bg-rose-700 text-white' : 'text-rose-900'
        }`}
        onClick={() => setActive('host')}
      >
        Host
      </button>
    </div>
  );
};

export default ToggleButton;
