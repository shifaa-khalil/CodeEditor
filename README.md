# PyScribe

Pyscribe is a code editor that allows users to sign in, sign up, compile Python code, save and download files, upload images, and chat with other developers. It is built using React and Laravel frameworks.

## Team Members

- Ayman Hajjar - Team Leader
- Shifaa Khalil
- Salman Moussa
- Mohamad Shoumar

## Color Palette

- #FFA500 (Bright Green)
- #0000 (White)

## User Stories

- As a user, I can sign up with my email and password to create an account.
- As a customer, I want to be able to reset my password on an online shopping website if I forget it, so that I can regain access to my account.
- As a user, I can sign in with my email and password to access my account.
- As a user, I can compile Python code in the editor.
- As a user, I can save and download files from the editor.
- As a user, I can upload an image to my profile.
- As a user, I can chat with other developers in real-time.

## Admin Stories

- As an admin, I want to be able to view the users accounts so that I can ensure that the website is providing a safe and secure user experience.


## Implementation

| Section         | Screenshot                                |
| --------------- | ----------------------------------------- |
| Home Page       | ![Home Page](./assets/home.png)           |
| Product Page    | ![Product Page](./assets/products.png)    |
| Login Page      | ![Login Page](./assets/login.png)         |
| Signup Page     | ![Signup Page](./assets/register.png)     |
| Product Details | ![Product Details](./assets/products.png) |

## How to Run

### Prerequisites:

- A local development environment (e.g. XAMPP, MAMP, WAMP, LAMP) installed on your machine
- MySQL installed and running on your machine
- Git installed on your machine


### Steps:

1. Open your terminal and navigate to the directory where you want to clone the project.
   `cd /path/to/your/directory`
2. Clone the project from the GitHub repository using git:
   `git clone https://github.com/your-username/Codeeditor.git`
3. Navigate into the project directory:
   `cd Codeeditor`
4. Install the dependencies for the React front-end:
   `cd client npm install`
5. Generate a new application key:
    `php artisan key:generate`
6. Migrate the database:
    `php artisan migrate`
7. Seed the database with some initial data:
     `php artisan db:seed
8. Start the development server:
    `php artisan serve`
9. In a separate terminal window, navigate back to the client directory and start the React development server:
    `cd ../client` 
    `npm start`


