
import React from 'react';
import { RegistrationFormData, FormErrors, Degree, StudyYear } from '@/types/formTypes';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface EducationFormProps {
  formData: Partial<RegistrationFormData>;
  errors: FormErrors;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectChange: (name: string, value: string) => void;
}

const EducationForm: React.FC<EducationFormProps> = ({
  formData,
  errors,
  onChange,
  onSelectChange,
}) => {
  return (
    <div className="space-y-4">
      <div className="form-input-container">
        <Label htmlFor="college_name" className="form-label">College Name</Label>
        <Input
          id="college_name"
          name="college_name"
          value={formData.college_name || ''}
          onChange={onChange}
          placeholder="Enter your college name"
          className={`form-input ${errors.college_name ? 'border-destructive' : ''}`}
        />
        {errors.college_name && <p className="form-error">{errors.college_name}</p>}
      </div>

      <div className="form-input-container">
        <Label htmlFor="degree" className="form-label">Degree</Label>
        <Select 
          onValueChange={(value) => onSelectChange('degree', value)} 
          value={formData.degree}
        >
          <SelectTrigger className={`w-full ${errors.degree ? 'border-destructive' : ''}`}>
            <SelectValue placeholder="Select your degree" />
          </SelectTrigger>
          <SelectContent>
            {Object.values(Degree).map((degree) => (
              <SelectItem key={degree} value={degree}>
                {degree}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.degree && <p className="form-error">{errors.degree}</p>}
      </div>

      <div className="form-input-container">
        <Label htmlFor="year_of_study" className="form-label">Year of Study</Label>
        <Select 
          onValueChange={(value) => onSelectChange('year_of_study', value)} 
          value={formData.year_of_study}
        >
          <SelectTrigger className={`w-full ${errors.year_of_study ? 'border-destructive' : ''}`}>
            <SelectValue placeholder="Select your year of study" />
          </SelectTrigger>
          <SelectContent>
            {Object.values(StudyYear).map((year) => (
              <SelectItem key={year} value={year}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.year_of_study && <p className="form-error">{errors.year_of_study}</p>}
      </div>

      <div className="form-input-container">
        <Label htmlFor="cgpa" className="form-label">CGPA</Label>
        <Input
          id="cgpa"
          name="cgpa"
          value={formData.cgpa || ''}
          onChange={onChange}
          placeholder="Enter your CGPA (e.g., 9.2)"
          className={`form-input ${errors.cgpa ? 'border-destructive' : ''}`}
        />
        {errors.cgpa && <p className="form-error">{errors.cgpa}</p>}
      </div>
    </div>
  );
};

export default EducationForm;
