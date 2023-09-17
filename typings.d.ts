export interface About {
    title: string;
    description: string;
    aboutImage: file;
}

export interface ListItem {
    id: number;
    status: boolean;
    text: string;
    component: string;
}