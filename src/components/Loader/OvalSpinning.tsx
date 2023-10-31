import { Oval } from "react-loader-spinner";
import { IOvalSpinningProps } from "./IOvalSpinningProps";

export const OvalSpinning: React.FC<IOvalSpinningProps> = ({ primaryColor, secondaryColor }) => {
  return (
    <>
      <Oval
        height="160"
        width="160"
        ariaLabel="progress-bar-loading"
        color={primaryColor}
        secondaryColor={secondaryColor}
      />
    </>
  );
};
