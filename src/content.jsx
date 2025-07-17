import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ContentPage from './ContentPage';
import './App.css'


const root = document.createElement("div");
root.id = "myDiv"
document.body.append(root);



createRoot(root).render(
    <StrictMode>
        <ContentPage/>
    </StrictMode>
)




