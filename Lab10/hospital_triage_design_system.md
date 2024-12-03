# Hospital Triage Design System

## 1. Fonts

### Fonts Used
- **Font Name**: `'Roboto', sans-serif`
- **Font Weights**: 
  - **Headings**: Bold (700)
  - **Subheadings**: Semi-Bold (600)
  - **Body Text**: Regular (400)

### Rationale
These fonts provide:
- High readability across all devices.
- A clean, professional aesthetic aligned with the healthcare theme.
- Accessibility compliance, making the app easier to use for diverse audiences.

---

## 2. Colour Palette

### Colours
1. **Primary Colour**: `#005a87` (Blue)  
   - Represents trust and professionalism, used for headings and buttons.
2. **Secondary Colour**: `#4CAF50` (Green)  
   - Indicates success and confirmation actions.
3. **Alert Colour**: `#FF5722` (Red)  
   - Highlights critical alerts and errors.
4. **Background Colour**: `#FAFAFA` (Light Gray)  
   - Provides a neutral background.
5. **Text Colour**: `#333333` (Dark Gray)  
   - Ensures high contrast for readability.

### Rationale
- **Primary Colour**: Establishes trust and aligns with healthcare themes.
- **Secondary Colour**: Indicates positive feedback (e.g., success).
- **Alert Colour**: Draws attention to critical information (e.g., errors).
- **Background Colour**: Ensures content visibility without overwhelming users.
- **Text Colour**: Enhances readability and reduces eye strain.

---

## 3. App Components

### Titles
- **User Page Title**: "Hospital Triage - User"  
- **Admin Page Title**: "Hospital Triage - Admin"  

#### Design
- Font: `'Roboto', sans-serif`, Bold (700)  
- Alignment: Centered  
- Size: 32px  

### Buttons
- **Primary Button**: Green background, white text.  
  - Shape: Rounded corners  
  - Font: `'Roboto', sans-serif`, Semi-Bold (600)  
  - Hover Effect: Slight shadow with darker green.

- **Alert Button**: Red background, white text.  
  - Shape: Rounded corners  
  - Font: `'Roboto', sans-serif`, Semi-Bold (600)  

### Input Fields
- **Border**: Light gray border (`#DDDDDD`), blue highlight on focus.  
- **Font**: `'Roboto', sans-serif`, Regular (400)  
- **Padding**: 10px  

---

## 4. Layout and Navigation

### Wireframes
#### User Page
- **Header**: Includes the app title and a role selector dropdown.
- **Main Section**: Contains the patient form to check wait times.
- **Footer**: Displays copyright information.

#### Admin Page
- **Header**: Includes the app title and a logout button.
- **Main Section**:
  - **Patient Table**: Displays patient information (code, name, severity, wait time, arrival time).
  - **Add Patient Form**: Allows administrators to add new patients.
  - **Refresh Button**: Reloads the patient queue.

### Navigation Flow
1. **Login Screen**: Redirects users/admins to respective dashboards.
2. **User Page**: Allows patients to check their wait time.
3. **Admin Page**: Displays a summary of patient data and allows management actions.

### Enhancements to Interaction
- Simple and linear navigation reduces user confusion.
- Breadcrumbs and page titles improve context understanding.

---

## 5. Consistency

### Achieving Consistency
- **Typography**: Uniform fonts for headings and body text.  
- **Colours**: Consistent use of primary and secondary colours.  
- **Spacing**: Equal margins and paddings across all components.  

### Example
- Buttons follow the same style on all pages (size, font, and hover effect).  
- Input fields have the same padding and border styles on every form.

---

## Deliverables

- **Markdown File**: Includes all design details.

