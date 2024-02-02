import { FC, ReactElement, useEffect, useRef, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

interface QuestionProps {
  question: Question;
}

const Question: FC<QuestionProps> = ({ question }): ReactElement => {
  const [isOpen, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (isOpen) {
      const contentEl = contentRef.current as HTMLDivElement;
      setHeight(contentEl.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <li className="question">
      <header>
        <h5>{question.title}</h5>
        <button className="question-btn" onClick={() => setOpen(!isOpen)}>
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p ref={contentRef} style={{ height }} className={isOpen ? 'open' : ''}>
        {isOpen && question.info}
      </p>
    </li>
  );
};

export default Question;
