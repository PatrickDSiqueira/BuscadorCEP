import '../Home/style.css';





export function Home() {
    return (
        <div>

    <div className="container">
        <form >
            <h1 id="titulo">Consultando CEP</h1>
            <div className="form-group">
                <label htmlFor="cep">CEP</label><br/>
                <input type="text" className="form_control" id="cep" maxLength="9" /><br/>
                <small /*style="font-size: 10px;"*/>00000-000</small>
            </div>
            <br/>
            <div className="form-group">
                <label htmlFor="logradouro">Logradouro</label><br/>
                <input type="text" className="form_control" id="logradouro"/><br/>
                <small>Rua</small>
            </div><br/>
            <div className="form-group">
                <label htmlFor="bairro">Bairro</label><br/>
                <input type="text" className="form_control" id="bairro"/><br/>
                <small>Bairro</small>
            </div><br/>
            <div className="form-group">
                <label htmlFor="localidade">Localidade</label><br/>
                <input type="text" className="form_control" id="localidade"/><br/>
                <small>Cidade</small>
            </div><br/>
            <div className="form-group">
                <label htmlFor="uf">UF</label><br/>
                <input type="text" className="form_control" id="uf"/><br/>
                <small>Estado</small>
            </div>
        </form> 
    </div>

        </div>
    )
}