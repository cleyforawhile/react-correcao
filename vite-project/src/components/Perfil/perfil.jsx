const Perfil = () => {
    const usuario = {
        nome: 'Halcer',
        avatar: 'https://github.com/cleyforwhile.png'
    }

    return (
        <div>
            <img src={usuario.avatar} />
            <h3>{usuario.nome}</h3>
        </div>
    )
    
}

export default Perfil;