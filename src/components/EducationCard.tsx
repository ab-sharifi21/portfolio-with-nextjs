import { poppins } from '@/fonts';
import { EducationInfo } from '@/types';

interface EducationCardProps {
  educationInfo: EducationInfo;
}

export const EducationCard = ({ educationInfo }: EducationCardProps) => {
  const { year, bgColor, name, schoolName, location } = educationInfo;
  return (
    <div
      className={`bg-${bgColor} mb-4 w-full rounded-xl p-3 pl-4 pr-4 shadow-box-shadow dark:bg-cards-bg dark:shadow-2xl tablet:w-[48%]`}
    >
      <p className="mb-1 text-sm text-primary-font-color/70 dark:text-white/60">
        {year}
      </p>
      <p className={`${poppins.className} mb-1 font-semibold`}>{name}</p>
      <p className="font-semibold text-icon-color duration-300">{schoolName}</p>
      <p className="mb-1 text-xs text-primary-font-color/70 dark:text-white/60">
        {location}
      </p>
    </div>
  );
};
