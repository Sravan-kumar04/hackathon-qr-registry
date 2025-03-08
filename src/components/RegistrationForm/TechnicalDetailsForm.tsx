
import React from 'react';
import { RegistrationFormData, FormErrors } from '@/types/formTypes';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TechnicalDetailsFormProps {
  formData: Partial<RegistrationFormData>;
  errors: FormErrors;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onAddTechStack: (tech: string) => void;
  onRemoveTechStack: (tech: string) => void;
}

const TechnicalDetailsForm: React.FC<TechnicalDetailsFormProps> = ({
  formData,
  errors,
  onChange,
  onAddTechStack,
  onRemoveTechStack,
}) => {
  const [newTech, setNewTech] = React.useState('');

  const handleAddTech = () => {
    if (newTech.trim()) {
      onAddTechStack(newTech.trim());
      setNewTech('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTech();
    }
  };

  const techOptions = [
    'JavaScript', 'TypeScript', 'React', 'Angular', 'Vue', 'Node.js', 
    'Express', 'Python', 'Django', 'Flask', 'Java', 'Spring', 
    'C#', '.NET', 'PHP', 'Laravel', 'Ruby', 'Rails', 'Swift', 
    'Kotlin', 'Flutter', 'React Native', 'AWS', 'Azure', 'GCP'
  ];

  return (
    <div className="space-y-4">
      <div className="form-input-container">
        <Label htmlFor="tech_stack" className="form-label">Tech Stack</Label>
        <div className="flex gap-2 mb-2">
          <Input
            id="new_tech"
            value={newTech}
            onChange={(e) => setNewTech(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add technologies"
            className="flex-1"
          />
          <Button type="button" onClick={handleAddTech} size="sm">Add</Button>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-2 mb-1">
          {formData.tech_stack?.map((tech, index) => (
            <Badge key={index} variant="secondary" className="py-1 px-2">
              {tech}
              <button
                type="button"
                onClick={() => onRemoveTechStack(tech)}
                className="ml-1 hover:text-destructive"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
        
        {errors.tech_stack && <p className="form-error">{errors.tech_stack}</p>}
        
        <div className="mt-3">
          <p className="text-sm mb-2">Suggested technologies:</p>
          <div className="flex flex-wrap gap-1">
            {techOptions.map((tech) => (
              <Badge 
                key={tech} 
                variant="outline"
                className="cursor-pointer hover:bg-primary/10"
                onClick={() => {
                  if (!formData.tech_stack?.includes(tech)) {
                    onAddTechStack(tech);
                  }
                }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="form-input-container">
        <Label htmlFor="other_skills" className="form-label">Other Skills</Label>
        <Textarea
          id="other_skills"
          name="other_skills"
          value={formData.other_skills || ''}
          onChange={onChange}
          placeholder="Enter any other skills (e.g., UI/UX, Project Management)"
          className="min-h-[100px]"
        />
      </div>

      <div className="form-input-container">
        <Label htmlFor="project_idea" className="form-label">
          Project Idea <span className="text-muted-foreground text-xs">(optional, min 50 chars)</span>
        </Label>
        <Textarea
          id="project_idea"
          name="project_idea"
          value={formData.project_idea || ''}
          onChange={onChange}
          placeholder="Briefly describe your hackathon project idea"
          className={`min-h-[120px] ${errors.project_idea ? 'border-destructive' : ''}`}
        />
        {errors.project_idea && <p className="form-error">{errors.project_idea}</p>}
        {formData.project_idea && (
          <p className="text-xs text-muted-foreground mt-1">
            {formData.project_idea.length} / 50 characters
          </p>
        )}
      </div>
    </div>
  );
};

export default TechnicalDetailsForm;
