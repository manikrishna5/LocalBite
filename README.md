# LocalBite – Serverless Food Delivery Platform (Frontend)

LocalBite is a serverless food delivery platform designed to empower local vendors by providing an online ordering experience with low operational cost. This repository contains the complete frontend built using HTML, CSS, JavaScript, and Bootstrap. The backend uses AWS serverless architecture with secure authentication through Firebase Auth.

------------------------------------------------------------
PROJECT OVERVIEW
------------------------------------------------------------
LocalBite provides a customer-facing food ordering portal with menus, orders, favorites, wallet access, settings, partner signup, support, and legal pages.  
The backend is built with a cloud-native approach using AWS services, ensuring scalability, reliability, and cost efficiency.

------------------------------------------------------------
SERVERLESS ARCHITECTURE (BACKEND SUMMARY)
------------------------------------------------------------
AWS Lambda          – Business logic and order processing  
Amazon API Gateway  – REST API layer  
Amazon DynamoDB     – NoSQL database for users, vendors, menus, and orders  
Amazon S3           – Storage for frontend, images, and vendor uploads  
Amazon CloudFront   – CDN for fast global content delivery  
Firebase Auth       – Authentication and role management  

------------------------------------------------------------
FRONTEND FEATURES
------------------------------------------------------------
• Responsive user interface using Bootstrap 5  
• Restaurant listing and category browsing  
• User profile, orders, favorites, wallet, and settings pages  
• Restaurant partnership and delivery partner registration pages  
• Support and legal information pages  
• Dropdown menus, search bar, and promotional banners  
• Clean UI focused on usability and performance  


------------------------------------------------------------
TECH STACK
------------------------------------------------------------
HTML5 – Page structure  
CSS3 – Styling and layout  
Bootstrap 5 – Responsive UI components  
JavaScript – Interactions and routing  
Font Awesome – Icons  
Firebase Authentication – Login and role control  

------------------------------------------------------------
LOCAL SETUP
------------------------------------------------------------
1. Clone the repository:
   git clone 

2. Enter the project directory:
   cd localbite-frontend

3. Run the project:
   • Open index.html directly, or  
   • Use VS Code with the Live Server extension  

------------------------------------------------------------
DEPLOYMENT
------------------------------------------------------------
• Upload the frontend to an AWS S3 bucket  
• Enable Static Website Hosting  
• Connect the S3 bucket to a CloudFront distribution  
• Invalidate cache after updates to reflect changes instantly  

------------------------------------------------------------
ROLE-BASED ROUTING
------------------------------------------------------------
localStorage.setItem("role", "user");

if (localStorage.getItem("role") !== "user") {
    window.location.href = "index.html";
}

------------------------------------------------------------
FUTURE ENHANCEMENTS
------------------------------------------------------------
• Integration with backend APIs  
• Cart and checkout system  
• Real-time order tracking  
• Vendor and delivery partner dashboards  
• Push notifications via SNS or Firebase  
• Real-time updates using AppSync or WebSockets  

------------------------------------------------------------
TEAM MEMBERS
------------------------------------------------------------
Surya Vikas  
Nagamani  
Mani Krishna
