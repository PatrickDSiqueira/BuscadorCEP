import '../Home/style.css';


export function Home() {
    return (
        <div>
            <divBody>
    <div class="container">
        <form >
            <h1 id="titulo">Consultando CEP</h1>
            <div class="form-group">
                <label for="cep">CEP</label><br/>
                <input type="text" class="form_control" id="cep" maxlength="9"/><br/>
                <small /*style="font-size: 10px;"*/>00000-000</small>
            </div>
            <br/>
            <div class="form-group">
                <label for="logradouro">Logradouro</label><br/>
                <input type="text" class="form_control" id="logradouro"/><br/>
                <small>Rua</small>
            </div><br/>
            <div class="form-group">
                <label for="bairro">Bairro</label><br/>
                <input type="text" class="form_control" id="bairro"/><br/>
                <small>Bairro</small>
            </div><br/>
            <div class="form-group">
                <label for="localidade">Localidade</label><br/>
                <input type="text" class="form_control" id="localidade"/><br/>
                <small>Cidade</small>
            </div><br/>
            <div class="form-group">
                <label for="uf">UF</label><br/>
                <input type="text" class="form_control" id="uf"/><br/>
                <small>Estado</small>
            </div>
        </form> 
    </div>
    <script src="main.js"></script>
</divBody>
        </div>
    )
}