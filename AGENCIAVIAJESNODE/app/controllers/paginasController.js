import Testimonial from "../models/Testimonial.js";
import Viaje from "../models/Viaje.js";

export default class PaginasController {
    static async inicio(req, res) {
        try {
            const [viajes, testimoniales] = await Promise.all([
                Viaje.getWithLimit(3),
                Testimonial.getWithLimit(3)
            ]);
            res.render('inicio', {
                titlePage: 'Inicio',
                clase: 'home',
                viajes,
                testimoniales
            });
        } catch (error) {
            res.render('error');
        }
    }
    static nosotros(req, res) {
        res.render('nosotros', {
            titlePage: 'Nosotros',
        });
    }
    static async viajes(req, res) {
        try {
            const viajes = await Viaje.getWithLimit(null);
            res.render('viajes', {
                titlePage: 'Próximos Viajes',
                viajes
            });
        } catch (error) {
            res.render('error');
        }
    }
    static async mostrarViaje(req, res) {
        try {
            const {viajeSlug} = req.params;
            
            const viaje = await Viaje.findOne({where: {slug: viajeSlug}});
            
            res.render('viajeSelected', {
                titlePage: `Información de ${viaje.titulo}`,
                viaje
            })            
        } catch (error) {
            res.render('error');
        }
    }
    static async testimoniales(req, res) {
        try {
            const testimoniales = await Testimonial.getWithLimit(null);
            res.render('testimoniales', {
                titlePage: 'Testimoniales',
                testimoniales,
            });
        } catch (error) {
            res.render('error');
        }
    }
}