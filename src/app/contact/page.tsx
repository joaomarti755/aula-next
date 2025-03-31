import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

export default function Contact() {
    return (
        <div className='container mx-auto py-12 px-4'>
            <h1 className='text-4xl font-bold mb-6 text-center'>CONTATOS</h1>

            <div>
                <h4 className='text-2xl font-bold mb-6'>Horário de funcionamento</h4>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {["Seg-Sex: 09:00 - 18:00", "Sáb: 10:00 - 14:00", "Domingo: Fechado"]
                        .map((day, index) => (
                            <div key={index} className='border-2 border-blue-900 rounded-lg p-6 bg-white shadow-md'>
                                <h3 className='text-lg font-bold mb-3'>{day}</h3>
                            </div>
                        ))}
                </div>
            </div>

            <div className='mt-10'>
                <h4 className='text-2xl font-bold mb-6'>Localização</h4>
                <iframe className='w-full h-64 rounded-lg shadow-md' 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28462.591652756033!2d-49.0733568!3d-26.909081599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1743459251194!5m2!1spt-BR!2sbr" 
                allowFullScreen 
                loading="lazy">
                </iframe>
                
                
                
            </div>               



        </div>

        

    )
}