import { Projects } from "../Types";
import DayAfterDayLogo from '../images/dayAfterDayLogo.png' ;
import journalingImage from '../images/journaling.png'
// short descreption should be between 5 to 8 words at maximum
export const MyProjects : Projects = [
{name : 'Day After Day' ,  images : [ journalingImage ],  shortDescreption : 'Productivity and day  management app' , longDescreption : 'an app to manage your toughts , set your goals ,<br/>write your dailly   journalings and toughts and <br/>how many hours you have been productive <br/>each day '  , logo : DayAfterDayLogo  , completed : true , skills : ['react js ', 'node js' , 'express js', 'typescript' , 'mongodb'  ,'material ui' , 'redux' ] } , 
{name :  'ChatX' , images : [journalingImage] , shortDescreption : 'a chat app similar to instagram' ,logo : DayAfterDayLogo , longDescreption : 'a social media app where you can see your friend s posts , write comments ,  like posts , search for members and follow other people '  , skills : ['react js' ,' node js'  , 'express js' , 'javascriipt' , 'material ui' , 'firebase' ] , completed : true , }, 
{name : 'Travel App' , images : [journalingImage]  , logo : DayAfterDayLogo , shortDescreption : 'an app that make travel easier for you' , longDescreption : 'a web app where you can explore diffrent hotels in any city and see the hotel review and what other people are saying about this hotel , you can also see the weather in any city you want and explore the map' , completed : true , skills : ['html' ,' css' , 'javascript' , 'rest api' , 'react js' ,'material ui'  ], images : [journalingImage] } ]


export default MyProjects