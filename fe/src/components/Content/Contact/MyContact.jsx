import React, { useState } from 'react';

function MyContact() {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    messaggio: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Invia i dati del modulo al server o gestisci l'elaborazione qui
    console.log('Dati inviati:', formData);
  };

  return (
    <div>
      <h2>Contattaci</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="cognome">Cognome:</label>
        <input
          type="text"
          id="cognome"
          name="cognome"
          value={formData.cognome}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="telefono">Telefono:</label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="messaggio">Messaggio:</label>
        <textarea
          id="messaggio"
          name="messaggio"
          rows="4"
          value={formData.messaggio}
          onChange={handleChange}
          required
        />
        <br />
        <input type="submit" value="Invia" />
      </form>
    </div>
  );
}

export default MyContact;
