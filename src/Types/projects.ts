import { type } from "os";

export interface Project  {
    name : string , 
    shortDescreption : string ,
    longDescreption : string , 
    completed : boolean , 
    skills : string[] ,
    logo : Blob , 
    images? : Blob[] ,
}

export type Projects = Project[]

