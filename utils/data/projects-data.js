import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Book Store App',
        description: "The Book Store project is a full-stack web application designed for managing a collection of books, featuring a responsive interface built with React.js and a robust backend powered by Node.js, Express.js, and MongoDB. Users can browse through available books, view detailed information, and manage the inventory by adding, editing, or deleting books. The application also includes user authentication and authorization to secure the management functionalities, ensuring a smooth and secure experience across all devices.",
        tools: ['React+Vite', 'TailwindCSS', 'JavaScript',"MongoDB",'Express', 'NodeJS', 'HTML', 'CSS'],
        role: 'Full Stack Developer',
        code: 'https://github.com/Saieeshsrao/Book-Store',
        demo: 'https://github.com/Saieeshsrao/Book-Store/blob/main/README.md',
        image: crefin,
    },
    {
        id: 2,
        name: 'FlappyBirdAI',
        description: 'this is a simple Flappy bird game built using JS but with a twist of AI. this spawns multiple birds and learns the path with 0 resistance over iterations to get the maximum score possible',
        tools: ["Javascript","HTML","CSS"],
        code: 'https://github.com/Saieeshsrao/FlappyBirdAI',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 3,
        name: 'EpicVision',
        description: 'This project leverages the power of CNN and GAN models and is fine tuned to portrait images, this is a project aimed to detect crimnals in public spaces and make a record of their facial features and expressions which aids the concerned authority to take necessary actions.',
        tools: ['python','pytorch','keras','tensorflow','opencv','numpy','matplotlib','scikit-learn','keras'],
        role: 'MLE',
        code: 'https://github.com/Saieeshsrao/EpicVision',
        demo: '',
        image: travel,
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },