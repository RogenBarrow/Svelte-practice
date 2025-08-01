# Arise Church Attendance Tracker

A SvelteKit application for tracking church attendance data with analytics and reporting capabilities.

## Features

- 📊 **Attendance Data Entry**: Submit attendance data for adults, kids, and leaders
- 📈 **Analytics Dashboard**: Visual charts showing monthly attendance trends
- 📋 **Data Tables**: Paginated data display with sorting and filtering
- 🗑️ **Data Management**: View, edit, and delete attendance records
- 📄 **PDF Export**: Generate reports in PDF format
- 🔒 **Form Validation**: Server-side validation for data integrity

## Tech Stack

- **Frontend**: SvelteKit 4.x, Skeleton UI, Tailwind CSS
- **Backend**: Supabase (PostgreSQL)
- **Data Tables**: @vincjo/datatables
- **PDF Generation**: jsPDF
- **Styling**: Tailwind CSS with Skeleton theme

## Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account and project

## Environment Variables

Create a `.env` file in the root directory:

```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_anon_key
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Svelte-practice
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (see above)

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## Database Schema

The application uses the following Supabase table structure:

```sql
CREATE TABLE attendance (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    amount INTEGER NOT NULL,
    amount_kids INTEGER NOT NULL,
    amount_kids_leader INTEGER NOT NULL,
    total_amount INTEGER NOT NULL,
    name VARCHAR(255) NOT NULL,
    accurate BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT NOW()
);
```

## Project Structure

```
src/
├── lib/
│   ├── components/          # Reusable UI components
│   ├── services/           # Business logic and API calls
│   └── utils/              # Utility functions
├── routes/
│   ├── api/               # API endpoints
│   ├── form/              # Data entry form
│   └── displaydata/       # Data display pages
└── types/                 # TypeScript type definitions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Type check the codebase

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
