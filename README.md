# Supercar AI Sales Assistant

A modern web application that provides an interactive chat interface with an AI sales assistant for SuperCar dealerships. Built with Next.js and FastAPI.

## Features

- 🤖 Real-time AI chat interface with streaming responses
- 🛠️ Integrated tools for:
  - Weather information
  - Dealership locations
  - Appointment scheduling
- 💬 Server-Sent Events (SSE) for real-time communication
- 🎨 Modern UI with responsive design
- ⚡ Fast and efficient message handling

## Tech Stack

- **Frontend**:
  - Next.js 14
  - TypeScript
  - Tailwind CSS
  - Zustand (State Management)
  - Shadcn UI Components

- **Backend**:
  - FastAPI
  - SSE (Server-Sent Events)
  - Docker integration

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Access the Application**
   Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
frontend/
├── src/
│   ├── app/              # Next.js app router
│   ├── components/       # React components
│   │   ├── chat/        # Chat-related components
│   │   ├── layout/      # Layout components
│   │   ├── tool-outputs/# Tool-specific UI components
│   │   └── ui/          # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   ├── store/           # Zustand state management
│   └── types/           # TypeScript type definitions
```

## Features in Detail

### Chat Interface
- Real-time message streaming
- Support for various tool outputs
- Auto-scrolling message list
- Responsive textarea with auto-resize

### Tool Outputs
- Weather information display
- Dealership address visualization
- Appointment scheduling interface
- Available time slots selection

### UI/UX
- Clean and modern design
- Smooth animations
- Mobile-responsive layout
- Loading states and error handling

## Development

- Use `npm run lint` to check for linting issues
- Use `npm run build` to create a production build
- Use `npm run start` to run the production build

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request