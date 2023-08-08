import './Form.css';


function Form () {
    return (
        <div className="form-container">
            <form class="row g-3">
              <div class="col-12">
                <label for="inputName" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="inputName" placeholder="The Last of Us"/>
              </div>
              <div class="col-12">
                <label for="inputDescription" class="form-label">Descripcion</label>
                <input type="text" class="form-control" id="inputDescription"/>
              </div>
              <div class="col-md-6">
                <label for="inputImage" class="form-label">Imagen</label>
                <input type="text" class="form-control" id="inputImage" placeholder="Insert image URL"/>
              </div>
              <div class="col-md-4">
                <label for="inputState" class="form-label">Genero</label>
                <select id="inputState" class="form-select">
                  <option selected>Selecciona...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="col-md-4">
                <label for="inputState" class="form-label">Plataforma</label>
                <select id="inputState" class="form-select">
                  <option selected>Selecciona...</option>
                  <option>Playstation 4</option>
                  <option>Playstation 5</option>
                  <option>Nintendo Switch</option>
                  <option>XBox 360</option>
                </select>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary">Sign in</button>
              </div>
            </form>
        </div>
    );
}

export default Form;