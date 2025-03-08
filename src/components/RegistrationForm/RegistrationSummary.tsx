
import React from 'react';
import { RegistrationFormData } from '@/types/formTypes';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { User, Mail, Phone, School, BookOpen, Calendar, Award, Code, GraduationCap, Linkedin, Github } from 'lucide-react';

interface RegistrationSummaryProps {
  formData: RegistrationFormData;
}

const RegistrationSummary: React.FC<RegistrationSummaryProps> = ({ formData }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Registration Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <section className="space-y-2">
          <h3 className="text-md font-semibold flex items-center gap-2">
            <User className="w-4 h-4" /> Personal Information
          </h3>
          <Separator />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-muted-foreground">Full Name:</span>
              <p className="font-medium">{formData.full_name}</p>
            </div>
            
            <div>
              <span className="text-muted-foreground flex items-center gap-1">
                <Mail className="w-3 h-3" /> Email:
              </span>
              <p className="font-medium">{formData.email}</p>
            </div>
            
            <div>
              <span className="text-muted-foreground flex items-center gap-1">
                <Phone className="w-3 h-3" /> Phone:
              </span>
              <p className="font-medium">{formData.phone_number}</p>
            </div>
          </div>
        </section>
        
        <section className="space-y-2">
          <h3 className="text-md font-semibold flex items-center gap-2">
            <GraduationCap className="w-4 h-4" /> Education
          </h3>
          <Separator />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-muted-foreground flex items-center gap-1">
                <School className="w-3 h-3" /> College:
              </span>
              <p className="font-medium">{formData.college_name}</p>
            </div>
            
            <div>
              <span className="text-muted-foreground flex items-center gap-1">
                <BookOpen className="w-3 h-3" /> Degree:
              </span>
              <p className="font-medium">{formData.degree}</p>
            </div>
            
            <div>
              <span className="text-muted-foreground flex items-center gap-1">
                <Calendar className="w-3 h-3" /> Year:
              </span>
              <p className="font-medium">{formData.year_of_study}</p>
            </div>
            
            <div>
              <span className="text-muted-foreground flex items-center gap-1">
                <Award className="w-3 h-3" /> CGPA:
              </span>
              <p className="font-medium">{formData.cgpa}</p>
            </div>
          </div>
        </section>
        
        <section className="space-y-2">
          <h3 className="text-md font-semibold flex items-center gap-2">
            <Code className="w-4 h-4" /> Technical Information
          </h3>
          <Separator />
          
          <div className="space-y-2 text-sm">
            <div>
              <span className="text-muted-foreground">Tech Stack:</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {formData.tech_stack.map((tech, index) => (
                  <Badge key={index} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </div>
            
            {formData.other_skills && (
              <div>
                <span className="text-muted-foreground">Other Skills:</span>
                <p className="font-medium mt-1">{formData.other_skills}</p>
              </div>
            )}
            
            {formData.project_idea && (
              <div>
                <span className="text-muted-foreground">Project Idea:</span>
                <p className="font-medium mt-1">{formData.project_idea}</p>
              </div>
            )}
          </div>
        </section>
        
        <section className="space-y-2">
          <h3 className="text-md font-semibold">Social Links</h3>
          <Separator />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            {formData.linkedin && (
              <div>
                <span className="text-muted-foreground flex items-center gap-1">
                  <Linkedin className="w-3 h-3" /> LinkedIn:
                </span>
                <a 
                  href={formData.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  {formData.linkedin}
                </a>
              </div>
            )}
            
            {formData.github && (
              <div>
                <span className="text-muted-foreground flex items-center gap-1">
                  <Github className="w-3 h-3" /> GitHub:
                </span>
                <a 
                  href={formData.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  {formData.github}
                </a>
              </div>
            )}
          </div>
        </section>
      </CardContent>
    </Card>
  );
};

export default RegistrationSummary;
