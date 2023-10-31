export interface IBackCardProps {
  userPhoneNumber: string | null | undefined;
  warningMessage: string | undefined;
  handleFlipCard: () => void;
  verifyOtp: (enteredOtp: string) => void;
}