export interface Record {
  id: string;
  name: string;
  releaseYear: number;
  services: Service[];
  artwork: string;
}

type AllowedServices = "Spotify" | "Apple Music" | "YouTube Music";

export interface Service {
  name: AllowedServices;
  url: string;
}
