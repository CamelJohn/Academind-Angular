export interface ServerElement {
  type: 'server' | 'blueprint';
  name: string;
  content: string;
}

export interface ServerData {
  name: string;
  content: string;
}
