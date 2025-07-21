# Stage Scraper Server

A Node.js/TypeScript server application for scraping internship vacancies and automatically replying to them. Built with Express.js, Prisma, and Puppeteer for web scraping capabilities.

---

## 🚀 Features

- **Web Scraping**: Automated scraping of internship vacancies using Puppeteer
- **Queue**: Async queue system using nodejs workers
- **User Authentication**: Simple session-based authentication system
- **File Upload**: Avatar and document upload functionality with validation
- **Database Integration**: MySQL database with structured table management using Prisma
- **Email Integration (Soon)**: Nodemailer for automated email responses
- **RESTful API**: Clean API endpoints for all functionality

## 🧑🏾‍💻 Dev Features

- **TypeScript**: Full TypeScript support with strict typing
- **Docker Support**: Containerized MySQL database
- **Testing**: Basic automated test suite

## 📋 Prerequisites

- Node.js (v18 or higher)
- Docker & Docker Compose
- Colima (for macOS users)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies**
   ```bash
   yarn install # or npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```ts
   APP_NAME="Stage Scraper 1.0"
   PORT=3000
   NODE_ENV="development"
   SECRET="your-secret-key"
   FRONTEND_URL="http://localhost:5173"
   ASSET_BASE_URL="http://localhost:3000"

   // Determines the delay between auto running any pending tasks in the queue.
   QUEUE_DELAY_SECONDS=60

   DATABASE_URL="mysql://scraperuser:scraperpassword@localhost:3306/stage_scraper"

   ```

4. **Start the development environment**
   ```bash
   yarn dev # or npm run dev
   ```
   This command will:
   - Start Colima (macOS)
   - Start MySQL database via Docker Compose
   - Start the development server with nodemon

## 🏗️ Project Structure

```
server/
├── docker-compose.yml
├── eslint.config.js
├── index.ts
├── nodemon.json
├── package.json
├── README.md
├── testconfig.json            # Config for custom testing script.
├── tsconfig.build.json
├── tsconfig.json
├── uploads/
├── scripts/                   # Helper scripts
├── src/
│   ├── db/
│   ├── jobs/
│   ├── lib/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── scrapers/              
│   ├── services/                    
│   ├── tests/
│   ├── types/
│   ├── App.ts                 # Main application class (Singleton)
```

## 🚀 Available npm scripts

- `yarn start` - Start the production server
- `yarn dev` - Start development environment (Colima + Docker + nodemon)
- `yarn build` - Build the project using TypeScript
- `yarn test` - Run the test suite
- `yarn stop` - Stop Docker services and Colima

## 🗄️ Database

The application uses MySQL 8.0 running in Docker. The database configuration is defined in `docker-compose.yml` and `.env`

## 🔌 API Endpoints

### Authentication (`/auth`)
- `POST /auth/login` - User login
- `POST /auth/register` - User registration
- `POST /auth/logout` - User logout

### Web Scraping (`/scrape`)
- `GET /scrape/` - Get scraping status/info

### File Upload (`/upload`)
- `POST /upload/avatar` - Upload user avatar

## 🔧 Configuration

### TypeScript Configuration
- **Target**: ES2022
- **Module**: NodeNext
- **Strict**: Enabled
- **Path Mapping**: Configured for clean imports

### Build Configuration
- **Output**: `dist/` directory
- **Source Maps**: Enabled
- **External Dependencies**: Properly configured for production

## 🧪 Testing

The project includes a simple custom test suite:

- **Test Runner**: Custom test runner in `scripts/test.ts`
- **Test Framework**: Supertest for testing API calls
- **Test Files**: Located in `src/tests/` by default.
- **Test Config**: `testconfig.json` located in project root

Run tests with:
```bash
yarn test # or npm run test
```

## 🔒 Security Features

- **Session Management**: Express-session with secure cookies
- **CORS**: Configured for frontend integration
- **File Upload Validation**: Size and type validation
- **Input Validation**: Request validation middleware
- **SQL Injection Protection**: Parameterized queries

## 📦 Dependencies

### Core Dependencies
- `express` - Web framework
- `mysql2` - MySQL database driver
- `puppeteer` - Web scraping
- `nodemailer` - Email functionality
- `multer` - File upload handling
- `express-session` - Session management
- `cors` - Cross-origin resource sharing
- `path`

### Development Dependencies
- `typescript` - TypeScript compiler
- `nodemon` - Development server
- `supertest` - API testing
- `esbuild` - Build tool
- `tsx` - TypeScript execution

## 🐳 Docker

The application uses Docker for the MySQL database:

```yaml
services:
  mysql:
    image: mysql:8.0
    container_name: stage-scraper-mysql
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: stage_scraper
      MYSQL_USER: scraperuser
      MYSQL_PASSWORD: scraperpassword
    ports:
      - "3306:3306"
```

## 🔄 Development Workflow

1. **Start Development Environment**
   ```bash
   yarn dev
   ```

2. **Make Changes**
   - Edit TypeScript files in `src/`
   - If necessary, write or update a test in `src/tests`
   - Update test config to set which test are selected, excluded and/or prioritized
3. **Run Tests**
   ```bash
   yarn test
   ```

4. **Build for Production**
   ```bash
   yarn build
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Run the test suite
6. Submit a pull request

## 👨‍💻 Author

Vincent P.

---

**Note**: This is a development project for scraping internship vacancies and automatically replying to them. Please ensure compliance with website terms of service and applicable laws when using web scraping functionality. 