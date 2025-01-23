import ExperienceType from '~/constants/ExperienceType';

export default interface Experience {
  type: ExperienceType;
  timestamp: string;
  title: string;
  description: string;
}