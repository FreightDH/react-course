import { FC, ReactElement } from 'react';

interface ButtonsProps {
  jobs: Data;
  activeTab: number;
  setActiveTab: (order: number) => void;
}

const Buttons: FC<ButtonsProps> = ({ jobs, activeTab, setActiveTab }): ReactElement => {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => (
        <button
          className={activeTab === index ? 'job-btn active-btn' : 'job-btn'}
          key={job.id}
          onClick={() => {
            setActiveTab(index);
          }}
        >
          {job.company}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
