
import React from 'react';
import { RegistrationFormData, FormErrors } from '@/types/formTypes';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface PersonalInfoFormProps {
  formData: Partial<RegistrationFormData>;
  errors: FormErrors;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  formData,
  errors,
  onChange,
}) => {
  return (
    <div className="space-y-4">
      <div className="form-input-container">
        <Label htmlFor="full_name" className="form-label">Full Name</Label>
        <Input
          id="full_name"
          name="full_name"
          value={formData.full_name || ''}
          onChange={onChange}
          placeholder="Enter your full name"
          className={`form-input ${errors.full_name ? 'border-destructive' : ''}`}
        />
        {errors.full_name && <p className="form-error">{errors.full_name}</p>}
      </div>

      <div className="form-input-container">
        <Label htmlFor="email" className="form-label">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email || ''}
          onChange={onChange}
          placeholder="Enter your email address"
          className={`form-input ${errors.email ? 'border-destructive' : ''}`}
        />
        {errors.email && <p className="form-error">{errors.email}</p>}
      </div>

      <div className="form-input-container">
        <Label htmlFor="phone_number" className="form-label">Phone Number</Label>
        <Input
          id="phone_number"
          name="phone_number"
          value={formData.phone_number || ''}
          onChange={onChange}
          placeholder="Enter your 10-digit phone number"
          className={`form-input ${errors.phone_number ? 'border-destructive' : ''}`}
        />
        {errors.phone_number && <p className="form-error">{errors.phone_number}</p>}
      </div>
    </div>
  );
};

export default PersonalInfoForm;
