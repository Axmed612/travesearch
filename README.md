# TraveSearch

An innovative travel and career discovery platform that offers personalized journey planning and professional growth experiences through intelligent recommendation systems and user-centric design.

## Features

- **Personalized Travel Planning**: AI-powered itinerary generation
- **Career Discovery**: Professional growth opportunities
- **Advanced Authentication**: WebAuthn/Biometric support with 2FA
- **Modern UI/UX**: React.js with Framer Motion animations
- **Secure Backend**: Express.js with comprehensive validation
- **Real-time Analytics**: User behavior tracking and insights

## Tech Stack

- **Frontend**: React.js, TypeScript, Tailwind CSS
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL with Drizzle ORM
- **State Management**: React Query
- **Validation**: Zod
- **Authentication**: JWT with 2FA support
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Axmed612/travesearch.git
cd travesearch
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your database and API credentials
```

4. Set up the database:
```bash
npm run db:push
```

5. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Project Structure

```
travesearch/
├── client/          # React frontend
├── server/          # Express backend
├── shared/          # Shared types and schemas
├── migrations/      # Database migrations
└── package.json     # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run db:push` - Push schema changes to database
- `npm run db:studio` - Open Drizzle Studio

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.