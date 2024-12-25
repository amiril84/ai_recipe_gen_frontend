# AI Recipe Generator Frontend

A modern React application that generates detailed recipes and food images using AI. Built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- 🎨 Beautiful, responsive UI with Tailwind CSS
- 🔄 Real-time recipe streaming
- 🖼️ AI-generated food photography
- 🌟 Interactive recipe display
- 📱 Mobile-friendly design
- 🎯 Dietary preference support
- 🔍 Detailed nutritional information

## 🛠️ Tech Stack

- **React** - UI Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **Vite** - Build Tool
- **Zustand** - State Management

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/amiril84/ai_recipe_gen_frontend.git
cd ai_recipe_gen_frontend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Update `.env` with your backend URL:
```env
VITE_API_URL=http://localhost:3000/api
```

5. Start the development server:
```bash
npm run dev
```

## 📁 Project Structure

```
src/
├── components/        # React components
│   ├── ui/           # Reusable UI components
│   └── receipt/      # Recipe display components
├── lib/
│   ├── api.ts        # API client
│   ├── hooks/        # Custom React hooks
│   └── types.ts      # TypeScript types
├── App.tsx           # Main application component
└── main.tsx         # Application entry point
```

## 🎯 Usage

1. Enter your desired meal type (e.g., "dinner", "breakfast")
2. Specify the number of servings
3. Add any dietary preferences (optional)
4. Click "Generate Recipe"
5. Watch as your recipe is generated in real-time!

## 🔧 Configuration

The application can be configured through environment variables:

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | http://localhost:3000/api |

## 📱 Screenshots

![Recipe Generator](screenshots/recipe-generator.png)
![Generated Recipe](screenshots/generated-recipe.png)

## 🚀 Deployment

1. Build the project:
```bash
npm run build
```

2. Preview the production build:
```bash
npm run preview
```

3. Deploy the `dist` directory to your hosting provider

## 🧪 Testing

Run the test suite:
```bash
npm test
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🌟 Acknowledgments

- OpenAI for GPT-4 and DALL-E 3
- React and Vite communities
- All contributors and users!
