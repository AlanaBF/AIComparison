export enum ReadingLevel {
  Child = 'Child',
  Teen = 'Teen',
  Adult = 'Adult',
  Expert = 'Expert'
}

export interface TextSimplificationRequest {
  text: string;
  level: ReadingLevel;
}

export interface TextSimplificationResponse {
  simplifiedText: string;
  level: ReadingLevel;
}
