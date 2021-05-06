exports.infoNosotros = (req, res) => {
    // Busca por una carpeta llamada nosotros
    res.render('nosotros', {
        pagina: 'Sobre Nosotros'
    });
    // console.log(req);
}