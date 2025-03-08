
import React from 'react';
import { RegistrationFormData, FormErrors } from '@/types/formTypes';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Linkedin, Github } from 'lucide-react';

interface SocialLinksFormProps {
  formData: Partial<RegistrationFormData>;
  errors: FormErrors;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SocialLinksForm: React.FC<SocialLinksFormProps> = ({
  formData,
  errors,
  onChange,
}) => {
  return (
    <div className="space-y-4">
      <div className="form-input-container">
        <Label htmlFor="linkedin" className="form-label flex items-center gap-1">
          <Linkedin className="h-4 w-4" /> LinkedIn Profile
        </Label>
        <Input
          id="linkedin"
          name="linkedin"
          value={formData.linkedin || ''}
          onChange={onChange}
          placeholder="https://linkedin.com/in/username"
          className={`form-input ${errors.linkedin ? 'border-destructive' : ''}`}
        />
        {errors.linkedin && <p className="form-error">{errors.linkedin}</p>}
        <p className="text-xs text-muted-foreground mt-1">
          Format: https://linkedin.com/in/username
        </p>
      </div>

      <div className="form-input-container">
        <Label htmlFor="github" className="form-label flex items-center gap-1">
          <Github className="h-4 w-4" /> GitHub Profile
        </Label>
        <Input
          id="github"
          name="github"
          value={formData.github || ''}
          onChange={onChange}
          placeholder="https://github.com/username"
          className={`form-input ${errors.github ? 'border-destructive' : ''}`}
        />
        {errors.github && <p className="form-error">{errors.github}</p>}
        <p className="text-xs text-muted-foreground mt-1">
          Format: https://github.com/username
        </p>
      </div>
    </div>
  );
};

export default SocialLinksForm;
