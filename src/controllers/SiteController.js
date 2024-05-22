
export const home = async( req,res ) =>{
    res.render( 'index' )
}

export const main = async( req,res ) =>{
    res.render( 'site/mainView' )
}

export const services = async( req,res ) => {
    res.render( 'site/servicesView' )
}

export const products = async( req,res ) =>{
    res.render( 'site/productsView' )
}

export const about = async( req,res ) =>{
    res.render( 'site/aboutView' )
}