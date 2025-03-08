
# Hackathon Registration Form with QR Code Access

A comprehensive registration system for hackathon events featuring multi-step form validation and QR code integration.

## Project info

**URL**: https://lovable.dev/projects/eea2096e-c07a-4633-ab79-86ef2df8cffc

## Features

- **QR Code Integration**: Generate a QR code linking to the registration page
- **Multi-Step Form**: Implement a step-wise registration process for better user experience
- **Form Validations**: Comprehensive validation for all input fields
- **Responsive Design**: Works on mobile, tablet, and desktop devices
- **Pattern-Based Validation**: Validate emails, phone numbers, and social media links

## Data Model

| Field          | Type      | Description                             |
|----------------|-----------|----------------------------------------|
| user_id        | INT       | Primary Key                            |
| full_name      | VARCHAR   | Participant full name                  |
| email          | VARCHAR   | Email with format validation           |
| phone_number   | VARCHAR   | 10-digit numeric phone number          |
| college_name   | VARCHAR   | College name                           |
| degree         | ENUM      | Degree program (B.Tech, M.Tech, etc.)  |
| year_of_study  | ENUM      | Year (1st, 2nd, etc.)                  |
| cgpa           | DECIMAL   | CGPA (e.g., 9.8, 8.5)                 |
| tech_stack     | JSON      | Primary tech stack selection           |
| other_skills   | TEXT      | Additional skills                      |
| project_idea   | TEXT      | Optional project idea (min 50 chars)   |
| linkedin       | VARCHAR   | LinkedIn profile (URL validation)      |
| github         | VARCHAR   | GitHub profile (URL validation)        |

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- shadcn-ui
- React Router
- Lucide React (icons)

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/eea2096e-c07a-4633-ab79-86ef2df8cffc) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## Future Enhancements

- Integration with Google Forms API for additional registration insights
- Team formation functionality
- Admin dashboard for event organizers
- Email confirmation system
