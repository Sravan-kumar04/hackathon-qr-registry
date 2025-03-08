
import React, { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Degree, FormErrors, RegistrationFormData, StudyYear, TechStack } from '@/types/formTypes';
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { validateForm, isStepValid, isFormComplete } from '@/utils/formValidation';
import { getHackathonById } from '@/data/hackathonEvents';

import PersonalInfoForm from './PersonalInfoForm';
import EducationForm from './EducationForm';
import TechnicalDetailsForm from './TechnicalDetailsForm';
import SocialLinksForm from './SocialLinksForm';
import RegistrationSummary from './RegistrationSummary';

interface RegistrationFormProps {
  eventId?: string;
}

const steps = [
  "Personal Information",
  "Education",
  "Technical Details",
  "Social Links",
  "Review & Submit"
];

const RegistrationForm: React.FC<RegistrationFormProps> = ({ eventId }) => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  
  const event = eventId ? getHackathonById(eventId) : null;
  
  const [formData, setFormData] = useState<RegistrationFormData>({
    full_name: '',
    email: '',
    phone_number: '',
    college_name: '',
    degree: Degree.BTECH,
    year_of_study: StudyYear.FIRST,
    cgpa: '',
    tech_stack: [] as TechStack,
    other_skills: '',
    project_idea: '',
    linkedin: '',
    github: '',
    event_id: eventId || '',
    event_name: event?.title || 'General Hackathon',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});

  // Update event information if eventId changes
  useEffect(() => {
    if (eventId) {
      const eventInfo = getHackathonById(eventId);
      if (eventInfo) {
        setFormData(prev => ({
          ...prev,
          event_id: eventId,
          event_name: eventInfo.title,
        }));
      }
    }
  }, [eventId]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddTechStack = (tech: string) => {
    if (!formData.tech_stack.includes(tech)) {
      setFormData((prev) => ({
        ...prev,
        tech_stack: [...prev.tech_stack, tech],
      }));
    }
  };

  const handleRemoveTechStack = (tech: string) => {
    setFormData((prev) => ({
      ...prev,
      tech_stack: prev.tech_stack.filter((t) => t !== tech),
    }));
  };

  const validateCurrentStep = (): boolean => {
    const stepErrors = validateForm(formData, currentStep);
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length));
    } else {
      toast({
        title: "Validation Error",
        description: "Please fix the errors before proceeding.",
        variant: "destructive",
      });
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate the entire form
    const formErrors = validateForm(formData, 0);
    setErrors(formErrors);
    
    if (Object.keys(formErrors).length > 0) {
      toast({
        title: "Validation Error",
        description: "Please fix all errors before submitting.",
        variant: "destructive",
      });
      return;
    }
    
    if (!isFormComplete(formData)) {
      toast({
        title: "Incomplete Form",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // In a real application, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // For demo purposes, we'll just simulate a successful submission
      console.log("Form submitted:", formData);
      
      setIsCompleted(true);
      toast({
        title: "Registration Successful!",
        description: `Your registration for ${formData.event_name} has been submitted.`,
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "An error occurred while submitting your registration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInfoForm
            formData={formData}
            errors={errors}
            onChange={handleInputChange}
          />
        );
      case 2:
        return (
          <EducationForm
            formData={formData}
            errors={errors}
            onChange={handleInputChange}
            onSelectChange={handleSelectChange}
          />
        );
      case 3:
        return (
          <TechnicalDetailsForm
            formData={formData}
            errors={errors}
            onChange={handleInputChange}
            onAddTechStack={handleAddTechStack}
            onRemoveTechStack={handleRemoveTechStack}
          />
        );
      case 4:
        return (
          <SocialLinksForm
            formData={formData}
            errors={errors}
            onChange={handleInputChange}
          />
        );
      case 5:
        return <RegistrationSummary formData={formData} />;
      default:
        return null;
    }
  };

  if (isCompleted) {
    return (
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl flex items-center justify-center gap-2">
            <CheckCircle2 className="text-green-500" />
            Registration Complete!
          </CardTitle>
          <CardDescription>
            Thank you for registering for the hackathon
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RegistrationSummary formData={formData} />
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button 
            onClick={() => {
              setIsCompleted(false);
              setCurrentStep(1);
              // In a real app, you might redirect to a different page here
            }}
          >
            Register Another Participant
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Hackathon Registration</CardTitle>
          <CardDescription>
            Complete the form to register for the hackathon event
          </CardDescription>
          
          <div className="step-indicator">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div 
                  className={`step-dot ${
                    currentStep === index + 1 ? 'step-dot-active' : ''
                  }`}
                ></div>
                <span className={`text-xs mt-1 ${
                  currentStep === index + 1 ? 'text-primary font-medium' : 'text-muted-foreground'
                }`}>
                  {step}
                </span>
              </div>
            ))}
          </div>
        </CardHeader>
        
        <CardContent>
          {renderStepContent()}
        </CardContent>
        
        <CardFooter className="flex justify-between">
          <Button
            type="button"
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1 || isSubmitting}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Previous
          </Button>
          
          {currentStep < steps.length ? (
            <Button
              type="button"
              onClick={handleNext}
              disabled={isSubmitting}
            >
              Next <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-hackathon-blue hover:bg-hackathon-blue/90"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Registration'
              )}
            </Button>
          )}
        </CardFooter>
      </Card>
    </form>
  );
};

export default RegistrationForm;
