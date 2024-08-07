declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MOVIE_API_URL: string;
      MOVIE_API_KEY: string;
      MOVIE_API_IMAGE_URL: string;
      API_URL: string;
      JWT_SECRET_KEY: string;
    }
  }
}

export {};
