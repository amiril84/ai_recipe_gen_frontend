import type { GenerateRecipeParams, Recipe } from './types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export async function generateRecipe(params: GenerateRecipeParams): Promise<Recipe> {
  const response = await fetch(`${API_URL}/recipe/generate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    throw new Error('Failed to generate recipe');
  }

  return response.json();
}

export async function generateImage(prompt: string): Promise<string> {
  const response = await fetch(`${API_URL}/recipe/generate-image`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt }),
  });

  if (!response.ok) {
    throw new Error('Failed to generate image');
  }

  const data = await response.json();
  return data.imageUrl;
}