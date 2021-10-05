import React from 'react';

function SearchForm() {
  return(

    <form id="search-senseis">

      <div className="input-block">

        <label for="name-sensei">Nome do Sensei</label>

        <input name="name-sensei" id="name-sensei" type="text"/>

      </div>

      <div className="select-block">

        <label for="subject">Matéria</label>

        <select name="subject" id="subject">
          <option value="" disabled="">Selecione uma matéria</option>
          <option value="1">Programação</option>
          <option value="2">Biologia</option>
          <option value="3">Ciências</option>
          <option value="4">Educação Física</option>
          <option value="5">Física</option>
          <option value="6">Geografia</option>
          <option value="7">História</option>
          <option value="8">Matemática</option>
          <option value="9">Português</option>
          <option value="10">Química</option>
          <option value="11">Artes</option>

        </select>

      </div>

      <button type="submit">
        Buscar
      </button>

    </form>

  );
}

export default SearchForm;