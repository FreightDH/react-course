import { ComponentPropsWithRef, FC, ReactElement } from 'react';

interface CustomButtonProps extends ComponentPropsWithRef<'button'> {}

const CustomButton: FC<CustomButtonProps> = ({ children, onClick }): ReactElement => {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;
