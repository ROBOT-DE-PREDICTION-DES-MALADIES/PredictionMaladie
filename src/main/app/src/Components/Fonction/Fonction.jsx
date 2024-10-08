import React from 'react'
import './Fonction.css'
import securite from '../../assets/securite.jpg'
import pred from '../../assets/pred.jpg'
import chat from '../../assets/chat.jpg'

const Fonction = () => {
  return (
    <div className='fonctions'>
      <div className='fonction'>
        <img src={securite} alt="Sécurité de la plateforme" />
        <p>Sécurité complète de la plateforme</p>
      </div>
      <div className='fonction'>
        <img src={pred} alt="Prédiction des maladies" />
        <p>Prédiction des maladies via symptômes</p>
      </div>
      <div className='fonction'>
        <img src={chat} alt="Chatbot" />
        <p>Communiquer avec le chatbot pour détails</p>
      </div>
    </div>
  )
}

export default Fonction
