
import { RegistrationFormData, FormErrors } from "../types/formTypes";

export const validateForm = (
  data: Partial<RegistrationFormData>,
  step: number
): FormErrors => {
  const errors: FormErrors = {};

  // Step 1 validation - Personal Information
  if (step === 1 || step === 0) {
    if (!data.full_name?.trim()) {
      errors.full_name = "Full name is required";
    } else if (data.full_name.length < 3) {
      errors.full_name = "Full name must be at least 3 characters long";
    }

    if (!data.email?.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!data.phone_number?.trim()) {
      errors.phone_number = "Phone number is required";
    } else if (!/^\d{10}$/.test(data.phone_number.replace(/\D/g, ''))) {
      errors.phone_number = "Please enter a valid 10-digit phone number";
    }
  }

  // Step 2 validation - Education
  if (step === 2 || step === 0) {
    if (!data.college_name?.trim()) {
      errors.college_name = "College name is required";
    }

    if (!data.degree) {
      errors.degree = "Degree is required";
    }

    if (!data.year_of_study) {
      errors.year_of_study = "Year of study is required";
    }

    if (!data.cgpa?.trim()) {
      errors.cgpa = "CGPA is required";
    } else {
      const cgpaNumber = parseFloat(data.cgpa);
      if (isNaN(cgpaNumber) || cgpaNumber < 0 || cgpaNumber > 10) {
        errors.cgpa = "Please enter a valid CGPA between 0 and 10";
      }
    }
  }

  // Step 3 validation - Technical Details
  if (step === 3 || step === 0) {
    if (!data.tech_stack || data.tech_stack.length === 0) {
      errors.tech_stack = "At least one tech stack is required";
    }
    
    if (data.project_idea && data.project_idea.length < 50) {
      errors.project_idea = "Project idea should be at least 50 characters long";
    }
  }

  // Step 4 validation - Social/Professional Links
  if (step === 4 || step === 0) {
    if (data.linkedin && !/^https?:\/\/(www\.)?linkedin\.com\/in\/[\w-]+\/?$/.test(data.linkedin)) {
      errors.linkedin = "Please enter a valid LinkedIn profile URL";
    }

    if (data.github && !/^https?:\/\/(www\.)?github\.com\/[\w-]+\/?$/.test(data.github)) {
      errors.github = "Please enter a valid GitHub profile URL";
    }
  }

  return errors;
};

export const isStepValid = (
  data: Partial<RegistrationFormData>,
  step: number
): boolean => {
  const errors = validateForm(data, step);
  return Object.keys(errors).length === 0;
};

export const isFormComplete = (
  data: Partial<RegistrationFormData>
): boolean => {
  const requiredFields: (keyof RegistrationFormData)[] = [
    'full_name',
    'email',
    'phone_number',
    'college_name',
    'degree',
    'year_of_study',
    'cgpa',
    'tech_stack'
  ];

  return requiredFields.every(field => !!data[field]);
};
