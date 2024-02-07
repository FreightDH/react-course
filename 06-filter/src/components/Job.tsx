import { FC, ReactElement } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

interface JobProps {
  job: Info | undefined;
}

const Job: FC<JobProps> = ({ job }): ReactElement => {
  if (!job) return <h3>Something wen't wrong!</h3>;

  return (
    <div className="job">
      <h3>{job.title}</h3>
      <div className="job-company">{job.company}</div>
      <div className="job-date">{job.dates}</div>
      <div className="job-desc">
        {job.duties.map((item, index) => (
          <div className="job-duty" key={index}>
            <FaAngleDoubleRight className="job-icon" />
            <p>{item}</p>
          </div>
        ))}
        <p></p>
      </div>
    </div>
  );
};

export default Job;
