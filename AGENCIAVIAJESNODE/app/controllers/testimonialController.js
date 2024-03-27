import Testimonial from "../models/Testimonial.js";

export default class TestimonialController {
    static async guardar(req, res, next) {
        try {
            const {nombre, email, mensaje} = req.body;
            const values = {nombre, email, mensaje};
            const errores = {};
            Object.keys(values).forEach(key => {
                if(values[key].trim() === "") {
                    errores[key] = `${key} es obligatorio`;
                }
            });
            if(Object.keys(errores).length > 0) {
                throw {errores, values};
            }

            await Testimonial.create(values);

            res.redirect('testimoniales');
        } catch ({errores, values}) {
            res.render('testimoniales',  {
                titlePage: 'Testimoniales',
                errores,
                values
            });
        }
    }
}