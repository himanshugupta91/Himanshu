import cryptoFeature from '../assets/projects/crypto-feature.jpg';

export const projects = [
    {
        id: "coinx-crypto",
        title: "CoinX Crypto Platform",
        description: "A full-stack cryptocurrency trading platform similar to Binance, built with Spring Boot backend and React frontend.",
        longDescription: "CoinX is a comprehensive cryptocurrency trading ecosystem designed to mimic professional exchanges like Binance. It features real-time trading capabilities, wallet management, portfolio tracking, and secure payment processing. The platform ensures security with JWT authentication, OAuth2 social login, and Two-Factor Authentication (2FA), providing a complete solution for cryptocurrency enthusiasts and traders.",
        tags: ["Spring Boot", "React", "MySQL", "Tailwind", "Redux"],
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        github: "https://github.com/himanshugupta91/CoinX-Cryptocurrency-Trading-Platform",
        features: [
            { title: "JWT & OAuth2 Authentication", description: "Secure authentication with Spring Security, social login integration, and 2FA support." },
            { title: "Real-time Trading Engine", description: "Live cryptocurrency price tracking with buy/sell execution and market/limit order management." },
            { title: "Multi-Currency Wallet", description: "Deposit, withdrawal, and transfer functionality with Razorpay and Stripe payment integration." },
            { title: "Portfolio Analytics", description: "Interactive charts with ApexCharts and Recharts showing profit/loss calculations and market trends." },
            { title: "Watchlist & Order History", description: "Track favorite coins and view complete trading activity history." },
            { title: "Admin Panel", description: "User management, withdrawal approvals, and account verification system." }
        ],
        techStack: {
            Backend: ["Spring Boot 3.2.4", "Java 17/19", "MySQL", "Spring Security", "JWT", "OAuth2", "Maven"],
            Frontend: ["React 18.2.0", "Vite 5.0.8", "Tailwind CSS", "Redux Thunk", "Radix UI", "ApexCharts", "Recharts"],
            PaymentGateways: ["Razorpay", "Stripe"],
            APIs: ["CoinGecko API", "Gemini API"]
        }
    },
    {
        id: "food-ordering",
        title: "CraveHub Food Delivery",
        description: "A comprehensive food ordering and delivery management system built with modern technologies.",
        longDescription: "CraveHub provides a seamless experience for customers to browse restaurants, place orders, and track deliveries, while offering restaurant owners powerful tools to manage their menus, orders, and business operations. The platform features separate portals for Customers, Restaurant Owners, and Super Admins, all governed by a secure Role-Based Access Control (RBAC) system with JWT authentication.",
        tags: ["React", "Spring Boot", "Material UI", "Stripe", "Redux"],
        gradient: "linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)",
        github: "https://github.com/himanshugupta91/Full-Stack-Food-Ordering-Website-",
        features: [
            { title: "Role-Based Access Control", description: "Separate portals for Customers, Restaurant Owners, and Super Admins with JWT authentication." },
            { title: "Restaurant Management", description: "Complete CRUD operations for restaurant profiles, menus, ingredients, and categories." },
            { title: "Smart Cart & Order Tracking", description: "Real-time cart updates with live order status tracking (PENDING → PREPARING → READY → DELIVERED)." },
            { title: "Stripe Payment Integration", description: "Secure payment processing with multiple payment methods and transaction history." },
            { title: "Search & Favorites", description: "Advanced restaurant and food item search with customer favorites and reviews system." },
            { title: "Admin Dashboard", description: "Business analytics, restaurant approval, user management, and system monitoring." }
        ],
        techStack: {
            Backend: ["Spring Boot 3.1.3", "Java 17", "Spring Security 6.x", "Spring Data JPA", "MySQL 8.x", "JWT", "Maven"],
            Frontend: ["React 18.2.0", "Material UI 5.14.6", "Redux 4.2.1", "Tailwind CSS", "Formik", "Axios"],
            PaymentGateways: ["Stripe API"],
            Services: ["Spring Mail", "Email Notifications"]
        }
    },
    {
        id: "book-management",
        title: "Book Management API",
        description: "A modern, production-ready RESTful API built with Spring Boot for managing books and authors.",
        longDescription: "This project serves as a reference implementation for enterprise-grade Java development, demonstrating best practices in clean architecture, comprehensive CRUD operations, and containerization support. Built with Spring Boot 3.5.7 and PostgreSQL, it features complete lifecycle management for books and authors with pagination, sorting, partial updates, and Docker support, making it ready for high-scale production environments.",
        tags: ["Java", "Spring Boot", "PostgreSQL", "Docker", "REST API"],
        gradient: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
        github: "https://github.com/himanshugupta91/Book-Management-REST-API",
        features: [
            { title: "Complete CRUD Operations", description: "Full lifecycle management for Books and Authors with RESTful API design following industry best practices." },
            { title: "Clean Architecture", description: "Layered architecture with Controllers, Services, Repositories, DTOs, and Entities for separation of concerns." },
            { title: "Advanced Features", description: "Pagination support, partial updates using PATCH endpoints, and entity-DTO mapping with ModelMapper." },
            { title: "PostgreSQL Integration", description: "Robust data persistence with JPA/Hibernate ORM capabilities and normalized database schema." },
            { title: "Docker Support", description: "Fully containerized setup with Docker and Docker Compose for easy deployment and development." },
            { title: "Testing & Quality", description: "JUnit testing with H2 in-memory database and Lombok integration for reduced boilerplate code." }
        ],
        techStack: {
            Backend: ["Spring Boot 3.5.7", "Java 25", "Spring Data JPA", "Hibernate"],
            Database: ["PostgreSQL 12+", "H2 (Testing)"],
            Tools: ["Docker", "Docker Compose", "Maven 3.6+", "Lombok", "ModelMapper 3.2.6"],
            Testing: ["JUnit", "H2 Database"]
        }
    },
    {
        id: "employee-payroll",
        title: "Employee Payroll System",
        description: "A console-based Employee Payroll Management System demonstrating core OOP principles.",
        longDescription: "An educational yet practical application designed to showcase the power of Object-Oriented Programming in Java. It implements a payroll system that manages employee records and calculates salaries for different types of employees (Full-Time and Part-Time). The system demonstrates how abstract classes and inheritance can be used to create a flexible and maintainable codebase, handling complex payroll calculations, employee hierarchy management, and automatic salary computation.",
        tags: ["Java", "OOP", "Console App"],
        gradient: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
        github: "https://github.com/himanshugupta91/Java-Employee-Payroll-System-Project",
        features: [
            { title: "Abstraction", description: "Employee abstract class with calculateSalary() abstract method for extensibility." },
            { title: "Inheritance", description: "FullTimeEmployee and PartTimeEmployee classes extend the Employee base class." },
            { title: "Encapsulation", description: "Private fields (name, id, monthlySalary) with public getters for data protection." },
            { title: "Polymorphism", description: "Method overriding for calculateSalary() and toString() with specialized behavior." },
            { title: "Employee Management", description: "Add, remove, and display employee records using ArrayList collections." },
            { title: "Automated Calculations", description: "Automatic salary computation based on employee type (fixed monthly or hourly rate)." }
        ],
        techStack: {
            Language: ["Java"],
            Concepts: ["OOP", "Abstraction", "Inheritance", "Encapsulation", "Polymorphism", "Collections"],
            DataStructures: ["ArrayList"]
        }
    },
    {
        id: "hospital-management",
        title: "Hospital Management System",
        description: "Comprehensive system built with Java and MySQL to streamline hospital operations.",
        longDescription: "A robust desktop application for managing the complex workflows of a hospital. It streamlines patient registration, doctor management, and appointment booking through an intuitive command-line interface. Built with Java and JDBC, it ensures efficient data handling and persistent storage using MySQL, providing a reliable solution for healthcare administration. The system leverages Object-Oriented Programming principles to efficiently manage patients, doctors, and appointments with smart scheduling and conflict prevention.",
        tags: ["Java", "MySQL", "JDBC", "Desktop App"],
        gradient: "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
        github: "https://github.com/himanshugupta91/Hospital-Management-System",
        features: [
            { title: "Patient Management", description: "Register new patients with essential details (name, age, gender) and view all registered patients in formatted tables." },
            { title: "Patient Lookup", description: "Search and verify patient records by ID for quick access to patient information." },
            { title: "Doctor Management", description: "Browse all available doctors with their specializations and verify doctor availability by ID." },
            { title: "Smart Appointment Booking", description: "Book appointments by selecting patient, doctor, and date with automatic availability verification." },
            { title: "Conflict Prevention", description: "Ensures no double-booking of doctors and validates appointment scheduling." },
            { title: "MySQL Integration", description: "Persistent data storage with JDBC for reliable patient, doctor, and appointment records." }
        ],
        techStack: {
            Backend: ["Java 8+", "JDBC", "MySQL Connector/J"],
            Database: ["MySQL 8.0+"],
            Frontend: ["Command-line Interface", "Console-based UI"],
            Architecture: ["OOP", "MVC Pattern"]
        }
    },
    {
        id: "number-guessing",
        title: "Number Guessing Game",
        description: "Interactive command-line game featuring multiple difficulty levels and score tracking.",
        longDescription: "A feature-rich command-line number guessing game built with Java, where the computer randomly selects a number between 1 and 100, and the player attempts to guess it. The game features three difficulty levels (Easy: 10 attempts, Medium: 5 attempts, Hard: 3 attempts), an intelligent proximity-based hint system that activates after 3 attempts, and persistent high score tracking across sessions. It demonstrates modern Java features including switch expressions, enums, HashMap for data storage, and time tracking capabilities.",
        tags: ["Java", "Game", "Logic"],
        gradient: "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)",
        github: "https://github.com/himanshugupta91/number-guessing-game",
        features: [
            { title: "Multiple Difficulty Levels", description: "Choose from Easy (10 attempts), Medium (5 attempts), or Hard (3 attempts) modes." },
            { title: "Intelligent Hint System", description: "After 3 attempts, receive proximity-based hints: 'Quite close' (within 25%), 'Close' (within 50%), or 'Far off'." },
            { title: "High Score Tracking", description: "Persistent high score tracking (fewest attempts) for each difficulty level across game sessions." },
            { title: "Time Tracking", description: "Measures and displays completion time in seconds for each game session." },
            { title: "Unlimited Replay", description: "Play unlimited rounds with seamless replay functionality and clean menu-driven interface." },
            { title: "Modern Java Features", description: "Utilizes Java 14+ switch expressions, enums with methods, and HashMap for data storage." }
        ],
        techStack: {
            Language: ["Java 14+"],
            Concepts: ["Enums", "HashMap", "OOP", "Exception Handling", "Time Measurement"],
            Features: ["Switch Expressions", "Static Methods", "Scanner Input"]
        }
    }
];
