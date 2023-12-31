import "./GameCard.css"
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const TagComponent = styled.p`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    border-radius: 0.3rem;
    padding: 5px;
    margin: 5px;
    height: fit-content;
    font-family: 'Inter' , sans-serif;
    font-weight: normal;
    background-color: ${(props => 
        props.variant === "Cooperativo" 
        ? "#DFF0FF" 
        : props.variant === "VS" 
        ? "#FFC7C7" 
        : props.variant === "Party" 
        ? "#C3F8DF": "#D9D9D9")};
    color: ${(props => 
        props.variant === "Cooperativo" 
        ? "#7DC2FF" 
        : props.variant === "VS"
        ? "#BE5E5E" 
        : props.variant === "Party" 
        ? "#3B9D6F": "#2222" )};
    `;

export function GameCard({imgName, gameName, tags, isFavourite ,link}){
    return(
       <article className="card">
            <a href ={link} target="_blank" className="card-a-image">
            <img className="card-image" src={`src/assets/imgs/${imgName}`} alt="Splash screen"></img>
            </a>
            <a href ={link} target="_blank" className="NoChange">
            <h2 className="card-title">{gameName}</h2>
            </a>
            <TagComponent variant={tags} >{tags}</TagComponent>
            {isFavourite == "true" ? <FontAwesomeIcon icon={faHeart} className="Fav-Badge"/> : null}
        </article> 
    );
}

