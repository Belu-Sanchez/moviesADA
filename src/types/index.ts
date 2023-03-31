export type User = {
  id: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  birthdate: Date;
  token?: string | null;
};


export type LoginForm = {
  email: string;
  pass: string;
};

export type SignUpForm = Omit<User, 'id' | 'birthdate'> & { birthdate: Date}
export type SignUpPayload = SignUpForm


export type PostersMovies = {
  items: Partial<Movie>[]
  text?: string 
}

export type Details = {
  items: Partial<Movie>[] | any
  video?: Video[] | any
    
}

export type Movie = { 
  id: number
  title : string
  overview: string
  backdrop_path: string
  poster_path: string
};

export type Video = {
  id: string 
  key: string
}