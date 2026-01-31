export interface Record {
  id: string;
  name: string;
  releaseYear: number;
  services: Service[];
  artwork: string;
}

export interface Service {
  name: string;
  url: string;
}
